$(function() {

  // $("body").on("load", function() {
  //   load();
  // });
  //
  // var loading;
  //
  function load() {
    setTimeout(showPage, 2000);
  }

  load();

  function showPage() {
    $(".loader").hide();
  }

});
