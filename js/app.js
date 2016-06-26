$(function() {
  $("#balloon-figure").addClass("balloon-float");
  var sectionIds = ["#way-up", "#sometimes-requires", "#digging-deep", "#biz-leaders", "#hard-questions", "#hard-data", "#real-solutions"];
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
        $(section).attr("class", "fade-in");
      }
    });
  }
});
