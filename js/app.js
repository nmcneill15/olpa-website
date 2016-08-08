$(function() {

  var menuShowing = false;

  function load() {
    setTimeout(showPage, 2000);
  }

  load();

  function showPage() {
    $(".loader").fadeOut();
  }


  $("#menu").on("click", function() {
    if (!menuShowing) {
      $(".nav-link").show();
      menuShowing = true;
    } else {
      $(".nav-link").hide();
      menuShowing = false;
    }
  });

});
