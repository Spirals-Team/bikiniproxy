/* ========================================================================
 * scroll.handler.js v0.0.2
 * ======================================================================== */

$(function() {
    'use strict';

    // Stickem
    $( ".article-container" ).stickem({ offset: 10 });

    // Popup
    $( "#my_popup" ).popup({
        scrolllock: true,
        transition: '0.5s all'
    });

    // Reading Now
    $( "body" ).scrollspy({ target: '.stickem' });

    // Bind "click" event handler only to href with hash
    $( "a[href^=#]" ).click(function( e ) {

        // Always remove this classname first.
        // CSS hack for .footnotes :target
        $( ".footnotes-target" ).removeClass( "footnotes-target" );

        // Get href value
        var href = $( this ).attr( "href" );

        // If element does not exist, do not scroll
        var isExist = $( href ).length > 0 ? true : false;
        if (isExist === false)
            return;

        /*
         * Clicked anchors will not take
         * the browser to a new URL before start to scroll.
         */
        e.preventDefault();

        /*
         * We need to modify the style of
         * footnote's fonts before start to scroll.
         * CSS hack for .footnotes :target
         */
        if (/footnote-mark/g.test(href) === false
          && /footnote/g.test(href) === true) {
            $( href ).addClass( "footnotes-target" );
        }

        // Handle anchor links on popup menu
        if ($( this ).hasClass( "localnav" )) {
            // Callback
            $( "#my_popup" ).data().popupoptions.onclose = function () {
                // Start to scroll in the next 1300 ms
                // Let the popup is closed completely.
                setTimeout(function() {
                    $.scrollTo( $( href ), 1000, { easing: 'easeInOutCubic', onAfter: goToUrl } );
                }, 1300);
            };
            // Close popup
            $( "#my_popup" ).popup( "hide" );
            return;
        }

        // Scroll immediately
        $.scrollTo( $( href ), 1000, { easing: 'easeInOutCubic', onAfter: goToUrl } );

        // Callback after scroll completed
        function goToUrl(target, settings) {
            $( target ).each(function() {
                var elmId = $( this ).attr( "id" );
                if (elmId) {
                    // Append a hash into url
                    location.hash = elmId;
                    return false;
                }
            });
        }
    });

    // A scrollspy event handler
    $( "body" ).on('activate.bs.scrollspy', function () {

        // Get event target
        var target  = $( arguments[0].target );

        if (target.length) {
            // If current active sub section has no active child
            // We assume that we are reading it now
            if (!$( target ).find( "li.active" ).length) {
                // Remove class .active-current
                $( ".stickem" )
                    .find( ".active-current" )
                    .removeClass( "active-current" );

                // Add class .active-current to current active sub section
                // i.e sub section we are reading it now
                $( target ).addClass( "active-current" );
            }

            // Next section navigation
            var nextElm = target.next();

            if (nextElm.length) {
                nextElm.each(function() {
                    $( this ).children().each(function() {
                        if ($( this ).is( "a" )) {
                            $( ".quick-links .next-section" ).show();
                            $( ".quick-links .next-section a" ).attr( "href", $( this ).attr( "href" ) );
                            $( ".quick-links .next-section a" ).html( 'Next: ' + $( this ).text() + '<br /><i class="fa fa-arrow-down"></i>' );
                        }
                    });
                });
                return;
            }

            // Hide the navigation if there is no next section
            $( ".quick-links .next-section" ).hide();
        }

    });
});
