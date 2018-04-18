chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "login") {
      sendMessage(request.tabId, request.message, 10);
    }
  }
);

function sendMessage (tabId, message, maxRetry, retryCount = 0) {
  setTimeout(function() {
    chrome.tabs.sendMessage(tabId, message, function(response) {
      console.log(response)
      if (typeof response == "undefined" && retryCount < maxRetry) {
        sendMessage(tabId, message, maxRetry, retryCount+1);
      }
    });
  }, 500);
}
