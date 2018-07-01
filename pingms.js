//
//
// JavaScript code of HTTP ping.
// The full project is at https://github.com/pingms/pingms
//
//
"use strict"

//
//
// Test Data
const data = {
    Vultr: [{
        name: "Frankfurt",
        url: "http://fra-de-ping.vultr.com/"
    }, {
        name: "Amsterdam",
        url: "http://ams-nl-ping.vultr.com/"
    }, {
        name: "Paris",
        url: "http://par-fr-ping.vultr.com/"
    }, {
        name: "London",
        url: "http://lon-gb-ping.vultr.com/"
    }, {
        name: "Singapore",
        url: "http://sgp-ping.vultr.com/"
    }, {
        name: "Tokyo",
        url: "http://hnd-jp-ping.vultr.com/"
    }, {
        name: "New Jersey",
        url: "http://nj-us-ping.vultr.com/"
    }, {
        name: "Chicago",
        url: "http://il-us-ping.vultr.com/"
    }, {
        name: "Seattle",
        url: "http://wa-us-ping.vultr.com/"
    }, {
        name: "Atlanta",
        url: "http://ga-us-ping.vultr.com/"
    }, {
        name: "Miami",
        url: "http://fl-us-ping.vultr.com/"
    }, {
        name: "Dallas",
        url: "http://tx-us-ping.vultr.com/"
    }, {
        name: "Silicon Valley",
        url: "http://sjo-ca-us-ping.vultr.com/"
    }, {
        name: "Los Angeles",
        url: "http://lax-ca-us-ping.vultr.com/"
    }, {
        name: "Sydney",
        url: "http://syd-au-ping.vultr.com/"
    }],
    Linode: [{
        name: "Newark",
        url: "http://speedtest.newark.linode.com/"
    }, {
        name: "Atlanta",
        url: "http://speedtest.atlanta.linode.com/"
    }, {
        name: "Dallas",
        url: "http://speedtest.dallas.linode.com/"
    }, {
        name: "Fremont",
        url: "http://speedtest.fremont.linode.com/"
    }, {
        name: "Frankfurt",
        url: "http://speedtest.frankfurt.linode.com/"
    }, {
        name: "London",
        url: "http://speedtest.london.linode.com/"
    }, {
        name: "Singapore",
        url: "http://speedtest.singapore.linode.com/"
    }, {
        name: "Tokyo 2",
        url: "http://speedtest.tokyo2.linode.com/"
    }],
    DigitalOcean: [{
        name: "NYC1",
        url: "http://speedtest-nyc1.digitalocean.com/"
    }, {
        name: "NYC2",
        url: "http://speedtest-nyc2.digitalocean.com/"
    }, {
        name: "NYC3",
        url: "http://speedtest-nyc3.digitalocean.com/"
    }, {
        name: "AMS2",
        url: "http://speedtest-ams2.digitalocean.com/"
    }, {
        name: "AMS3",
        url: "http://speedtest-ams3.digitalocean.com/"
    }, {
        name: "SFO1",
        url: "http://speedtest-sfo1.digitalocean.com/"
    }, {
        name: "SFO2",
        url: "http://speedtest-sfo2.digitalocean.com/"
    }, {
        name: "SGP1",
        url: "http://speedtest-sgp1.digitalocean.com/"
    }, {
        name: "LON1",
        url: "http://speedtest-lon1.digitalocean.com/"
    }, {
        name: "FRA1",
        url: "http://speedtest-fra1.digitalocean.com/"
    }, {
        name: "TOR1",
        url: "http://speedtest-tor1.digitalocean.com/"
    }, {
        name: "BLR1",
        url: "http://speedtest-blr1.digitalocean.com/"
    }],
    VirMach: [{
        name: "Frankfurt",
        url: "http://ffm.lg.virmach.com/"
    }, {
        name: "Amsterdam",
        url: "http://ams.lg.virmach.com/"
    }, {
        name: "Buffalo",
        url: "http://ny.lg.virmach.com/"
    }, {
        name: "Piscataway (NYC)",
        url: "http://nj.lg.virmach.com/"
    }, {
        name: "Dallas",
        url: "http://dal.lg.virmach.com/"
    }, {
        name: "Phoenix",
        url: "http://phx.lg.virmach.com/"
    }, {
        name: "Los Angeles",
        url: "http://la.lg.virmach.com/"
    }, {
        name: "DDoS-Protected Los Angeles",
        url: "http://filtered-la.lg.virmach.com/"
    }, {
        name: "Chicago",
        url: "http://chi.lg.virmach.com/"
    }, {
        name: "Seattle",
        url: "http://sea.lg.virmach.com/"
    }, {
        name: "Atlanta",
        url: "http://atl.lg.virmach.com/"
    }, {
        name: "San Jose",
        url: "http://sj.lg.virmach.com/"
    }]
};

let nextTick = window.requestAnimationFrame || window.setTimeout // The delay function
let tasks = [] // Pending task
let img = document.createElement("img") // Image for test
//
//
// Prepare to run tests
function prepare() {
    const resultArea = document.querySelector("#result");
    resultArea.appendChild(img);
    function simpleElement(tag, text) {
        const el = document.createElement(tag);
        el.textContent = text;
        return el;
    }
    Object.entries(data).forEach(function (pair) {
        const key = pair[0];
        const array = pair[1];
        const subtasks = [];
        const section = document.createElement("section");
        section.appendChild(simpleElement("h3", key));
        section.style.setProperty("--nums", array.length);
        array.forEach(function (item, i) {
            const bodyline = document.createElement("div");
            let result, name;
            bodyline.appendChild(result = simpleElement("span", "Pending"));
            result.className = "result";
            bodyline.appendChild(name = simpleElement("span", item.name));
            name.className = "name";
            section.appendChild(bodyline);
            subtasks.push({
                line: bodyline,
                url: item.url,
                result: result
            });
            bodyline.style.setProperty("--index", i);
        });
        resultArea.appendChild(section);
        tasks.push(subtasks);
    })
}
//
//
// Load image and set callback
function loadImg(src, callback) {
    img.src = src + Math.random();
    img.onerror = callback;
    img.onload = callback;
}
//
//
// Start Ping
function handleTasks() {
    if (tasks.length == 0) {
        img.remove();
        return;
    }
    const currentSubTasks = tasks.shift();
    const subResults = [];
    let startTime = 0;
    let maxDelay = 1;
    nextTick(function handleSubTasks() {
        subResults.sort(function(a, b) {
            return a.delay - b.delay;
        });
        subResults.forEach(function (key, index) {
            key.line.style.setProperty("--index", index);
        });
        if (currentSubTasks.length == 0) {
            return nextTick(handleTasks);
        }
        const task = currentSubTasks.shift();
        task.result.textContent = "DNS";
        // First time to load image (skip DNS querying)
        loadImg(task.url, function() {
            startTime = new Date().getTime();
            let finished = false;
            function updateDelay() {
                const now = new Date().getTime();
                const delay = now - startTime;
                if (delay > maxDelay) {
                    maxDelay = delay;
                    task.line.parentElement.style.setProperty("--max-delay", delay);
                }
                task.result.textContent = (delay) + "ms";
                task.line.style.setProperty("--delay", delay);
                return delay;
            }
            // Update delay realtime
            nextTick(function rev() {
                if (!finished) {
                    updateDelay();
                    nextTick(rev);
                }
            });
            // Second time to load image (measure latency)
            loadImg(task.url, function() {
                finished = true;
                subResults.push({
                    line: task.line,
                    delay: updateDelay()
                });
                nextTick(handleSubTasks);
            });
        });
    });
}
//
//
// This function is called by "body onload".
function main() {
    prepare();
    nextTick(handleTasks);
}
//
//
// END OF FILE
// The full project is at https://github.com/pingms/pingms
//
//