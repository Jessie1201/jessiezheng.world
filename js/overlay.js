jQuery(document).ready(function($){
  var fadeStart = 100;
  var fadeUntil = 3500;
  var fading = $("#overlay-main");

  $(window).bind("scroll", function() {
    var offset = $(document).scrollTop();
    var opacity = 0;
    if (offset <= fadeStart) {
      opacity = 1;
    } else if (offset <= fadeUntil) {
      opacity = 1 - offset / fadeUntil;
    }
    fading.css("opacity", opacity);
  });
});
