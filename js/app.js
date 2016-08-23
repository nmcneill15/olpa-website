$(function() {

  var menuShowing = false;

  $(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 800) {
      $(".nav-link").show();
      menuShowing = false;
    }
  });


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
