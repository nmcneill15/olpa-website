$(function() {
  $("#balloon-figure").addClass("balloon-float");
  var sectionIds = ["#way-up", "#sometimes-requires", "#digging-deep", "#biz-leaders", "#dedicated-to", "#hard-questions", "#hard-data", "#real-solutions", "#hard-question-header", "#chart-div", "#why-content", "#bridge-content", "#only-bridge"];
  $(window).scroll(fadeInContent);

  function fadeInContent() {
    var winTop = $(window).scrollTop();
    $.each(sectionIds, function(i, section) {
      sectionPosition = $(section).offset().top - 600;
      console.log(section);
      console.log("sectionPosition " + sectionPosition);
      console.log("winTop " + winTop);
      if (winTop > sectionPosition) {
        console.log("made it");
        $(section).addClass("fade-in");
      }
    });
  }
});
