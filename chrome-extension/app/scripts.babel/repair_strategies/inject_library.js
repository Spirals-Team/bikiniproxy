var supportedLibraries = {
    "jquery" : chrome.extension.getURL('scripts/jquery-1.12.4.min.js'),
    "$" :  chrome.extension.getURL('scripts/jquery-1.12.4.min.js'),
    "angular" :  chrome.extension.getURL('scripts/angular.js'),
    "_" :  chrome.extension.getURL('scripts/underscore.js'),
    "require":  chrome.extension.getURL('scripts/require.js')
}


chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
    if (data.type == 'load') {
        var actions = []
        var unique_actions = []
        if (knownErrors[sender.tab.id] == null) {
            return true;
        }
        for (var error of knownErrors[sender.tab.id]) {
            for (var lib in supportedLibraries) {
                if (error.message.toLowerCase().indexOf(lib) != -1 && 
                error.message.indexOf('.') == -1) {
                    var id = 'inject_library_'+ supportedLibraries[lib]
                    if (unique_actions.indexOf(id) != -1) {
                        continue;
                    }
                    error.handled = true;
                    unique_actions.push(id)
                    repairActions[sender.tab.id].push('Inject Library')
                    actions.push({
                        type: 'inject_library',
                        url:  supportedLibraries[lib]
                    })
                    break;
                }
            }
        }

        sendResponse({
            type: 'actions',
            actions: actions
        }, function() {
        });
        return true
    } else if (data.type == 'load') {

    }
})