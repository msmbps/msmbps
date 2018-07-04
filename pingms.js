//
//
//
// JavaScript code of "PING ms"
// The full project is at https://github.com/pingms/pingms
//
// @pingms founded the project.
// @codehz greatly improved it.
// @pingms fixed the jitter problem(with several HTTP pings).
//
// (@pingms - https://github.com/pingms)
// (@codehz - https://github.com/codehz)
//
//
//
"use strict"
// JS is evaluated in strict mode.
// Strict mode throws more errors
// and disables some features
// in an effort to make your code
// more robust, readable, and accurate.
//
//
// ***** Global Variables *****
// The let statement declares a block scope local variable,
// optionally initializing it to a value.
let nextTick = window.requestAnimationFrame || window.setTimeout
// The delay function
// The window.requestAnimationFrame() method tells the browser
// that you wish to perform an animation and requests
// that the browser call a specified function
// to update an animation before the next repaint.
//
let tasks = [] // All cloud providers - "task" is a cloud provider
let task = null; // Current cloud provider - "task" is a cloud provider
let currentSubTasks = null; // Current locations - "SubTask" is a location of cloud provider
let currentSubResults = []; // Results of current locations - "SubTask" is a location of cloud provider
let startTime = 0; // The start time of current test - a "test" is loading URL
let maxDelay = 0; // Max delay of a cloud provider
let img = document.createElement("img") // IMG object for tests
// ***** ***** *****
//
//
// Prepare to run tests
function prepare() {
    const resultArea = document.querySelector("#result");
    // The Document method querySelector() returns the first Element
    // within the document that matches the specified selector
    resultArea.appendChild(img);
    // *****
    function simpleElement(tag, text) {
        const el = document.createElement(tag);
        el.textContent = text;
        return el;
    }
    // *****
    Object.entries(data).forEach(function (pair) {
        // Object.entries...
        // const object2 = { 0: 'a', 1: 'b', 2: 'c' };
        // console.log(Object.entries(object2)[2]);
        // expected output: Array ["2", "c"]
        //
        // forEach...
        // var array1 = ['a', 'b', 'c'];
        // array1.forEach(function(element) {
        // console.log(element);
        // });
        // expected output: "a"
        // expected output: "b"
        // expected output: "c"
        //
        const key = pair[0];
        const array = pair[1];
        const subtasks = [];
        const section = document.createElement("section");
        // <section> means that the content inside is grouped
        //
        section.appendChild(simpleElement("h3", key));
        section.style.setProperty("--nums", array.length);
        // Total number of target servers of this cloud service.
        //
        array.forEach(function (item, i) {
        // The following code logs a line for each element in an array:
        // function logArrayElements(element, index, array) {
        //     console.log('a[' + index + '] = ' + element);
        // }
        //
            const bodyline = document.createElement("div");
            let result, name;
            bodyline.appendChild(result = simpleElement("span", "..."));
            result.className = "result";
            bodyline.appendChild(name = simpleElement("span", item.name));
            name.className = "name";
            section.appendChild(bodyline);
            subtasks.push({
                line: bodyline, // "DIV" object of item
                url: item.url,  // URL of this location
                result: result, // "SPAN" object of result
                min: 60000,     // Min of several HTTP pings
                count: 0        // The number of finished tests(including DNS caching)
            });
            bodyline.style.setProperty("--index", i);
            // Index of this target server
            //
        });
        resultArea.appendChild(section);
        tasks.push(subtasks);
        // The push() method adds one or more elements
        // to the end of an array
        // and returns the new length of the array.
        //
    })
}
//
//
// Load image and set callback
function loadImg(src, callback) {
    img.src = src + Math.random();
    // This URL is never cached,
    // and it's "404 Not Found"
    // (the size of page does not change much)
    //
    img.onerror = callback;
}
//
//
// Do a test
function handleOneTest()
{
    // Get min of HTTP pings
    // (skip the first HTTP ping - it's just caching DNS)
    if(task.count>1) {
        const now = new Date().getTime();
        const delay = now - startTime;
        if(delay<task.min) {
            task.min=delay;
        }
    }
    // Five HTTP pings are done
    if(task.count==5) {
        // Update the max value of cloud provider
        if (task.min > maxDelay) {
            maxDelay = task.min;
            task.line.parentElement.style.setProperty("--max-delay", maxDelay);
        }
        task.result.textContent = (task.min) + "ms";
        task.line.style.setProperty("--delay", task.min);
        currentSubResults.push({
            line: task.line,
            delay: task.min
        });
        // Go to the next "SubTask"(a location of cloud provider)
        nextTick(handleSubTasks);
        return;
    }
    // Ping this location
    task.count++;
    task.result.textContent = (task.count) + "/5";
    startTime = new Date().getTime();
    loadImg(task.url, handleOneTest);
}
//
//
// Do a "SubTask"(a location of cloud provider)
function handleSubTasks() {
    currentSubResults.sort(function(a, b) {
        return a.delay - b.delay;
    });
    // Sort an array descending:
    // var points = [40, 100, 1, 5, 25, 10];
    // points.sort(function(a, b){return b - a});
    //
    currentSubResults.forEach(function (key, index) {
        key.line.style.setProperty("--index", index);
    });
    // Update "--index" after "sort"
    //
    if (currentSubTasks.length == 0) {
        return nextTick(handleTasks);
    }
    task = currentSubTasks.shift();
    task.result.textContent = "1/5";
    task.count=1;
    // First time to load image (for caching DNS)
    loadImg(task.url, handleOneTest);
}
//
//
// Do a "Task"(a cloud provider)
function handleTasks() {
    if (tasks.length == 0) {
        img.remove();
        // The ChildNode.remove() method removes
        // the object from the tree it belongs to.
        //
        return;
    }
    currentSubTasks = tasks.shift();
    currentSubResults = [];
    // The shift() method removes the first element
    // from an array and returns that removed element.
    //
    maxDelay=0; // Reset the max delay of this cloud provider.
    nextTick(handleSubTasks);
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
//
// END OF FILE
// The full project is at https://github.com/pingms/pingms
//
//
//