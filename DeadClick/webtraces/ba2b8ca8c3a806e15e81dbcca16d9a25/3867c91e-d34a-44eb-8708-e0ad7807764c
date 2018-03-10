// VERSION 1.4
/*jslint browser: true*/
/*global window*/

(function () {
    'use strict';
    var site = 6291, // Site ID
        DEBUG = false, // Enable debug mode
        IGNORE_PROTOCOL = true, // Both http and https urls will have the same keyword
        IGNORE_CASE = false; // Ignore case of the URLs (both http://site.com/page and http://site.com/Page will map to page_name)


    /*    This tag on resources fires the same tag on o2, that's all. 
          The o2 tag in the repo does everything.   
    */


    // Make o2 call
    function makeCall(keyword, breadcrumb) {
        var er, s;
        if (keyword !== '') {
            er = document.createElement('script');
            er.type = 'text/javascript';
            er.async = true;
            er.src = '//o2.eyereturn.com/?site=' + site + '&page=' + encodeURIComponent(keyword);
            if (breadcrumb !== '') {
                er.src += '&bc=' + encodeURIComponent(breadcrumb);
            }
            s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(er, s);
        }
    }

    function run() {

        makeCall('generic', '');

    }

    // Expose functions
    if (window.eyereturnTag === undefined || window.eyereturnTag === null) {
        window.eyereturnTag = {
            run: run
        };
    }

    run();
    //====================== Do not modify =============================
}());
