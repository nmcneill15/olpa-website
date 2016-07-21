$(function() {

  $(window).on("load", function() {

    $("#balloon-figure").animate( {top: "-=80rem"}, 4000);
    $(".hidden").css("opacity", 0);

    var sectionIds = ["#way-up", "#sometimes-requires", "#digging-deep", "#biz-leaders", "#three-points", "#chart-div", "#bridge-content", "#only-bridge"];
    $(window).scroll(fadeInContent);

    $("#to-top-link").on("click", toTop);


    function fadeInContent() {
      var winTop = $(window).scrollTop();
      $.each(sectionIds, function(i, section) {
        var sectionTop = $(section).offset().top;
        var previousSection = sectionIds[sectionIds.indexOf(section) - 1];
        var showing = $(section).hasClass("showing");
        if (winTop > sectionTop - 700 && !showing) {
          // if (previousSection !== -1) {
          //   $(previousSection).animate( { top: "-=100px"}, 800);
          // }
          // if (section === "#bridge") {
          //   $(section).addClass("showing").animate( { opacity: 1, left: "-="})
          // }
          $(section).addClass("showing").animate( { opacity: 1, top: "-=10rem"}, 800);
        }
      });
    }

    function toTop() {
      var top = $("#balloon-section").offset().top;
      $("#to-top-balloon").animate({ marginTop: -200}, 3000, function() {
        $(this).css("margin-top", "40rem");
      });
      $("#balloon-figure").css("opacity", 0);
      $("body").animate( { scrollTop: top }, 3000, "easeInOutQuint", function() {
        location.reload();
      });
    }

  });





});
