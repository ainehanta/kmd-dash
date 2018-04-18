let inputNames = [
  "internal-password",
  "elearning-account",
  "elearning-birth_y",
  "elearning-birth_m",
  "elearning-birth_d",
  "elearning-password"
]

$(function () {
  $("#save_button").on("click", function () {
    inputNames.forEach((name) => {
      localStorage[name] = $(`input[name="${name}"]`).val();
    });
  });

  inputNames.forEach((name) => {
    if (localStorage[name]) {
      $(`input[name="${name}"]`).val(localStorage[name]);
    }
    localStorage[name] = $(`input[name="${name}"]`).val();
  });
});
