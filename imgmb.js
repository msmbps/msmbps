"use strict";
let mb = 0;
let img = "";
let startTime = 0;
let endTime = 0;
function getMbAndImg() {
    const mbStart = location.hash.indexOf("(");
    if(mbStart==-1) {
        return;
    }
    const mbEnd = location.hash.indexOf(")");
    if(mbEnd==-1) {
        return;
    }
    const mbString = location.hash.substring(mbStart+1,mbEnd);
    mb = parseFloat(mbString);
    document.getElementById("mb").innerText=mb.toString();
    img = location.hash.substring(mbEnd+1,location.hash.length);
    document.getElementById("img").innerText=img;
}
function onLoad() {
    endTime = new Date().getTime();
    const seconds = (endTime-startTime)/1000;
    document.getElementById("speed").innerText = (mb/seconds).toFixed(3).toString() + " MBps";
}
function startLoading() {
    document.getElementById("dns").innerText = "Done";
    const img2 = document.createElement("img");
    document.body.appendChild(img2);
    img2.onload = onLoad;
    startTime = new Date().getTime();
    img2.src=img+"?a="+Math.random().toString();
}
function doDnsCaching() {
    const i = img.indexOf("://");
    if(i==-1) {
        return;
    }
    const j = img.indexOf("/",i+3);
    if(j==-1) {
        return;
    }
    const s = img.substring(0,j+1);
    document.getElementById("server").innerText=s;
    const img1 = document.createElement("img");
    document.body.appendChild(img1);
    img1.onerror = startLoading;
    img1.src=s+Math.random().toString();
}
function checkUrl() {
    const a = location.hash;
    const i = a.indexOf("(");
    if(i!=1) {
        return false;
    }
    const j = a.indexOf(")");
    if(j==-1) {
        return false;
    }
    if(i>j) {
        return false;
    }
    const b = parseFloat(a.substring(i+1,j));
    if(isNaN(b)) {
        return false;
    }
    if(b<=0) {
        return false;
    }
    const k = a.indexOf(":",j);
    if(k==-1) {
        return false;
    }
    const c = a.substring(j+1,k);
    if(c=="http") {
        return true;
    }
    if(c=="https") {
        return true;
    }
    return false;
}
function main() {
    if(!checkUrl()) {
        alert("Error in \"checkUrl\".");
        return;
    }
    getMbAndImg();
    doDnsCaching();
}