let content = document.getElementById("content");

chrome.storage.sync.get("iconColor", ({ iconColor }) => {
    if (iconColor == "red") {
        content.innerHTML =
            "<h3>Sie müssen Instagram in einem Chrome Tab öffnen und auswählen!</h3>" +
            "<h4>Die Erweiterung funktioniert, sobald das grüne Icon erscheint.</h4>" +
            "<h4>Sie befinden sich auf Instagram und das Icon ist rot? Drücken Sie bitte:</h4>" +
            "<button id=\"testInstaButton\">Check Page</button>" +
            "<a id=\"analysisButton\" href=\"options.html\" target=\"_blank\">Zur Auswertung</a>";
    } else {
        content.innerHTML =
            "<h2>Instergram erkannt!</h2>";
    }
});

document.getElementById("testInstaButton").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});