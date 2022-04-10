chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      if(String(tab.url).includes("youtube")) {
        chrome.scripting.executeScript({
          files: ['contentScript.js'],
          target: { tabId: tab.id }
        })
      }
    })
  })
})
