$(function() {

  $("#balloon-figure").addClass("balloon-float");

  var invisible = [".tree-spacer"];
  $.each(invisible, function(i, element) {
    $(element).hide();
  });

  var sectionIds = ["#way-up", "#sometimes-requires", "#digging-deep", "#biz-leaders", "#three-points", "#chart-div", "#bridge-content"];
  $(window).scroll(fadeInContent);

  $("#to-top-link").on("click", toTop);

  // function fadeInContent() {
  //   var winTop = $(window).scrollTop();
  //   $.each(sectionIds, function(i, section) {
  //     var sectionTop = $(section).offset().top;
  //     var sectionBottom = sectionTop + $(section).outerHeight();
  //     var prevSectionIndex = sectionIds.indexOf(section) - 1;
  //
  //     if (winTop > sectionTop - 500 && winTop < sectionTop - 450) {
  //       $(section).addClass("showing");
  //       if (prevSectionIndex !== -1) {
  //         $(sectionIds[prevSectionIndex]).removeClass("showing");
  //       }
  //     }
  //   });
  // }

  function toTop() {
    var top = $("#balloon-section").offset().top;
    $("#to-top-balloon").animate({ marginTop: -200}, 3000, function() {
      $(this).css("margin-top", "40rem");
    });
    $("body").animate( { scrollTop: top }, 3000, "easeInOutQuint");
  }

});
