/**
 Flashlight JS library - common.js
 Common Flashlight functions
 */

// Replace, modify, echo HTML
function replaceObjectHTML(object, html){
    document.object.innerHTML = html;
}
function replaceBodyHTML(html){
    document.body.innerHTML = html;
}
function echo(html){
    document.body.innerHTML = document.body.innerHTML.concat(html);
}
function echoInOBJ(object, html){
    document.object.innerHTML = document.object.innerHTML.concat(html);
}
// Wait functions

// wait ms
function wait(milliseconds){
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// wait s
function waitSec(seconds){
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < seconds * 1000);
}

// timeout ms
function timeout(milliseconds, func){
    setTimeout(func, milliseconds);
}

// timeout s
function timeoutSeconds(seconds, func){
    setTimeout(func, seconds*1000);
}

// enchanted wait
function ewait(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}
// Cookies

// getCookie
function getCookie(name) {
    var value = "; ".concat(document.cookie);
    var parts = value.split("; ".concat(name, "="));
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// setCookie
function setCookie(name, value){
    document.cookie = name.concat("=",value);
}


// Get HTML

// getInnerHTML
function getInnerHTML(object){
    return object.innerHTML;
}

