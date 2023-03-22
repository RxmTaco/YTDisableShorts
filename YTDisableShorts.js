// ==UserScript==
// @name         YTDisableShorts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables YouTube Shorts Shelf on load if found.
// @author       https://github.com/RxmTaco
// @match        https://www.youtube.com/
// @icon         https://github.com/RxmTaco/YTSDisableShorts/icon.png
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==


$(document).ready(function() {
    setTimeout(function(){
        $("#dismissible.style-scope.ytd-rich-shelf-renderer").remove();

        console.log("REMOVED SHORTS SHELF");
    }, 1000);
});