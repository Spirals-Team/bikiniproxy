_satellite.pushAsyncScript(function(event, target, $variables){
  window.addEventListener('message', function(e) {
    try {
        var message = JSON.parse(e.data);
        if (message.name && /^investment\-|^inheritance\-|^tmg\-/i.test(message.name)) {
            var name = message.name.toLowerCase();
            if (/^tmg-spark-/i.test(name) && message.data && message.data.eVar) {
                switch (name) {
                    case 'tmg-spark-interactive':
                        s.eVar88 = message.data.eVar;
                        s.events = 'event94';
                        s.linkTrackEvents = 'event94';
                        s.linkTrackVars = 'events,eVar88,' + _satellite.getVar('TMG linkTrackVars');
                        break;
                    case 'tmg-spark-timerpoint':
                        s.eVar105 = message.data.eVar;
                        s.events = 'event211';
                        s.linkTrackEvents = 'event211';
                        s.linkTrackVars = 'events,eVar105,' + _satellite.getVar('TMG linkTrackVars');
                        break;
                    case 'tmg-spark-timerpageload':
                        s.eVar106 = message.data.eVar;
                        s.events = 'event212';
                        s.linkTrackEvents = 'event212';
                        s.linkTrackVars = 'events,eVar106,' + _satellite.getVar('TMG linkTrackVars');
                        break;
                    case 'tmg-spark-wayin':
                        s.eVar79 = message.data.eVar;
                        s.eVar105 = '';
                        s.eVar116 = '';
                        s.events = 'event85';
                        s.linkTrackEvents = 'event85';
                        s.linkTrackVars = 'events,eVar79,' + _satellite.getVar('TMG linkTrackVars');
                        break;
                }
                s.tl(true, 'o', 'Form complete');
            } else {
                s.eVar37 = name;
                s.events = 'event10';
                if (message.data) {
                    if (message.data.postCode) {
                        s.eVar55 = message.data.postCode;
                        s.linkTrackVars = 'events,eVar37,eVar55,' + _satellite.getVar('TMG linkTrackVars');
                    } else if (message.data.location) {
                        s.eVar107 = message.data.location;
                        s.linkTrackVars = 'events,eVar37,eVar107,' + _satellite.getVar('TMG linkTrackVars');
                    } else if (message.data.error) {
                        s.eVar99 = message.data.error;
                        s.linkTrackVars = 'events,eVar37,eVar99,' + _satellite.getVar('TMG linkTrackVars');
                    } else if (message.data.transactionID) {
                        s.transactionID = message.data.transactionID;
                        s.linkTrackVars = 'events,eVar37,transactionID,' + _satellite.getVar('TMG linkTrackVars');
                    }
                } else {
                    s.linkTrackVars = 'events,eVar37,' + _satellite.getVar('TMG linkTrackVars');
                }
                s.linkTrackEvents = 'event10';
                s.tl(true, 'o', 'Form complete');
            }
        }
    } catch (error) {}
});

});
