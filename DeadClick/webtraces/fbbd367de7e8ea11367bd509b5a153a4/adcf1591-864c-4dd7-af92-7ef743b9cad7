
var MENUFICATION_INSTANCE;
// Initalize the menu with correct options
(function(root, $) {

    $(document).ready(function() {

        // Set up correct element to use

        if(wp_menufication.customMenuElement && wp_menufication.customMenuElement.length > 0) {
            MENUFICATION_INSTANCE = $(wp_menufication.customMenuElement);
        }
        else {
            $(wp_menufication.element).parent().addClass( wp_menufication.element.substr(1) );
            $(wp_menufication.element).children().first().unwrap();

            MENUFICATION_INSTANCE = $("." + wp_menufication.element.substr(1) );

            if(MENUFICATION_INSTANCE.length > 1) {
                MENUFICATION_INSTANCE.last().remove();
            }
        }

        // Hide first h3 and "skip to content" for default wp page menu
        if(wp_menufication.is_page_menu) {
            MENUFICATION_INSTANCE.children('h3').first().hide();
            MENUFICATION_INSTANCE.children('a').first().hide();
        }

        if(wp_menufication.is_user_logged_in == 1 && $('#wpadminbar').length ) {
            $('body').addClass('menufication-is-logged-in');
            wp_menufication.addToFixedHolder += ',#wpadminbar';
        }

        MENUFICATION_INSTANCE.menufication({

            // Basic settings
            toggleElement:          wp_menufication.toggleElement || null,
            hideDefaultMenu:        wp_menufication.hideDefaultMenu == "on" ? true : false,
            childMenuSupport:       wp_menufication.childMenuSupport == "on" ? true : false,
            childMenuSelector:      wp_menufication.childMenuSelector || 'sub-menu',
            activeClassSelector:    wp_menufication.activeClassSelector || 'current-menu-item',
            onlyMobile:             wp_menufication.onlyMobile == 'on' ? true : false,
            menuText:               wp_menufication.menuText,
            addHomeLink:            wp_menufication.addHomeLink == "on" ? true : false,
            addHomeText:            wp_menufication.addHomeText || null,
            addSearchField:         wp_menufication.addSearchField == "on" ? true : false,
            headerLogo:             wp_menufication.headerLogo || '',
            headerLogoLink:         wp_menufication.headerLogoLink || '',
            theme:                  wp_menufication.theme || 'dark',
            menuLogo:               wp_menufication.menuLogo || '',
            direction:              wp_menufication.direction || 'left',
            enableMultiple:         wp_menufication.enableMultiple == '1' ? true : false,
            multipleContentElement: '#wp_menufication-multiple-content',
            multipleToggleElement:  '#wp_menufication-multiple-toggle',

            // Advanced settings
            triggerWidth:           wp_menufication.triggerWidth || null,
            scrollSpeed:            wp_menufication.scrollSpeed || 0.6,
            supportAndroidAbove:    wp_menufication.supportAndroidAbove || 3.5,
            customFixedHeader:      wp_menufication.customFixedHeader || null,
            addToFixedHolder:       wp_menufication.addToFixedHolder,
            enableSwipe:            wp_menufication.enableSwipe != 'on' ? false : true,
            disableSlideScaling:    wp_menufication.disableSlideScaling == 'on' ? true : false,
            wrapTagsInList:         wp_menufication.wrapTagsInList || '',
            allowedTags:            wp_menufication.allowedTags,
            doCapitalization:       wp_menufication.doCapitalization == 'on' ? true : false
        });

    });

})(window, jQuery);
