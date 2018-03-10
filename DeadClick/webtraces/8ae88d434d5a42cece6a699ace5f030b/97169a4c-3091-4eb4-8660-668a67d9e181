_satellite.pushAsyncScript(function(event, target, $variables){
  var pathname = document.location.pathname;
var _url = window.location.href;
var tags = {
    'travel_insurance': {
        'cat': 'fs-tr0',
        'id': '6260248',
        'type': 'fs-tr0'
    },
    'pvt_health_insurance': {
        'cat': 'fs-fi0',
        'id': '6260248',
        'type': 'fs-pr0'
    },
    'int_health_insurance': {
        'cat': 'fs-fi0',
        'id': '6260248',
        'type': 'fs-in0'
    },
    'nba_prem_subs': {
        'cat': 'fs-fi0',
        'id': '6260248',
        'type': 'fs-nb0'
    },
    'int_money_trans': {
        'cat': 'fs-mo001',
        'id': '6260248',
        'type': 'fscat0'
    },
    'inh_tax': {
        'cat': 'fs-in0',
        'id': '6260248',
        'type': 'fs-in000'
    },
    'home_ins': {
        'cat': 'fs-ho0',
        'id': '6260248',
        'type': 'fs-ho0'
    },
    'fun_plans': {
        'cat': 'fs-fu0',
        'id': '6260248',
        'type': 'fs-fu0'
    },
    'car_warranty': {
        'cat': 'fs-ca0',
        'id': '6260248',
        'type': 'fs-ca0'
    },
    'travel_money': {
        'cat': 'fs-mo00',
        'id': '6260248',
        'type': 'fscat0'
    },
    'mortgages': {
        'cat': 'fs-mo0',
        'id': '6260248',
        'type': 'fs-mo00'
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

if (/^\/insurance\/travel\/$/.test(pathname)) {
    fireTag('travel_insurance', tags);
}
else if (/^\/insurance\/health\/$/.test(pathname)) {
    fireTag('pvt_health_insurance', tags);
}
else if (/^\/financial-services\/insurance\/international-health-insurance\/$/.test(pathname)) {
    fireTag('int_health_insurance', tags);
}
else if (/^\/financial-services\/currency-exchange\/international-money-transfers\/guide-to-sending-money-securely\/$/.test(pathname)) {
    fireTag('int_money_trans', tags);
} 
else if (/^\/financial-services\/currency-exchange\/international-money-transfers\/$/.test(pathname)) {
    fireTag('int_money_trans', tags);
} 
else if (/^\/financial-services\/currency-exchange\/travel-money\/$/.test(pathname)) {
    fireTag('travel_money', tags);
}
else if (/^\/financial-services\/investments\/inheritance-tax\/$/.test(pathname)) {
    fireTag('inh_tax', tags);
}
else if (/^\/financial-services\/insurance\/home-insurance\/$/.test(pathname)) {
    fireTag('home_ins', tags);
}
else if (/^\/financial-services\/retirement-solutions\/funeral-plans\/$/.test(pathname)) {
    fireTag('fun_plans', tags);
}
else if (/^\/financial-services\/motoring\/car-warranty\/$/.test(pathname)) {
    fireTag('car_warranty', tags);
}
else if (/^\/financial-services\/money-comparison\/mortgages\/$/.test(pathname)) {
    fireTag('mortgages', tags);
}


/*else if (_url.indexOf("secure/payment/?productId=nyytq4zthbvwsoliojugwyzzmyzha3dt&campaignId=460X&offerId=freetrial3-website-monthly-ZG340")) {
    fireTag('nba_prem_subs', tags);
}*/
});
