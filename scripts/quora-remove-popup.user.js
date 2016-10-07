// ==UserScript==
// @name                Hello World
// @namespace	        tag:odisseus@users.noreply.github.com,2016-10-07:quora-remove-popup
// @description	        Removes the login popup from Quora
// @include		https://*.quora.com/*
// ==/UserScript==

/*
 Credits:
 the '?share=1' param trick --- http://www.ashout.com/quora-blurring-content-unblur-without-sign-up/
 the JS function for parsing parameters --- http://stackoverflow.com/a/1099670
 great GreaseMonkey tutorial --- http://commons.oreilly.com/wiki/index.php/Greasemonkey_Hacks/Getting_Started
*/

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}

var query = getQueryParams(document.location.search);
if(!query.share){
    window.location.href=window.location.href+"?share=1"
}
