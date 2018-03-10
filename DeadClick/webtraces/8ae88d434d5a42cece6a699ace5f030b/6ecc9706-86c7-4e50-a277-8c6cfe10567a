_satellite.pushAsyncScript(function(event, target, $variables){
  // facebook remarketing tag
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '514536265383751');
fbq('track', 'PageView');

// event specific tags
var events = typeof dataLayer != 'undefined' && dataLayer.event || [];
if (events.length > 0) {
  for (var i = 0; i < events.length; i++) {
    switch (events[i]) {
      case 'subscriptionConfirmation':
        fbq('track', 'Purchase', {value: '0.00', currency: 'GBP'});
        break;
      case 'registrationComplete':
        fbq('track', 'CompleteRegistration');
        break;
    }
  }
}

});
