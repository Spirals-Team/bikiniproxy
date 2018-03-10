_satellite.pushAsyncScript(function(event, target, $variables){
  var tags = {
    'premium_product_pages': {
        'cat': 'premi0',
        'id': '6260248',
        'type': 'premi0'
    },
    'premium_paywall': {
        'cat': 'premi0',
        'id': '6260248',
        'type': 'premi00'
    },
    'premium_checkout': {
        'cat': 'premi0',
        'id': '6260248',
        'type': 'premi001'
    },
    'premium_checkout_freetrial3': {
        'cat': 'fs-fi0',
        'id': '6260248',
        'type': 'fs-nb0'
    },
    'premium_registration_complete': {
        'cat': 'premi0',
        'id': '6260248',
        'type': 'premi000'
    }
};

var fireTag = function(tagName, tags) {
    var iframe = document.createElement('iframe');
    iframe.src = '//' + tags[tagName].id + '.fls.doubleclick.net/activityi;src=' + tags[tagName].id + ';type=' + tags[tagName].type + ';cat=' + tags[tagName].cat + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + String(Math.random()).slice(2) + '?';
    iframe.width = '1';
    iframe.height = '1';
    iframe.style.display = 'none';
    document.getElementsByTagName('body')[0].appendChild(iframe);
};



var events = typeof dataLayer != 'undefined' && dataLayer.event || [];
if (events.length > 0) {
    for (var i = 0; i < events.length; i++) {
        switch (events[i]) {
            case 'registrationComplete':
                fireTag('premium_registration_complete', tags);
                break;
            case 'subscriptionCheckout':

                if (window.location.href.indexOf("productId=nyytq4zthbvwsoliojugwyzzmyzha3dt&campaignId=460X&offerId=freetrial3-website-monthly-ZG340") > -1){
                    fireTag('premium_checkout_freetrial3', tags);
                } else {
                fireTag('premium_checkout', tags);
                }
                break;
            
            case 'subscriptionConfirmation':
                var iframe = document.createElement('iframe');
                iframe.src = '//6260248.fls.doubleclick.net/activityi;src=6260248;type=premi002;cat=premi0;qty=1;cost=[Revenue];order=[OrderID];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + String(Math.random()).slice(2) + '?';
                iframe.width = '1';
                iframe.height = '1';
                iframe.style.display = 'none';
                document.getElementsByTagName('body')[0].appendChild(iframe);
                break;
        }
    }
} else if (/\/premium\/product\/|\/premium\/digital-editions\/|\/subscriptions\/sub-bar\//.test(document.location.pathname)) {
    fireTag('premium_product_pages', tags);
} else if (_satellite.getVar('TMG paywallDisplayed') == 'true') {
    fireTag('premium_paywall', tags);
}
});
