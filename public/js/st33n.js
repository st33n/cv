var $window = $(window);
var $imgs = $(".marginnote img");

var $navicons = $imgs.clone().addClass("navicon")
  .click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

$(document.body).prepend($navicons);

$window.on("scroll resize", function() {
  var delta = $window.width() / 8;
  $navicons
    .width($window.width() / 12)
    .each(function(i) {
      $navicons.eq(i).css({ top: i * delta + 15 });

      if ($window.scrollTop() + i * delta > $imgs.eq(i).offset().top) {
        $navicons.eq(i).addClass("vis");
      }
      else {
        $navicons.eq(i).removeClass("vis");
      }
    });
});

$window.trigger("resize");

