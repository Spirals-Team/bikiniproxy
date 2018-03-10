var UNRULY = UNRULY || {};
UNRULY.stringify = function (obj) {

    var type = typeof (obj);
    if (type != "object" || obj === null) {

        if (type == "string") obj = '"'+obj+'"';
        return String(obj);

    } else {

        var json = [];
        var isArray = (obj && obj.constructor == Array);

        for (var property in obj) {
            var value = obj[property];
            var valueType = typeof(value);

            if (valueType == "string") value = '"'+value+'"';
            else if (valueType == "object" && value !== null) value = JSON.stringify(value);

            json.push((isArray ? "" : '"' + property + '":') + String(value));
        }

        return (isArray ? "[" : "{") + String(json) + (isArray ? "]" : "}");
    }
};

var JSON = JSON || {};
JSON.stringify = JSON.stringify || UNRULY.stringify;
