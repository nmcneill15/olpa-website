$(function() {

  $("#balloon-figure").addClass("balloon-float");
  var sectionIds = ["#way-up", "#sometimes-requires", "#digging-deep", "#biz-leaders", "#dedicated-to", "#hard-questions", "#hard-data", "#real-solutions", "#hard-question-header", "#chart-div", "#why-content", "#bridge-content", "#only-bridge"];
  var prevSection;

  $(window).scroll(fadeInContent);

  $("#to-top-link").on("click", toTop);

  function fadeInContent() {
    var winTop = $(window).scrollTop();
    $.each(sectionIds, function(i, section) {
      sectionPosition = $(section).offset().top - 600;
      if (winTop > sectionPosition) {
        console.log("Fade In " + section);
        $(section).addClass("fade-in");
        if (prevSection === undefined) {
          prevSection = section;
        } else if (prevSection !== section){
          console.log("Fade Out " + prevSection);
          $(prevSection).addClass("fade-out").removeClass("fade-in");
          prevSection = section;
        }
      }
    });
  }

  function toTop() {
    var top = $("#balloon-section").offset().top;
    $("#to-top-balloon").animate({ marginTop: -200}, 3000, function() {
      $(this).css("margin-top", "40rem");
    });
    $("body").animate( { scrollTop: top }, 3000, "easeInOutQuint");
  }
});
