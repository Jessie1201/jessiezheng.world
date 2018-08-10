jQuery(document).ready(function($){
  var fadeStart = 100;
  // adjust fadeUntil value according to the number of projects
  var fadeUntil = 820;
  var fading = $(".scroll_fading");

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
