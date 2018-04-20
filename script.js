
$(function() {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      sendResponse({message: "received"});

      if (request.page == "internal") {
        if ($('input[name="pass"]')[0]) {
          $('input[name="pass"]').val(request.pass);
          $('input[type="submit"]').trigger("click");
        }
      } else if (request.page == "elearning") {
        $('input[name="account"]').val(request.account);
        $('input[name="birth_y"]').val(request.birth_y);
        $('input[name="birth_m"]').val(request.birth_m);
        $('input[name="birth_d"]').val(request.birth_d);
        $('input[name="pass"]').val(request.pass);
        $('input[type="SUBMIT"]').trigger("click");
      }
    }
  );
});


// function existKeyInCookie(key) {
//   if (document.cookie.split(';').filter((item) => {return item.includes(key + '=') }).length) {
//     return true
//   }
//   return false
// }
