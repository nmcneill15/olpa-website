$(function() {

  var menuShowing = false;
  var bridgeBalloonIn = false;

  $(window).on("resize", function() {
    console.log("width: " + $(window).width() + " height: " + $(window).height());
  });

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
    var viewportWidth = $(window).width();
    var standard = 1024 / viewportWidth;
    var winTop = $(window).scrollTop() + (Math.floor(standard) * 200);
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
