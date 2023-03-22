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


$(document).ready(function() {
    setInterval(remove, 1000);
});

function remove(){
    if($("#dismissible.style-scope.ytd-rich-shelf-renderer").length){
        $("#dismissible.style-scope.ytd-rich-shelf-renderer").remove();
        console.log("REMOVED SHORTS SHELF");
    }
}
