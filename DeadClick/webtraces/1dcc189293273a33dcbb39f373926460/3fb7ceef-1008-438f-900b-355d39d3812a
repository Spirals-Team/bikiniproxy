var UNRULY = UNRULY || {};
UNRULY.cookies = (function (document) {
    function _createCookie(name, value, days) {
        var expires = '',
            date;

        if (days) {
            date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        }

        document.cookie = name + '=' + value + expires + '; path=/';
    }

    function _readCookie(name) {
        var nameEquals = name + '=';
        var parts = document.cookie.split(';');
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            while (part.charAt(0) === ' ') {
                part = part.substring(1, part.length);
            }
            if (part.indexOf(nameEquals) === 0) {
                return part.substring(nameEquals.length, part.length);
            }
        }
        return null;
    }

    function _eraseCookie(name) {
        _createCookie(name, '', -1);
    }

    function unrulyUserId() {
        return (_readCookie('unruly_u') || '').replace('uid=', '') || null;
    }

    return {
        unrulyUserId: unrulyUserId,

        _createCookie: _createCookie,
        _readCookie: _readCookie,
        _eraseCookie: _eraseCookie
    };
})(window.document);