var incognito;

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        chrome.cookies.getAll({ url: url }, function(cookies) {
            cookies.forEach(function(cookie) {
                chrome.cookies.remove({
                    url: url,
                    name: cookie.name
                });
            });
        });
    });
});
