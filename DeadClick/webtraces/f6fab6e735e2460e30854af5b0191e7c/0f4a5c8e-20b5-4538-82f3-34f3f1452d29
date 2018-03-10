
params="";

function make_url_request(url) {
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send(null);
  } else if (window.ActiveXObject) {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    if (xmlhttp){
      xmlhttp.open("GET",url,false);
      xmlhttp.send();
    }
  } else {
    var t_img = new Image();
    t_img.src = url;
  }
}


function tracker() {
  if(params && params != "") {
    make_url_request("/tracker.php?"+params);
  }
}

function encode (string) {
  return escape(utf8_encode(string));
}

function decode (string) {
  return utf8_decode(unescape(string));
}

function utf8_encode (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }
    return utftext;
}

function utf8_decode (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        } else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }
    return string;
}

function get_referring_domain() {
    ru = document.referrer;
    if(ru) {
        return ru.match(/:\/\/(.[^/]+)/)[1];
    }
    return null;
}

function getParamFromPMCookie(name) {
    var cookieValue = getCookie("pmCookie");
    // this cookie is URL encoded by PHP, before parsing it needs cleaning.
    //cookieValue = cookieValue.replace(new RegExp("%3D", "gi"), "=").replace(new RegExp("%26", "gi"), "&");
    if(cookieValue) {
        cookieValue = decode(cookieValue);
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regex = new RegExp("[\\?&]"+name+"=([^&#]*)");
        var results = regex.exec(cookieValue);
        if( results == null ) {
            return "";
        } else {
            paramValue = results[1];
            // remove the + from the property name
            paramValue = paramValue.replace(new RegExp("\\\+", "g"), " ");
            return paramValue;
        }
    }
    return "";
}

// 1. reads pmCookie value
// 2. checks if param with this name already exists and returns if it does
// 3. if param does not exist, appens &name=value to the cookie value
// 4. url encodes cookie value
// 5. sets pmCookie with the new value
function putParamIntoPMCookie(name, value) {
    if(name && value) {
        var cookieValue = getCookie("pmCookie");
        // append to the existing cookie value
        if(cookieValue != null) {
            existingValue = getParamFromPMCookie(name);
            // do not change the existing cookie value
            if(existingValue != null) {
                cookieValue = decode(cookieValue);
                cookieValue = cookieValue + "&" + name + "=" + value;
                cookieValue = encode(cookieValue);
                setCookie("pmCookie", cookieValue, 3600);
            }
        }
        // set a brand new cooke value
        else {
            cookieValue = encode(name + "=" + value);
            setCookie("pmCookie", cookieValue, 3600);
        }
    }
}

function get_referring_url() {
    ru = document.referrer;
    if(ru) {
        rd_array = ru.match(/:\/\/(.[^/]+)/);
        if(rd_array && rd_array[1] == window.location.hostname) {
            // we are only looking for incoming referring domain
            return null;
        }
    }
    return ru;
}

// Determins if the traffic came from partner site
function is_partner_traffic() {
    referringDomain = get_referring_domain();
    documentDomain = document.domain;

    //referringDomain = 'latimes.com';
    //documentDomain = 'articles.latimes.com';

    if(referringDomain && documentDomain) {
        var dd_array = documentDomain.match(/articles.(.[^/]+)/);
        if(dd_array && dd_array[1] == referringDomain) {
            return true;
        }
    }
    return false;
}

function derive_traffic_provider() {

    propertyName = getParamFromPMCookie("pn");
    referringDomain = get_referring_domain();

    if(new RegExp(/\.google\.com/i).exec(referringDomain) != null) {return "g";}
    if(new RegExp(/\.yahoo\.com/i).exec(referringDomain) != null) {return "y";}
    if(new RegExp(/\.bing\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/\.live\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/\.msn\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/delicious\.com/i).exec(referringDomain) != null) {return "ds";}
    if(new RegExp(/digg\.com/i).exec(referringDomain) != null) {return "dg";}
    if(new RegExp(/\.aol\.com/i).exec(referringDomain) != null) {return "aol";}
    if(new RegExp(/\.ask\.com/i).exec(referringDomain) != null) {return "aj";}
    if(new RegExp(/wikipedia\.com/i).exec(referringDomain) != null) {return "wk";}
    if(new RegExp(/stumbleupon\.com/i).exec(referringDomain) != null) {return "st";}
    if(new RegExp(/facebook\.com/i).exec(referringDomain) != null) {return "fk";}
    if(new RegExp(/twitter\.com/i).exec(referringDomain) != null) {return "tw";}
    if(new RegExp(/blogspot\.com/i).exec(referringDomain) != null) {return "bg";}
    if(new RegExp(/reddit\.com/i).exec(referringDomain) != null) {return "rd";}
    if(new RegExp(/popurls\.com/i).exec(referringDomain) != null) {return "po";}

    if(is_partner_traffic()) {
        return "cs";
    }

    return "o";
}

function derive_traffic_type() {
    propertyName = getParamFromPMCookie("pn");
    referringDomain = get_referring_domain();

    if(new RegExp(/\.bing\.com/i).exec(referringDomain) != null) {return "n";}
    if(new RegExp(/\.live\.com/i).exec(referringDomain) != null) {return "n";}
    if(new RegExp(/\.msn\.com/i).exec(referringDomain) != null) {return "n";}
    if(new RegExp(/\.google\.com/i).exec(referringDomain) != null) {return "n";}
    if(new RegExp(/\.yahoo\.com/i).exec(referringDomain) != null) {return "n";}
    if(new RegExp(/delicious\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/digg\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/\.aol\.com/i).exec(referringDomain) != null) {return "n";}
    if(new RegExp(/\.ask\.com/i).exec(referringDomain) != null) {return "n";}
    if(new RegExp(/wikipedia\.com/i).exec(referringDomain) != null) {return "o";}
    if(new RegExp(/stumbleupon\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/facebook\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/twitter\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/blogspot\.com/i).exec(referringDomain) != null) {return "o";}
    if(new RegExp(/reddit\.com/i).exec(referringDomain) != null) {return "m";}
    if(new RegExp(/popurls\.com/i).exec(referringDomain) != null) {return "m";}

    if(is_partner_traffic()) {
        return "p";
    }

    return "o";
}

function getParamFromQueryString(queryString, key, default_) {
  if (default_==null) default_="";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(queryString);
  if(qs == null)
    return default_;
  else
    return qs[1];
}

function get_query() {
    // if not provided in the URL try to derive it from referring URL if it is available
    referringUrl = get_referring_url();
    if(referringUrl) {
        referringDomain = get_referring_domain();

        // yahoo uses 'p'
        if(new RegExp(/yahoo.com/).exec(referringDomain) != null) {
            return getParamFromQueryString(referringUrl, "p");
        }
        // aol uses 'query'
        else if(new RegExp(/aol.com/).exec(referringDomain) != null) {
            return getParamFromQueryString(referringUrl, "query");
        }
        // google/bing and most others use 'q'
        else {
            return getParamFromQueryString(referringUrl, "q");
        }
    }
}

function setCookie(name, value, seconds) {
    if (typeof(seconds) != "undefined") {
        var expires_date = new Date( new Date().getTime() + (seconds*1000) );
        var expires = ";expires=" + expires_date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name+"=" + value + expires + "; path=/";
}

function getCookie(name) {
    name = name + "=";
    var carray = document.cookie.split(';');
    for(var i=0;i < carray.length;i++) {
        var c = carray[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return null;
}

function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function guid() {
   return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}
