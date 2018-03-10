/*-------------------------------------------------------------------------------*
 * Script for onClick trigger functionality used by flag images
 * Script modified from original GTranslate plugin created by Edvard Ananyan at http://edo.webmaster.am
 * GTranslate Free Version is licensed under GNU/GPL license
 *-------------------------------------------------------------------------------*/

/* <![CDATA[ */
function GLTFireEvent(lang_pair, lang_dest) {
    try {
        if (document.createEvent) {
            var event = document.createEvent("HTMLEvents");
            event.initEvent(lang_dest, true, true);
            lang_pair.dispatchEvent(event)
        } else {
            var event = document.createEventObject();
            lang_pair.fireEvent('on' + lang_dest, event)
        }
    } catch (e) {}
}

function doGoogleLanguageTranslator(lang_pair) {
    if (lang_pair.value) lang_pair = lang_pair.value;
    if (lang_pair == '') return;
    var lang_dest = lang_pair.split('|')[1];
    var event;
    var classic = jQuery('.goog-te-combo');
    var simple = jQuery('.goog-te-menu-frame:first');
    var simpleValue = simple.contents().find('.goog-te-menu2-item span.text:contains('+lang_text+')'); 
    if (classic.length == 0) {
      for (var i = 0; i < simple.length; i++) {
        event = simple[i];
        //alert('Simple is active.');
      }
    } else {
      for (var i = 0; i < classic.length; i++) {
        event = classic[i]; 
        //alert('Classic is active.');
      }
    }
    if (document.getElementById('google_language_translator') != null) {
      if (classic.length != 0) {
        if (lang_prefix != default_lang) {
          event.value = lang_dest;
          GLTFireEvent(event, 'change');
        } else {
          jQuery('.goog-te-banner-frame:first').contents().find('.goog-close-link').get(0).click();
        }
      } else {
        event.value = lang_dest;
        if (lang_prefix != default_lang) {
          simpleValue.click(); 
        } else {
          jQuery('.goog-te-banner-frame:first').contents().find('.goog-close-link').get(0).click();
        }       
      }  
    }
}
/* ]]> */

 