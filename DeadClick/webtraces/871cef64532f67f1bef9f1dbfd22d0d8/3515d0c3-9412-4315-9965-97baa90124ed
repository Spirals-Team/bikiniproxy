if(typeof BBC.adverts != 'undefined' && typeof BBC.adverts.checkWrite != 'undefined' && BBC.adverts.checkWrite(bbc_adsense_slot)) {
    function google_ad_request_done(google_ads) {
    }
    function disableScreenReaderForAdContent() {
        var i, j, links, iframes, element;
        var adSlots = document.getElementsByClassName('bbccom_adsense');
        for ( j = 0; j < adSlots.length; j++ ) {
            element = adSlots[j];
            links = element.getElementsByTagName('a');
            for (i = 0; i < links.length; i++) {
                links[i].tabIndex = "-1";
            }
            iframes = element.getElementsByTagName('iframe');
            for (i = 0; i < iframes.length; i++) {
                iframes[i].tabIndex = "-1";
            }
        }
    }
    if (document.getElementById('bbccom_adsense_middle')) {
        var adsense_middle = document.getElementById('bbccom_adsense_middle');
        adsense_middle.className = adsense_middle.className + ' adsense_optionB';
    } else if (document.getElementById('bbccom_adsense_mpu')) {
        var adsenseMpu = document.getElementById('bbccom_adsense_mpu');
        adsenseMpu.className = adsenseMpu.className + ' adsense_optionB';
    }

    var adSenseScript,
        adSenseElement,
        adSenseRunScript,
        dataAdSlot = (bbcdotcom.sections.getSection(0) === "weather") ? "7287144776" : "2504227975";

    if( typeof window.adsbygoogle === 'undefined' ){
        adSenseScript = document.createElement("script");
        adSenseScript.setAttribute("async", "async");
        adSenseScript.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
        document.body.appendChild(adSenseScript);
    }

    adSenseElement =
        '<h3><a href="http://www.bbc.co.uk/bbc.com/faq/ads_by_google.shtml" tabindex="-1">Ads by Google</a></h3>'+
        '<ins class="adsbygoogle"'+
        'style="display:inline-block;min-width:320px;width:100%;height:320px;"'+
        'data-ad-client="ca-pub-5087960732420604"'+
        'data-ad-slot='+dataAdSlot+'></ins>';

    document.getElementById('bbccom_adsense_mpu').innerHTML = adSenseElement;

    adSenseRunScript = document.createElement("script");
    adSenseRunScript.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
    document.body.appendChild(adSenseRunScript);
    setTimeout(function(){
        disableScreenReaderForAdContent();
    }, 600);

    // <!-- Start: Testing on CREAM Story Pages -->
    gloader.load(["glow","1","glow.dom"],{
        onLoad: function(glow){
            glow.ready(function(){
                if (BBC.adverts.getNewsGvl3() && glow.dom.get("#bbccom_adsense_mpu").length > 0 && glow.dom.get("#main-content.story").length > 0) {
                    glow.dom.get(".layout-block-b").append('<div id="bbccom_adsense_mpu_rhs" class="bbccom-advert bbccom_adsense"></div>');
                    var source = glow.dom.get("#bbccom_adsense_mpu");
                    var dest = glow.dom.get("#bbccom_adsense_mpu_rhs");
                    source.get("script").remove();
                    dest.html(source.html());
                    glow.dom.get("#bbccom_adsense_mpu").remove();
                }
            })
        }
    });
    // <!-- End: Testing on CREAM Story Pages -->
}
