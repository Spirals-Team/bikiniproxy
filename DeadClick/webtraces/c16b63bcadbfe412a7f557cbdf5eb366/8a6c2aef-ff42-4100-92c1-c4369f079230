// add a back_url to a#myncbi's href
var myNCBILinks = document.querySelectorAll('#sign_in, #sign_out');
for(var i=0; i< myNCBILinks.length; i++){
    myNCBILinks[i].href = myNCBILinks[i].href + '?back_url=' + document.location.href;
}

var c = getCookie('WebCubbyUser');

c = decodeURIComponent(decodeURIComponent(c));
lre = /.*logged-in\=(\w*);.*/;
ure = /.*my-name\=([\w|\-|\.|\ |\@|\+]*);.*/;
plus = /\+/gi;
if (c) {
    l = lre.exec(c);
    if (l && l[1] && l[1] === 'true') {
        u = ure.exec(c);
        if (u && u[1]) {
            var myncbi_username = document.getElementById('myncbiusername');
            var uname = document.getElementById('mnu');

            if (uname) {
                if (typeof uname != 'undefined') {
                    uname.appendChild(document.createTextNode(u[1].replace(plus, ' ')));
                    myncbi_username.style.display = 'inline';

                    var signin = document.getElementById('sign_in');
                    signin.style.display = 'none';

                    var signout = document.getElementById('sign_out');
                    signout.style.display = 'inline';

                    var myncbi = document.getElementById('myncbi');
                    myncbi.style.display = 'inline';
                }
            }
        }
    }
}


function getCookie(f) {
    var e;
    if (window.sessionStorage) {
        try {
            e = sessionStorage.getItem(f) || ''
        } catch (g) {
            e = ''
        }
        if (e.length > 0) {
            return e
        }
    }
    if (document.cookie.length > 0) {
        e = document.cookie.indexOf(f + '=');
        if (e !== -1) {
            e = e + f.length + 1;
            f = document.cookie.indexOf(';', e);
            if (f === -1) {
                f = document.cookie.length
            }
            return unescape(document.cookie.substring(e, f))
        }
    }
    return ''
}
