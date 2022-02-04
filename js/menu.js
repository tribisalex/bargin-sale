$(document).ready(function() {
  $('.menu-burger__documentation').click(function() {
    $('.menu-burger__documentation').toggleClass('open-documentation');
    $('.documentation-ul').toggleClass('open-documentation');
    $('body').toggleClass('fixed-page');
  });
});
