var UNRULY = UNRULY || {};
UNRULY.liveramp = (function () {
    function sendUnrulyUserId(callback) {
        var unrulyUserId = UNRULY.cookies.unrulyUserId();

        if (unrulyUserId) {
            var pixel = new Image();
            pixel.src = 'https://idsync.rlcdn.com/453179.gif?partner_uid=' + unrulyUserId;
            pixel.onload = function onPixelLoad() {
                if (callback) callback(undefined, pixel);
            };
            return;
        }

        if (callback) callback(new Error('unrulyUserId not set'));
    }

    return {
        sendUnrulyUserId: sendUnrulyUserId
    }
})();
