// function sendMessage (tabId, message, maxRetry, retryCount = 0) {
//   setTimeout(function() {
//     chrome.tabs.sendMessage(tabId, message, function(response) {
//       console.log(response)
//       if (typeof response == "undefined" && retryCount < maxRetry) {
//         sendMessage(tabId, message, maxRetry, retryCount+1);
//       }
//     });
//   }, 500);
// }

$(function() {
  $("#open_internal").on("click", function() {
    chrome.tabs.create({"url": "http://www.kmd.keio.ac.jp/ja/studenttop"}, function(tab) {
      let message = {
        page: "internal",
        pass: localStorage["internal-password"]
      };

      chrome.runtime.sendMessage({action: "login", tabId: tab.id, message: message});
    });
  });

  $("#open_elerning").on("click", function() {
    chrome.tabs.create({"url": "http://archiver.kmd.keio.ac.jp/cgi/e-student/login.cgi"}, function(tab) {
      let message = {
        page: "elearning",
        account: localStorage["elearning-account"],
        birth_y: localStorage["elearning-birth_y"],
        birth_m: localStorage["elearning-birth_m"],
        birth_d: localStorage["elearning-birth_d"],
        pass: localStorage["elearning-password"]
      };

      chrome.runtime.sendMessage({action: "login", tabId: tab.id, message: message});
    });
  });
});
