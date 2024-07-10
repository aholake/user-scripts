// ==UserScript==
// @name         Disable Cmd+Shift+A
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables the Cmd+Shift+A keyboard shortcut on specific websites
// @author       You
// @match        https://axon.quip.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        if (e.metaKey && e.shiftKey && e.key.toLowerCase() === 'a') {
            e.stopImmediatePropagation();
            console.log('Cmd+Shift+A has been disabled');
        }
    }, true);
})();