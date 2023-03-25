// ==UserScript==
// @name         YTDisableShorts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables YouTube Shorts Shelf on load if found.
// @author       https://github.com/RxmTaco
// @match        https://www.youtube.com/
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/483px-Youtube_shorts_icon.svg.png?20210811144940
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

//This is a simple api used for logging how many times the YouTube Shorts Shelf has been disabled.
//No personal information is logged, just the count of how many times it has been disabled.
//This logging can be disabled by setting the "enableMetrics" variable to "false"
const enableMetrics = true;

$(document).ready(function() {
    console.log("[YTDisableShorts]: Script Active");
    setInterval(remove, 1000);
});

function remove(){
    if($("#dismissible.style-scope.ytd-rich-shelf-renderer").length){
        console.log("[YTDisableShorts]: Found Shorts Shelf");
        $("#dismissible.style-scope.ytd-rich-shelf-renderer").remove();
        console.log("[YTDisableShorts]: Disabled Shorts Shelf");
        if(enableMetrics == true) apiRequest();
    }
}

async function apiRequest(){
    const options = {
        method: 'POST',
        headers: {
            'access-control-allow-origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        },
        body: JSON.stringify({ "action":"add" })
    };
    const response = await fetch('https://api.rxmtaco.gay/api/ytds', options);
    const json = await response.json();
    console.log("[YTDisableShorts]: YouTube Shorts has been disabled "+json.count+" times!");
    document.cookie = json.cookie;
}
