chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (tab.url && tab.url.includes("glassdoor.com")) {
      const company = tab.url.split("Working-at-")[1];
      chrome.tabs.sendMessage(tabId, {
        type: "new",
        company,
      });
    }
  }
});
