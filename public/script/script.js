$(".add").on("click", function () {
  const newDiv = $('<div><input class="tick" type="checkbox"/><script></script></div>').addClass(
    "listElements"
  );
  newDiv.append($("<span></span>").text($(".newItem").val()));
  $(".table").prepend(newDiv);
  $(".newItem").val("");

  const myCheckbox = $(".tick");

  myCheckbox.on("change", function () {
    if (myCheckbox.is(":checked")) {
      p.text("helllllllllooooooo");
    }
  });
});
$(document).ready(function() {
  $('.tick').change(function() {
      if ($(this).is(':checked')) {
          $('span').css('text-decoration', 'line-through');
      } else {
          $('span').css('text-decoration', 'none');
      }
  });
});
