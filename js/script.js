// iMessage visibility toggle
$(document).ready(function() {
  $('.imessage').each(function(index, el) {
    setTimeout(function () {
      $(el).toggleClass('visible');
    }, index * 2000);
  });
});


// Smooth scrolling to page anchors
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 300, "swing");
        return false;
      }
    }
  });
});