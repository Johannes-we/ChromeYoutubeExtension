let iconColor = "";

chrome.tabs.onActivated.addListener(function (info) {
  checkIfInsta();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    checkIfInsta();
  }
})

function checkIfInsta() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, function (tabs) {
    tabs.forEach(function (tab) {
      if (tab.active) {
        if (String(tab.url).includes("instagram")) {
          chrome.action.setIcon({ path: "green.png" });
          iconColor = "green";
          chrome.storage.sync.set({ iconColor });
          //Wird bei einem klick auf das Icon ausgeführt
          //chrome.scripting.executeScript({
           // target: {tabId: tab.id},
            //files: ['content.js']
          //});
          //--------------------------------------------
        } else {
          chrome.action.setIcon({ path: "red.png" });
          iconColor = "red";
          chrome.storage.sync.set({ iconColor });
        }
      }
    });
  });
}


