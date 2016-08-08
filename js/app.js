$(function() {

  function load() {
    setTimeout(showPage, 2000);
  }

  load();

  function showPage() {
    $(".loader").fadeOut();
  }

});
