/*

  7777777777777777777777777777777777777777777777777777777777777777777777777
  77                                                77777777777777777777777
  77   777777777777  77777777777  777777    7777    7777              77777
  77   777777777777  77777777777  7777777   7777    7777              77777
  77       7777      7777         77777777  7777    777777777777     777777
  77       7777      7777777777   777777777 7777    77777777777     777777
  77       7777      7777777777   7777 777777777    7777777777     777777
  77       7777      7777         7777  77777777    777777777     777777
  77       7777      77777777777  7777   7777777    77777777     777777
  77       7777      77777777777  7777    777777    7777777     777777
  77                                                77777777777777777
  777777777777777777777777777777777777777777777777777777777777777777

  Handcrafted in America by the humans at TEN7.com
	Copyright 2012 Ten 7 Interactive, LLC.

*/

// Initialize our global TEN7 object.
var TEN7 = TEN7 || {
    layouts: {},
    breakpoints: {},
    currentLayout: ''
};


/****************************************
 * SETTINGS YOU MAY CHANGE AS NECESSARY *
 ****************************************/
// Declare breakpoints for various responsive contexts. Change or comment these
// as necessary.
TEN7.breakpoints.mobile = {
    min: 0,
    max: 640
};
TEN7.breakpoints.tablet = {
    min: 641,
    max: 800
};
TEN7.breakpoints.desktop = {
    min: 801,
    max: 99999
};

// Turn on or off the setting to refresh the page if the screen is resized to a
// different layout.
TEN7.refreshOnBreakpoint = false;

/******************************
 * I DON'T LIKE TO BE TOUCHED *
 ******************************/
(function($) {
    // Don't even bother with this if IE < 9.
    if (typeof window.innerWidth == 'undefined') {
        return false;
    }

    // Iterate through the layouts defined above, looking for the layout that
    // matches the current window width.
    $.each(TEN7.breakpoints, function(layout, dimensions) {
        if (window.innerWidth > dimensions.min && window.innerWidth <= dimensions.max) {
            TEN7.currentLayout = layout;
            // We found the layout. Break the $.each loop.
            return false;
        }
    });

    // Wait until the DOM is fully loaded.
    $(document).ready(function() {

        /**
         * TEN7 Responsive
         */

        // Execute the JS associated with this layout.
        // @see js/script-LAYOUT_NAME.js
        TEN7.layouts[TEN7.currentLayout](jQuery);

        // If the window resizes out of the configured dimensions, refresh the page.
        if (TEN7.refreshOnBreakpoint) {
            $(window).resize(function() {
                if (window.innerWidth <= TEN7.breakpoints[TEN7.currentLayout].min || window.innerWidth > TEN7.breakpoints[TEN7.currentLayout].max) {
                    $(this).unbind('resize');
                    window.location = window.location;
                }
            });
        }
        // Refresh if orientation changes.
        // window.addEventListener("orientationchange", function() {
        //     location.reload();
        // }, false);
    });
})(jQuery);;
/*

 7777777777777777777777777777777777777777777777777777777777777777777777777
 77                                                77777777777777777777777
 77   777777777777  77777777777  777777    7777    7777              77777
 77   777777777777  77777777777  7777777   7777    7777              77777
 77       7777      7777         77777777  7777    777777777777     777777
 77       7777      7777777777   777777777 7777    77777777777     777777
 77       7777      7777777777   7777 777777777    7777777777     777777
 77       7777      7777         7777  77777777    777777777     777777
 77       7777      77777777777  7777   7777777    77777777     777777
 77       7777      77777777777  7777    777777    7777777     777777
 77                                                77777777777777777
 777777777777777777777777777777777777777777777777777777777777777777

 Handcrafted in America by the humans at TEN7.com
 Copyright 2012 Ten 7 Interactive, LLC.

 */

// jQuery wrapper so there are no conflicts

(function ($) {
  $(document).ready(function () {
    // JS to run after the DOM is prepared.

    if ($('.slide-placeholder')) {
      //remove the flexslider loading placeholder
      setTimeout(function () {
        $('.view-collections-slideshow').addClass('imagesloaded');
        // $('.slide-placeholder').remove();
        $('.view-collections-slideshow').css('height', 'auto');
      }, 2000);
    }


    // On any blog post comment form, "disable" the submit button.
    $('#comment-form #edit-submit').click(function (e) {
      $(this).clone()
        .attr('disabled', 'disabled')
        .attr('value', 'Working...')
        .css({cursor: 'default', opacity: '.5'})
        .insertAfter(this);
      $(this).hide();
    });


    //moving descriptions below options for comment form
    $('.comment-node-settings-form .description').each(function () {
      var siblingOption = $(this).siblings('.option');
      $(this).insertAfter(siblingOption);
    })

    //Adding click animations to find a therapist block.
    $('.find-hide').click(function () {
      if ($(this).hasClass('closed')) {
        $('.find-a-therapist .find-a-cities').slideDown();
        $(this).text('Hide Cities');
        $(this).removeClass('closed');
      } else {
        $('.find-a-therapist .find-a-cities').slideUp();
        $(this).text('Show Cities');
        $(this).addClass('closed');
      }

    })


    $('.page-blogger-home ul.tabs').wrap('<div id = "blogger-sidr"></div>');
    $('<div class="blogger-sidr-button">Dashboard Menu</div>').insertBefore('#blogger-sidr');
    $('.blogger-sidr-button').sidr({
      name: 'sidr-blogger',
      source: '#blogger-sidr',
      side: 'left'
    });


    $('#responsive-menu-button').sidr({
      name: 'sidr-main',
      source: '.main-nav',
      side: 'right',
      onClose: function () {
        $('.page__header').css('left', '0px');
      },
      onOpen: function () {
        $('.page__header').css('left', 'auto');
      }
    });
    //adding submenu functionality for tablet.
    $('<div id ="submenuholder"></div>').appendTo('#sidr-main');
    $('.sidr-class-om-menu li.sidr-class-om-leaf').each(function () {
      if ($(this).children('.sidr-class-closed').length > 0) {
        $(this).addClass('children');
        $(this).clone().appendTo("#submenuholder");
      }
    });
    $('#submenuholder li.sidr-class-om-leaf').each(function () {
      $('<div class="submenuback">Back</div>').prependTo($(this));
    });
    $('.sidr-class-om-menu li.children').not('li.sidr-class-leaf-search').click(function () {
      $('.sidr-inner').animate({
        'margin-left': '-260px'
      }, 'fast');
      var correctChild = $(this).attr("id");
      $('#submenuholder li#' + correctChild).show().animate({
        'right': '0px'
      }, 'fast');
    });
    $('.submenuback').click(function () {
      $('.sidr-inner').animate({
        'margin-left': '0px'
      });
      $('#submenuholder li.sidr-class-om-leaf').animate({
        'right': '-260px'
      }, 'fast', function () {
        $(this).css('display', 'none');
      });
    });

    // Expand and collapse references.
    $('.blog-entry-references .view-all').click(function (e) {
      e.preventDefault();
      if ($(this).hasClass('closed')) {
        $(this).text('Less');
        $(this).removeClass('closed');
      } else {
        $(this).text('More');
        $(this).addClass('closed');
      }
      /* define height specifically to prevent toggle 'jump' at end of animation */
      var extraReferences = $(this).parents('.__card-footer').siblings('.blog-entry-references-content').children('.collapsible').children('.closed-items');
      var extraReferencesHeight = extraReferences.innerHeight();
     // extraReferences.css('height', extraReferencesHeight);

      extraReferences.slideToggle('fast');
    });

    $('#block-pt-user-blogger-books .view-all').click(function (e) {
      e.preventDefault();
      if ($(this).hasClass('closed')) {
        $(this).text('Fewer Books');
        $(this).removeClass('closed');
      } else {
        $(this).text('All Books');
        $(this).addClass('closed');
      }
      /* define height specifically to prevent toggle 'jump' at end of animation */
      var extraBooks = $(this).parents('.collapsible').siblings('.node__content').children('.closed-items');
      var extraBooksHeight = extraBooks.innerHeight();
      extraBooks.css('height', extraBooksHeight);

      extraBooks.slideToggle('slow');
    });


    //adding colon to message
    $('.contact__form .form-item-message label').text('Message');
    //adding click functionality for block collections of siblings
    $('.all-stories').click(function () {
      if ($(this).hasClass('closed')) {
        $(this).css('background-image', 'url(/sites/all/themes/psychologytoday/img/collection-siblings-up.png)');
      } else {
        $(this).css('background-image', 'url(/sites/all/themes/psychologytoday/img/collection-siblings-down.png)');
      }

      $(this).toggleClass('closed');
      $(this).parent().siblings('.node-collection').children('.node__content').slideToggle();

    });

    $('.search-link .search').mouseover(function (e) {
      e.preventDefault();
      var searchBlock = $(this).attr('href');
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(searchBlock).fadeOut('slow');
      } else {
        $(this).addClass('active');
        $(searchBlock).fadeIn('fast');
      }
    });

     //$('.block-om-maximenu-om-maximenu-1 .om-link').mouseover(function(e) {
     //    $('#block-search-form').fadeOut('slow');
     //    $('.search-link .search').removeClass('active');
     //});


    $('.form-item-search-block-form input.form-text, .sidr-class-form-text').focus(function () {
      if ($(this).val() == 'Search') {
        $(this).addClass('focus');
        $(this).val('');
      }

      //force search box display on input focus
      if ($(this).is("#edit-search-block-form--2")) {
        //$('.link-search + .om-maximenu-content').addClass('show-search-box');
      }
    });

    $('.form-item-search-block-form input.form-text, .sidr-class-form-text').blur(function () {
      if ($(this).val() === '') {
        $(this).removeClass('focus');
        $(this).val('Search');
      }

      //force search box display on input focus
      $('.link-search + .om-maximenu-content').removeClass('show-search-box');
    });


    // if a filter is selected on search page force the advanced options box to be open
    $('#block-pt-search-pt-search-filters .facetapi-active').closest('.collapsible').removeClass('collapsed');
    $('#block-pt-search-pt-search-filters .sorting li a.active').not('#block-pt-search-pt-search-filters .sorting li.first a.active').closest('.collapsible').removeClass('collapsed');

    //don't search for 'Search'
    $('.form--search-block-form').submit(function () {
      if ($(this).find('input.form-text').val() == 'Search') {
        $(this).find('input.form-text').val('');
      }
    });

    $('.sidr-class-form--search-block-form').submit(function () {
      if ($(this).find('input.sidr-class-form-text').val() == 'Search') {
        $(this).find('input.sidr-class-form-text').val('');
      }
    });

    // show search menu on form item focus
    $('.form-item-bundle-select .form-select, .form-item-search-block-form input').focus(function () {
      $(this).closest('.om-maximenu-content').addClass('show-search-box');
    });

    $('.form-item-bundle-select .form-select, .form-item-search-block-form input').focusout(function () {
      $(this).closest('.om-maximenu-content').removeClass('show-search-box');
    });


    //initializing tooltips
    $('.tooltip').tooltipster();

    $('.ie9 .btn-text, .ie8 .btn-text').click(function (e) {
      e.preventDefault();
      $(this).siblings('.form-submit').click();
    });

    //blog entry image caption handling
    $('.caption').each(function () {
      var caption = $(this).find('.image-caption').text();
      if (caption === '__title__') {
        $(this).remove();
      }
    });

    var $window = $(window);
    var initialScroll = $window.scrollTop();
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      setTimeout(function () {
        $window.scrollTop($window.scrollTop() + (initialScroll - $window.scrollTop()));
      }, 0);
    }


    /********************************************
     * Function to make menus into select element
     */
    var menuSelect = function (selector) {
      var select = $(document.createElement('select')).insertBefore($(selector)).attr('class', 'mobileNav');
      $(selector).hide();
      $(selector + ' li a').each(function (index) {

        var linkTitle = $(this).html(); //Find the short title
        var option = $(document.createElement('option'))
          .val($(this).attr('href'))
          .html($(this).html());
        if ($(this).hasClass('active') || $(this).hasClass('active-trail')) {
          option.attr('selected', 'selected');
        }
        option.appendTo(select); //populate select
      });
      // ADD identifier that a list has been 'selectified'
      $('body').addClass('new-mobile');

      /**
       * After menu selects are done, do some more processing
       */
      $('.mobileNav option').each(function (index) {
        var path = $(this).val();
        var hash = window.location.hash;
        if (hash && (hash == path)) {
          $(this).attr('selected', 'selected');
        }
      });

      $('.mobileNav').change(function () {
        var url = $(this).val();
        if (url) {
          window.location = url;
        }
      });

      /**
       * add a select item to top of experts topics list so doesn't default to addiction
       */
      var topicsList = $('.page-experts-topics .view-id-experts_by_topic .mobileNav');
      var chooseTopic = $(document.createElement('option')).val('/experts/topics').html('Choose Topic');
      if (window.location.pathname == '/experts/topics') {
        chooseTopic.attr('selected', 'selected');
      }
      chooseTopic.prependTo(topicsList);

    };

    $("#submit").click(function() {
        alert("The selected Value is "+ $("ul").find(".selected").data("value"));
    });

    /***********************************************************
     * function to make the select menus back into regular lists
     */
    var removeSelect = function (selector) {
      $(selector).show();
      $('.mobileNav').remove();
      //window.location.hash = '';
      // REMOVE identifier that a list has been 'selectified'
      $('body').removeClass('new-mobile');
    };

    /****************************************************************
     * initiate the changing of lists based on page load screen width
     */
    var windowSize = $(window).width();
    if (windowSize < 641) {
      menuSelect('.menu-tabs ul');
      menuSelect('ul.menu-tabs');
      menuSelect('.field-name-field-condition-summary + #condition__tabs > ul');
      menuSelect('.initial-pager');
      menuSelect('.view-primary-topics.view-display-id-block_1');
      menuSelect('ul.filter-buttons');
    }

    /**********************************************************************
     * initiate the changing of lists based on the page RESIZE screen width
     */
    var resizePause;
    $(window).resize(function () {
      windowSize = $(window).width();

      clearTimeout(resizePause);
      // put inside timeout so these functions only run once on a resize
      resizePause = setTimeout(function () {
        if (windowSize < 641) {
          if (!$('body').hasClass('new-mobile')) {
            menuSelect('.menu-tabs ul');
            menuSelect('ul.menu-tabs');
            menuSelect('.field-name-field-condition-summary + #condition__tabs > ul');
            menuSelect('.initial-pager');
            menuSelect('.view-primary-topics.view-display-id-block_1');
            menuSelect('ul.filter-buttons');
          }
        } else {
          removeSelect('.menu-tabs ul');
          removeSelect('ul.menu-tabs');
          removeSelect('#condition__tabs ul');
          removeSelect('.initial-pager');
          removeSelect('.view-primary-topics.view-display-id-block_1');
          removeSelect('ul.filter-buttons');
        }
      }, 300);
    });


    $('#node_blog_entry_form_group_topics_tags table tr').removeClass('draggable');
    //$('#edit-field-blog-entry-images-und--2-table table tr').removeClass('draggable');

    /**
     * removes 'show weight' option and column from blog entry add image field
     */

    // Copy hideColumns() method
    if (typeof(Drupal.tableDrag) != "undefined" && Drupal.taleDrag !== null) {
      var hideColumns = Drupal.tableDrag.prototype.hideColumns;
      Drupal.tableDrag.prototype.hideColumns = function () {
        // Call the original hideColumns() method
        hideColumns.call(this);
        // Remove the 'Show row weights' string
        $('.field-name-field-blog-entry-images .tabledrag-toggle-weight').text('');
      }

      // Copy showColumns() method
      var showColumns = Drupal.tableDrag.prototype.showColumns;
      Drupal.tableDrag.prototype.showColumns = function () {
        // Call the original showColumns() method
        showColumns.call(this);
        // Remove the 'Hide row weights' string
        $('.field-name-field-blog-entry-images .tabledrag-toggle-weight').text('');
      }
    }

    //removing outline tab if available
    $('ul.tabs li a').each(function () {
      if ($(this).text() == 'Outline') {
        $(this).hide();
      }
    });

    // Open hidden collection items.
    $('.collection_feature_banner__control').click(function(e){
      $(this).toggleClass('open');
      $('.collection_feature_banner__column-right').stop(true,true).slideToggle();
    });

    // Load flexslider on homepage news items
    if($.fn.flexslider) {
      if (window.innerWidth > 800) {
        $('.block-views-news-block-1 .block__content .news-slider').flexslider({
          selector: '.view-content > div',
          minItems: 4,
          maxItems: 4,
          itemWidth: 230,
          animation: 'slide',
          slideshow: false,
          animationLoop: false,
          controlNav: true,
          nextText: '',
          prevText: '',
          start: function(slider) {
           $('#block-views-news-block-1').css('visibility', 'visible');
          },
        });
      } // window.innerWidth
      else if ( window.innerWidth < 800 && window.innerWidth > 640) {
        $('.block-views-news-block-1 .block__content .news-slider').flexslider({
          selector: '.view-content > div',
          minItems: 3,
          maxItems: 3,
          animation: 'slide',
          animationLoop: false,
          itemWidth: 230,
          slideshow: false,
          controlNav: true,
          nextText: '',
          prevText: '',
          start: function(slider) {
           $('#block-views-news-block-1').css('visibility', 'visible');
          },
        });
      }
      else {
        $('.block-views-news-block-1 .block__content .news-slider').flexslider({
          selector: '.view-content > div',
          animation: 'slide',
          animationLoop: false,
          itemWidth: 230,
          slideshow: false,
          controlNav: true,
          nextText: '',
          prevText: '',
          start: function(slider) {
           $('#block-views-news-block-1').css('visibility', 'visible');
          },
        });
      }
    }
    /**
     * Fix touch devices not being able to access the main menu items.
     */
    $('.touch .om-maximenu.om-maximenu-block.om-maximenu-row li.om-leaf').click(function(){
      $('.om-maximenu-content').hide();
      $('.om-maximenu-content', this).toggle();
    });
  }); //docready

    /***************************************************************
   * Activate a dropdown menu for topics sub-pages on topics pages
   */
  Drupal.behaviors.topicsDropdown = {
    attach: function(context, settings) {
      $('#block-pt-topics-topics-menu a.active', context).click(function (e) {
        e.preventDefault();
      });
      $('.topics-menu-open #block-pt-topics-topics-menu a.active', context).unbind('click');

      // Move the topic sidebar menu content out of sidebar to under blog__header
      // only on tablet and mobile
      function moveTopicsMenu() {
        if (window.innerWidth < 801) {
          if ($('body').hasClass('node-type-topic-page') || $('body').hasClass('page-taxonomy-term')) {
            $('.blog__header').after($('.region-sidebar-first #block-pt-topics-topics-menu'));
          }
        } else {
          if ($('body').hasClass('node-type-topic-page') || $('body').hasClass('page-taxonomy-term')) {
            $('.region__sidebar_first').prepend($('#block-pt-topics-topics-menu'));
          }
        }
      }
      moveTopicsMenu();

      if (window.innerWidth < 641) {

        if ($('body').hasClass('node-type-topic-page') || $('body').hasClass('page-taxonomy-term')) {
          $('#block-pt-topics-topics-menu li').removeClass('active').find('a.active').closest('li').addClass('active');

          // Get current topic
          var current_topic = $('.header-title .page__title').text();

          // Text replace the list values on 'Recent posts on [topic], [topic] Essential Reads, [topic] Basics'
          // Long terms were breaking layout styles
          $('#block-pt-topics-topics-menu a').each(function() {
            switch ($(this).text()) {
              case current_topic + ' Essential Reads':
                $(this).text('Essential Reads');
                break;
              case 'Recent posts on ' + current_topic:
                $(this).text('Recent posts');
                break;
              case current_topic + ' Basics':
                $(this).text('Basics');
                break;
              default:
                break;
            }
          });

          // Clone current active item and make it a toggle button
          $('#block-pt-topics-topics-menu a.active', context).clone().addClass('active-menu-toggle').prependTo('#block-pt-topics-topics-menu .item-list');
        }
      }
      $('.active-menu-toggle', context).click(function (e) {
        e.preventDefault();
        $('body', context).toggleClass('topics-menu-open');
      });

      var timeOut;
      $(window).resize(function() {
        clearTimeout(timeOut);
        timeOut = setTimeout(function() {
          moveTopicsMenu();
        }, 300);
      });

      if(window.innerWidth < 768 && $('body').hasClass('node-type-topic-page') || $('body').hasClass('page-taxonomy-term')) {
        $(window).on("orientationchange", function () {
          location.reload();
        });
      }
    }
  };
  /* End Activate topics dropdown menu */


})(jQuery);
;
/*

  7777777777777777777777777777777777777777777777777777777777777777777777777
  77                                                77777777777777777777777
  77   777777777777  77777777777  777777    7777    7777              77777
  77   777777777777  77777777777  7777777   7777    7777              77777
  77       7777      7777         77777777  7777    777777777777     777777
  77       7777      7777777777   777777777 7777    77777777777     777777
  77       7777      7777777777   7777 777777777    7777777777     777777
  77       7777      7777         7777  77777777    777777777     777777
  77       7777      77777777777  7777   7777777    77777777     777777
  77       7777      77777777777  7777    777777    7777777     777777
  77                                                77777777777777777
  777777777777777777777777777777777777777777777777777777777777777777

  Handcrafted in America by the humans at TEN7.com
	Copyright 2012 Ten 7 Interactive, LLC.

*/

// Place code to be executed exclusively when the page is loaded in a Mobile
// screen context. The widths for all screen contexts are defined in
// TEN7.js.
// Code in this function executes after the document is ready.
TEN7.layouts.mobile = function($) {
    //giving search input a value for mobile sidr

    setTimeout(
        function() {
            $('.sidr-class-form-text').attr('value', 'Search');
        }, 500);

    //making pager only have 3 pages for mobile
    var pagercounter = 0;
    $('ul.pager li.pager-item').each(function() {
        pagercounter++;
        if (pagercounter > 2) {
            $(this).remove();
        }
    })
    //counting and spacing depending on number for pager.
    var pagerCount = $('.pager li').not('.pager li.pager-ellipsis').length;
    var pagerCalc = 93 / pagerCount + '%';
    $('.pager li').css('width', pagerCalc);

    $('.page-blogger-home ul.tabs').wrap('<div id = "blogger-sidr"></div>');
    $('<div class="blogger-sidr-button">Dashboard Menu</div>').insertBefore('#blogger-sidr');
    $('.blogger-sidr-button').sidr({
        name: 'sidr-blogger',
        source: '#blogger-sidr',
        side: 'left'
    });

    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '.main-nav',
        side: 'right',
        onClose: function(){
            $('.page__header').css('left', 0);
        },
        onOpen: function(){
            $('.page__header').css('left', 'auto');
        }
    });
    //adding submenu functionality for mobile.
    $('<div id ="submenuholder"></div>').appendTo('#sidr-main');
    $('.sidr-class-om-menu li.sidr-class-om-leaf').each(function() {
        if ($(this).children('.sidr-class-closed').length > 0) {
            $(this).addClass('children');
            $(this).clone().appendTo("#submenuholder");
        }
    });
    $('#submenuholder li.sidr-class-om-leaf').each(function() {
        $('<div class="submenuback">Back</div>').prependTo($(this));
    });
    $('.sidr-class-om-menu li.children').not('li.sidr-class-leaf-search').click(function() {
        $('.sidr-inner').animate({
            'margin-left': '-260px'
        }, 'fast');
        var correctChild = $(this).attr("id");
        $('#submenuholder li#' + correctChild).show().animate({
            'right': '0px'
        }, 'fast');
    });
    $('.submenuback').click(function() {
        $('.sidr-inner').animate({
            'margin-left': '0px'
        });
        $('#submenuholder li.sidr-class-om-leaf').animate({
            'right': '-260px'
        }, 'fast', function() {
            $(this).css('display', 'none');
        });
    });




    //moving block footer into body.... Only we to address the designers wants and needs.
    if ($('body').hasClass('node-type-collection')) {
        if ($('.block-pt-collection-collection-topic').length > 0) {
            $('.block-pt-collection-collection-topic').each(function() {
                $(this).children('.block__content').children('.__card-footer').css('clear', 'none');
                $(this).children('.block__content').children('.__card-footer').css('margin', '10px 0px');
                $(this).children('.block__content').children('.__card-footer').appendTo($(this).children('.block__content ').children('.topic_text '));

            })
        }
    }

    // disable Chosen plugin on mobile
    if ($.fn.chosen) {
        $('select').chosen('destroy');
    }

    // Search filter
    $('.mobile__title').click(function() {
        $(this).toggleClass('open');
        $('.collapsible').slideToggle(300, function () {
          $(this).toggleClass('mobile-collapsed');
        });
    });


}
;
/*

  7777777777777777777777777777777777777777777777777777777777777777777777777
  77                                                77777777777777777777777
  77   777777777777  77777777777  777777    7777    7777              77777
  77   777777777777  77777777777  7777777   7777    7777              77777
  77       7777      7777         77777777  7777    777777777777     777777
  77       7777      7777777777   777777777 7777    77777777777     777777
  77       7777      7777777777   7777 777777777    7777777777     777777
  77       7777      7777         7777  77777777    777777777     777777
  77       7777      77777777777  7777   7777777    77777777     777777
  77       7777      77777777777  7777    777777    7777777     777777
  77                                                77777777777777777
  777777777777777777777777777777777777777777777777777777777777777777

  Handcrafted in America by the humans at TEN7.com
	Copyright 2012 Ten 7 Interactive, LLC.

*/

// Place code to be executed exclusively when the page is loaded in a Tablet
// screen context. The widths for all screen contexts are defined in
// TEN7.js.
// Code in this function executes after the document is ready.
TEN7.layouts.tablet = function($) {



    //counting and spacing depending on number for pager.
    var pagerCount = $('.pager li').not('.pager li.pager-ellipsis').length;
    var pagerCalc = 93 / pagerCount + '%';
    $('.pager li').css('width', pagerCalc);


    //moving block footer into body.... Only way to address the designers wants and needs.
    if ($('body').hasClass('node-type-collection')) {
        if ($('.block-pt-collection-collection-topic').length > 0) {
            $('.block-pt-collection-collection-topic').each(function() {
                $(this).children('.block__content').children('.__card-footer').css('clear', 'none');
                $(this).children('.block__content').children('.__card-footer').css('margin-top', '10px');
                $(this).children('.block__content').children('.__card-footer').appendTo($(this).children('.block__content ').children('.topic_text '));

            })
        }
    }


    //flexslider loading placeholder
   //if(Drupal.settings.flexslider.optionsets) {
   //  // find the flexslider area
   //  var theSlider = document.getElementById('flexslider-1');
   //
   //  // add img placeholder div
   //  var slidePlaceholder = document.createElement('div');
   //  slidePlaceholder.className = 'slide-placeholder';
   //
   //  // set placeholder dimensions
   //  //var slideWidth = window.innerWidth - 120; // 108 + 12 for flexslider borders for tablet left/right page margins
   //  var slideWidth = $('.main').width();
   //  var slidesHeight = (slideWidth * 0.556169); // width/height ratio
   //  slidePlaceholder.style.height = slidesHeight + 'px';
   //
   //  //append placehoder div before flexslider
   //  theSlider.appendChild(slidePlaceholder);
   //}

}
;
/*

  7777777777777777777777777777777777777777777777777777777777777777777777777
  77                                                77777777777777777777777
  77   777777777777  77777777777  777777    7777    7777              77777
  77   777777777777  77777777777  7777777   7777    7777              77777
  77       7777      7777         77777777  7777    777777777777     777777
  77       7777      7777777777   777777777 7777    77777777777     777777
  77       7777      7777777777   7777 777777777    7777777777     777777
  77       7777      7777         7777  77777777    777777777     777777
  77       7777      77777777777  7777   7777777    77777777     777777
  77       7777      77777777777  7777    777777    7777777     777777
  77                                                77777777777777777
  777777777777777777777777777777777777777777777777777777777777777777

  Handcrafted in America by the humans at TEN7.com
	Copyright 2012 Ten 7 Interactive, LLC.

*/

// Place code to be executed exclusively when the page is loaded in a Desktop
// screen context. The widths for all screen contexts are defined in
// TEN7.js.
// Code in this function executes after the document is ready.
TEN7.layouts.desktop = function($) {
    var bottom = 0;
    $(window).scroll(function() {
        if ($('#social-media').length > 0) {
            var scrollBottom = $('#social_media_inner').offset().top - $('.footer').offset().top;
            var socialFromTop = $('#social_media_inner').offset().top - $(window).scrollTop();
            if ($('.admin-menu').length > 0) {
                if ($(window).scrollTop() >= 339) {
                    $('#social-media #social_media_inner').css('position', 'fixed');
                    $('#social-media #social_media_inner').css('top', '94px');
                }
                if ($(window).scrollTop() <= 338) {
                    $('#social-media #social_media_inner').css('position', 'relative');
                    $('#social-media #social_media_inner').css('top', '0');
                }
                if (scrollBottom >= -478) {
                    $('#social-media #social_media_inner').css('position', 'relative');
                    $('#social-media #social_media_inner').css('bottom', '-44px');
                    $('#social-media #social_media_inner').css('top', 'auto');
                    $('#social-media').css('top', 'auto');
                    bottom = 1;
                }
                if (bottom == 1 && socialFromTop >= 100) {
                    $('#social-media #social_media_inner').css('position', 'fixed');
                    $('#social-media #social_media_inner').css('top', '94px');
                    $('#social-media').css('top', '100px');
                    bottom = 0;
                }
            } else if ($('.region-logged-in-nav').length > 0) {
                if ($(window).scrollTop() >= 133) {
                    $('#social-media #social_media_inner').css('position', 'fixed');
                    $('#social-media #social_media_inner').css('top', '74px');
                }
                if ($(window).scrollTop() <= 232) {
                    $('#social-media #social_media_inner').css('position', 'relative');
                    $('#social-media #social_media_inner').css('top', '0');
                }
                if (scrollBottom >= -478) {
                    $('#social-media #social_media_inner').css('position', 'relative');
                    $('#social-media #social_media_inner').css('bottom', '-44px');
                    $('#social-media #social_media_inner').css('top', 'auto');
                    $('#social-media').css('top', 'auto');
                    bottom = 1;
                }
                if (bottom == 1 && socialFromTop >= 100) {
                    $('#social-media #social_media_inner').css('position', 'fixed');
                    $('#social-media #social_media_inner').css('top', '74px');
                    $('#social-media').css('top', '100px');
                    bottom = 0;
                }
            } else {

                if ($(window).scrollTop() >= 253) {
                    $('#social-media #social_media_inner').css('position', 'fixed');
                    $('#social-media #social_media_inner').css('top', '44px');
                    $('#social-media').css('top', '100px');
                }
                if ($(window).scrollTop() <= 252) {
                    $('#social-media #social_media_inner').css('position', 'relative');
                    $('#social-media #social_media_inner').css('top', '0');
                    $('#social-media').css('top', '200px');
                    $('#social-media #social_media_inner').css('bottom', 'auto');
                }
                if (scrollBottom >= -478) {
                    $('#social-media #social_media_inner').css('position', 'relative');
                    $('#social-media #social_media_inner').css('bottom', '-44px');
                    $('#social-media #social_media_inner').css('top', 'auto');
                    $('#social-media').css('top', 'auto');
                    bottom = 1;
                }
                if (bottom == 1 && socialFromTop >= 50) {
                    $('#social-media #social_media_inner').css('position', 'fixed');
                    $('#social-media #social_media_inner').css('top', '44px');
                    $('#social-media').css('top', '100px');
                    bottom = 0;
                }
            }
        }

    });

    var pagerCount = $('.pager li').not('.pager li.pager-ellipsis').length;
    var pagerCalc = 93 / pagerCount + '%';
    $('.pager li').css('width', pagerCalc);


  /*
     * flexslider loading placeholder
     */
    // find the flexslider area
   //if(Drupal.settings.flexslider.optionsets) {
   //  var theSlider = document.getElementById('flexslider-1');
   //
   //  // add img placeholder div
   //  var slidePlaceholder = document.createElement('div');
   //  slidePlaceholder.className = 'slide-placeholder';
   //
   //  // set placeholder dimensions
   //  //var slideWidth = window.innerWidth - 42; // mobile page margins: 30; + flexslider borders: 12; (30 + 12)
   //  var slidesHeight = 347; // this one has defined height (347px) but need to add borders (12px)
   //
   //  slidePlaceholder.style.height = slidesHeight + 'px';
   //  slidePlaceholder.style.border = '6px solid #2d2d2d';
   //
   //  //append placehoder div before flexslider
   //  theSlider.appendChild(slidePlaceholder);
//   }

}
;
/*! Sidr - v1.2.1 - 2013-11-06
 * https://github.com/artberri/sidr
 * Copyright (c) 2013 Alberto Varela; Licensed MIT */
(function(e){var t=!1,i=!1,n={isUrl:function(e){var t=RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return t.test(e)?!0:!1},loadContent:function(e,t){e.html(t)},addPrefix:function(e){var t=e.attr("id"),i=e.attr("class");"string"==typeof t&&""!==t&&e.attr("id",t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-id-$1")),"string"==typeof i&&""!==i&&"sidr-inner"!==i&&e.attr("class",i.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-class-$1")),e.removeAttr("style")},execute:function(n,s,a){"function"==typeof s?(a=s,s="sidr"):s||(s="sidr");var r,d,l,c=e("#"+s),u=e(c.data("body")),f=e("html"),p=c.outerWidth(!0),g=c.data("speed"),h=c.data("side"),m=c.data("displace"),v=c.data("onOpen"),y=c.data("onClose"),x="sidr"===s?"sidr-open":"sidr-open "+s+"-open";if("open"===n||"toggle"===n&&!c.is(":visible")){if(c.is(":visible")||t)return;if(i!==!1)return o.close(i,function(){o.open(s)}),void 0;t=!0,"left"===h?(r={left:p+"px"},d={left:"0px"}):(r={right:p+"px"},d={right:"0px"}),u.is("body")&&(l=f.scrollTop(),f.css("overflow-x","hidden").scrollTop(l)),m?u.addClass("sidr-animating").css({width:u.width(),position:"absolute"}).animate(r,g,function(){e(this).addClass(x)}):setTimeout(function(){e(this).addClass(x)},g),c.css("display","block").animate(d,g,function(){t=!1,i=s,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),v()}else{if(!c.is(":visible")||t)return;t=!0,"left"===h?(r={left:0},d={left:"-"+p+"px"}):(r={right:0},d={right:"-"+p+"px"}),u.is("body")&&(l=f.scrollTop(),f.removeAttr("style").scrollTop(l)),u.addClass("sidr-animating").animate(r,g).removeClass(x),c.animate(d,g,function(){c.removeAttr("style").hide(),u.removeAttr("style"),e("html").removeAttr("style"),t=!1,i=!1,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),y()}}},o={open:function(e,t){n.execute("open",e,t)},close:function(e,t){n.execute("close",e,t)},toggle:function(e,t){n.execute("toggle",e,t)},toogle:function(e,t){n.execute("toggle",e,t)}};e.sidr=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof t&&"string"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.sidr"),void 0):o.toggle.apply(this,arguments)},e.fn.sidr=function(t){var i=e.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,onOpen:function(){},onClose:function(){}},t),s=i.name,a=e("#"+s);if(0===a.length&&(a=e("<div />").attr("id",s).appendTo(e("body"))),a.addClass("sidr").addClass(i.side).data({speed:i.speed,side:i.side,body:i.body,displace:i.displace,onOpen:i.onOpen,onClose:i.onClose}),"function"==typeof i.source){var r=i.source(s);n.loadContent(a,r)}else if("string"==typeof i.source&&n.isUrl(i.source))e.get(i.source,function(e){n.loadContent(a,e)});else if("string"==typeof i.source){var d="",l=i.source.split(",");if(e.each(l,function(t,i){d+='<div class="sidr-inner">'+e(i).html()+"</div>"}),i.renaming){var c=e("<div />").html(d);c.find("*").each(function(t,i){var o=e(i);n.addPrefix(o)}),d=c.html()}n.loadContent(a,d)}else null!==i.source&&e.error("Invalid Sidr Source");return this.each(function(){var t=e(this),i=t.data("sidr");i||(t.data("sidr",s),"ontouchstart"in document.documentElement?(t.bind("touchstart",function(e){e.originalEvent.touches[0],this.touched=e.timeStamp}),t.bind("touchend",function(e){var t=Math.abs(e.timeStamp-this.touched);200>t&&(e.preventDefault(),o.toggle(s))})):t.click(function(e){e.preventDefault(),o.toggle(s)}))})}})(jQuery);;
/* Tooltipster v3.0.5 */;(function(e,t,n){function o(t,n){this.bodyOverflowX;this.checkInterval=null;this.content;this.$el=e(t);this.elProxyPosition;this.$elProxy;this.enabled=true;this.options=e.extend({},s,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this.init()}function u(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function l(){return!f&&a}function c(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",s={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,delay:200,fixedWidth:0,maxWidth:0,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};o.prototype={init:function(){var t=this;if(n.querySelector){if(t.options.content!==null){t.setContent(t.options.content)}else{var r=t.$el.attr("title");if(typeof r==="undefined")r=null;t.setContent(r)}var i=t.options.functionInit(t.$el,t.content);if(typeof i!=="undefined")t.setContent(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!a&&t.options.iconDesktop||a&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!l()||t.options.touchDevices){t.mouseIsOverProxy=true;t.showTooltip()}}).on("mouseleave."+t.namespace,function(){if(!l()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(a&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t.showTooltipNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!l()||t.options.touchDevices){t.showTooltip()}})}}},showTooltip:function(){var e=this;if(e.status!="shown"&&e.status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e.showTooltipNow()}},e.options.delay)}else e.showTooltipNow()}},showTooltipNow:function(){var n=this;clearTimeout(n.timerShow);n.timerShow=null;clearTimeout(n.timerHide);n.timerHide=null;if(n.enabled&&n.content!==null){if(n.options.onlyOne){e(".tooltipstered").not(n.$el).each(function(t,n){var i=e(n),s=i[r]("status"),o=i[r]("option","autoClose");if(s!=="hidden"&&s!=="disappearing"&&o){i[r]("hide")}})}n.options.functionBefore(n.$elProxy,function(){if(n.status!=="hidden"){var r=0;if(n.status==="disappearing"){n.status="appearing";if(c()){n.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+n.options.animation+"-show");if(n.options.speed>0)n.$tooltip.delay(n.options.speed);n.$tooltip.queue(function(){n.status="shown"})}else{n.$tooltip.stop().fadeIn(function(){n.status="shown"})}}}else{n.status="appearing";var r=n.options.speed;n.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var i="tooltipster-"+n.options.animation,s="-webkit-transition-duration: "+n.options.speed+"ms; -webkit-animation-duration: "+n.options.speed+"ms; -moz-transition-duration: "+n.options.speed+"ms; -moz-animation-duration: "+n.options.speed+"ms; -o-transition-duration: "+n.options.speed+"ms; -o-animation-duration: "+n.options.speed+"ms; -ms-transition-duration: "+n.options.speed+"ms; -ms-animation-duration: "+n.options.speed+"ms; transition-duration: "+n.options.speed+"ms; animation-duration: "+n.options.speed+"ms;",o=n.options.fixedWidth>0?"width:"+Math.round(n.options.fixedWidth)+"px;":"",u=n.options.maxWidth>0?"max-width:"+Math.round(n.options.maxWidth)+"px;":"",f=n.options.interactive?"pointer-events: auto;":"";n.$tooltip=e('<div class="tooltipster-base '+n.options.theme+'" style="'+o+" "+u+" "+f+" "+s+'"><div class="tooltipster-content"></div></div>');if(c())n.$tooltip.addClass(i);n.insertContent();n.$tooltip.appendTo("body");n.positionTooltip();n.options.functionReady(n.$el,n.$tooltip);if(c()){n.$tooltip.addClass(i+"-show");if(n.options.speed>0)n.$tooltip.delay(n.options.speed);n.$tooltip.queue(function(){n.status="shown"})}else{n.$tooltip.css("display","none").fadeIn(n.options.speed,function(){n.status="shown"})}n.setCheckInterval();e(t).on("scroll."+n.namespace+" resize."+n.namespace,function(){n.positionTooltip()});if(n.options.autoClose){e("body").off("."+n.namespace);if(n.options.trigger=="hover"){if(a){setTimeout(function(){e("body").on("touchstart."+n.namespace,function(){n.hideTooltip()})},0)}if(n.options.interactive){if(a){n.$tooltip.on("touchstart."+n.namespace,function(e){e.stopPropagation()})}var l=null;n.$elProxy.add(n.$tooltip).on("mouseleave."+n.namespace+"-autoClose",function(){clearTimeout(l);l=setTimeout(function(){n.hideTooltip()},n.options.interactiveTolerance)}).on("mouseenter."+n.namespace+"-autoClose",function(){clearTimeout(l)})}else{n.$elProxy.on("mouseleave."+n.namespace+"-autoClose",function(){n.hideTooltip()})}}else if(n.options.trigger=="click"){setTimeout(function(){e("body").on("click."+n.namespace+" touchstart."+n.namespace,function(){n.hideTooltip()})},0);if(n.options.interactive){n.$tooltip.on("click."+n.namespace+" touchstart."+n.namespace,function(e){e.stopPropagation()})}}}}if(n.options.timer>0){n.timerHide=setTimeout(function(){n.timerHide=null;n.hideTooltip()},n.options.timer+r)}})}},setCheckInterval:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.status=="shown"||t.status=="appearing")t.hideTooltip();t.cancelCheckInterval()}else{if(t.options.positionTracker){var n=t.positionInfo(t.$elProxy),r=false;if(u(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(u(n.position,t.elProxyPosition.position))r=true}else{if(u(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.positionTooltip()}}}},200)},cancelCheckInterval:function(){clearInterval(this.checkInterval);this.checkInterval=null},hideTooltip:function(){var n=this;clearTimeout(n.timerShow);n.timerShow=null;clearTimeout(n.timerHide);n.timerHide=null;if(n.status=="shown"||n.status=="appearing"){n.status="disappearing";var r=function(){n.status="hidden";n.$tooltip.remove();n.$tooltip=null;e(t).off("."+n.namespace);e("body").off("."+n.namespace).css("overflow-x",n.bodyOverflowX);n.$elProxy.off("."+n.namespace+"-autoClose");n.options.functionAfter(n.$elProxy)};if(c()){n.$tooltip.clearQueue().removeClass("tooltipster-"+n.options.animation+"-show").addClass("tooltipster-dying");if(n.options.speed>0)n.$tooltip.delay(n.options.speed);n.$tooltip.queue(r)}else{n.$tooltip.stop().fadeOut(n.options.speed,r)}}},setContent:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.content=e},insertContent:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.content==="string"&&!e.options.contentAsHTML){t.text(e.content)}else{t.empty().append(e.content)}},updateTooltip:function(e){var t=this;t.setContent(e);if(t.content!==null){if(t.status!=="hidden"){t.insertContent();t.positionTooltip();if(t.options.updateAnimation){if(c()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hideTooltip()}},positionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},positionTooltip:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n.positionInfo(n.$elProxy);var r=null,s=e(t).width(),o=n.elProxyPosition,u=n.$tooltip.outerWidth(false),a=n.$tooltip.innerWidth()+1,f=n.$tooltip.outerHeight(false),l=null;if(n.$elProxy.is("area")){var c=n.$elProxy.attr("shape"),h=n.$elProxy.parent().attr("name"),p=e('img[usemap="#'+h+'"]'),d=p.offset().left,v=p.offset().top,m=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(c=="circle"){var g=parseInt(m[0]),y=parseInt(m[1]),b=parseInt(m[2]);o.dimension.height=b*2;o.dimension.width=b*2;o.offset.top=v+y-b;o.offset.left=d+g-b}else if(c=="rect"){var g=parseInt(m[0]),y=parseInt(m[1]),w=parseInt(m[2]),E=parseInt(m[3]);o.dimension.height=E-y;o.dimension.width=w-g;o.offset.top=v+y;o.offset.left=d+g}else if(c=="poly"){var S=[],x=[],T=0,N=0,C=0,k=0,L="even";for(i=0;i<m.length;i++){var A=parseInt(m[i]);if(L=="even"){if(A>C){C=A;if(i===0){T=C}}if(A<T){T=A}L="odd"}else{if(A>k){k=A;if(i==1){N=k}}if(A<N){N=A}L="even"}}o.dimension.height=k-N;o.dimension.width=C-T;o.offset.top=v+N;o.offset.left=d+T}else{o.dimension.height=p.outerHeight(false);o.dimension.width=p.outerWidth(false);o.offset.top=v;o.offset.left=d}}if(n.options.fixedWidth===0){n.$tooltip.css({width:Math.round(a)+"px","padding-left":"0px","padding-right":"0px"})}var O=0,M=0,_=0,D=parseInt(n.options.offsetY),P=parseInt(n.options.offsetX),H=n.options.position;function B(){var n=e(t).scrollLeft();if(O-n<0){r=O-n;O=n}if(O+u-n>s){r=O-(s+n-u);O=s+n-u}}function j(n,r){if(o.offset.top-e(t).scrollTop()-f-D-12<0&&r.indexOf("top")>-1){H=n}if(o.offset.top+o.dimension.height+f+12+D>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){H=n;_=o.offset.top-f-D-12}}if(H=="top"){var F=o.offset.left+u-(o.offset.left+o.dimension.width);O=o.offset.left+P-F/2;_=o.offset.top-f-D-12;B();j("bottom","top")}if(H=="top-left"){O=o.offset.left+P;_=o.offset.top-f-D-12;B();j("bottom-left","top-left")}if(H=="top-right"){O=o.offset.left+o.dimension.width+P-u;_=o.offset.top-f-D-12;B();j("bottom-right","top-right")}if(H=="bottom"){var F=o.offset.left+u-(o.offset.left+o.dimension.width);O=o.offset.left-F/2+P;_=o.offset.top+o.dimension.height+D+12;B();j("top","bottom")}if(H=="bottom-left"){O=o.offset.left+P;_=o.offset.top+o.dimension.height+D+12;B();j("top-left","bottom-left")}if(H=="bottom-right"){O=o.offset.left+o.dimension.width+P-u;_=o.offset.top+o.dimension.height+D+12;B();j("top-right","bottom-right")}if(H=="left"){O=o.offset.left-P-u-12;M=o.offset.left+P+o.dimension.width+12;var I=o.offset.top+f-(o.offset.top+n.$elProxy.outerHeight(false));_=o.offset.top-I/2-D;if(O<0&&M+u>s){var q=parseFloat(n.$tooltip.css("border-width"))*2,R=u+O-q;n.$tooltip.css("width",R+"px");f=n.$tooltip.outerHeight(false);O=o.offset.left-P-R-12-q;I=o.offset.top+f-(o.offset.top+n.$elProxy.outerHeight(false));_=o.offset.top-I/2-D}else if(O<0){O=o.offset.left+P+o.dimension.width+12;r="left"}}if(H=="right"){O=o.offset.left+P+o.dimension.width+12;M=o.offset.left-P-u-12;var I=o.offset.top+f-(o.offset.top+n.$elProxy.outerHeight(false));_=o.offset.top-I/2-D;if(O+u>s&&M<0){var q=parseFloat(n.$tooltip.css("border-width"))*2,R=s-O-q;n.$tooltip.css("width",R+"px");f=n.$tooltip.outerHeight(false);I=o.offset.top+f-(o.offset.top+n.$elProxy.outerHeight(false));_=o.offset.top-I/2-D}else if(O+u>s){O=o.offset.left-P-u-12;r="right"}}if(n.options.arrow){var U="tooltipster-arrow-"+H;if(n.options.arrowColor.length<1){var z=n.$tooltip.css("background-color")}else{var z=n.options.arrowColor}if(!r){r=""}else if(r=="left"){U="tooltipster-arrow-right";r=""}else if(r=="right"){U="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(H=="top"||H=="top-left"||H=="top-right"){var W=parseFloat(n.$tooltip.css("border-bottom-width")),X=n.$tooltip.css("border-bottom-color")}else if(H=="bottom"||H=="bottom-left"||H=="bottom-right"){var W=parseFloat(n.$tooltip.css("border-top-width")),X=n.$tooltip.css("border-top-color")}else if(H=="left"){var W=parseFloat(n.$tooltip.css("border-right-width")),X=n.$tooltip.css("border-right-color")}else if(H=="right"){var W=parseFloat(n.$tooltip.css("border-left-width")),X=n.$tooltip.css("border-left-color")}else{var W=parseFloat(n.$tooltip.css("border-bottom-width")),X=n.$tooltip.css("border-bottom-color")}if(W>1){W++}var V="";if(W!==0){var J="",K="border-color: "+X+";";if(U.indexOf("bottom")!==-1){J="margin-top: -"+Math.round(W)+"px;"}else if(U.indexOf("top")!==-1){J="margin-bottom: -"+Math.round(W)+"px;"}else if(U.indexOf("left")!==-1){J="margin-right: -"+Math.round(W)+"px;"}else if(U.indexOf("right")!==-1){J="margin-left: -"+Math.round(W)+"px;"}V='<span class="tooltipster-arrow-border" style="'+J+" "+K+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var Q='<div class="'+U+' tooltipster-arrow" style="'+r+'">'+V+'<span style="border-color:'+z+';"></span></div>';n.$tooltip.append(Q)}n.$tooltip.css({top:Math.round(_)+"px",left:Math.round(O)+"px"})}}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(s,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster");if(n){switch(t[0]){case"content":case"update":if(typeof t[1]==="undefined"){r=n.content;return false}else{n.updateTooltip(t[1]);break};case"destroy":n.hideTooltip();if(n.$el[0]!==n.$elProxy[0])n.$elProxy.remove();var i=typeof n.content==="string"?n.content:e("<div></div>").append(n.content).html();n.$el.removeClass("tooltipstered").attr("title",i).removeData("tooltipster").off("."+n.namespace);break;case"disable":n.hideTooltip();n.enabled=false;break;case"elementIcon":r=n.$el[0]!==n.$elProxy[0]?n.$elProxy[0]:undefined;return false;case"elementTooltip":r=n.$tooltip?n.$tooltip[0]:undefined;return false;case"enable":n.enabled=true;break;case"hide":n.hideTooltip();break;case"option":r=n.options[t[1]];break;case"reposition":n.positionTooltip();break;case"show":n.showTooltipNow();break;case"status":r=n.status;return false;default:throw new Error('Unknown method .tooltipster("'+t[0]+'")');break}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{return this.each(function(){if(!e(this).data("tooltipster")){e(this).data("tooltipster",new o(this,t[0]))}})}}};var a=!!("ontouchstart"in t);var f=false;e("body").one("mousemove",function(){f=true})})(jQuery,window,document);;
