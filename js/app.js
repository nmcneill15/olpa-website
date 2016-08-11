$(function() {

  var menuShowing = false;
  var bridgeBalloonIn = false;

  function load() {
    $(".load-clouds").fadeIn();
    setTimeout(showPage, 1500);
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


  $(window).on("scroll", function() {
    var winTop = $(window).scrollTop();
    var trigger = $("#bridge-content").offset().top;
    if (winTop > trigger && !bridgeBalloonIn) {
      showBalloon();
      bridgeBalloonIn = true;
    }
  });



  function showBalloon() {
    $(".real-solutions-section").animate( {"margin-top": 0}, 2000, "easeOutQuint");
  }

});
