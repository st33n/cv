var $window = $(window);

var $h2s = $("h2");

var $navicons = $h2s.clone().addClass("navicon")
  .click(function() {
    var t = $(this).data("origin").top;
    $('html,body').animate({ scrollTop: t - 100 }, 'slow');
    return false;
  });

$window.on("resize", function() {
  $navicons.each(function(i) {
    var $ni = $navicons.eq(i);
    $ni.text($ni.text().substring(0,3));
    $ni.data("origin", $h2s.eq(i).offset());
  });
});

$window.on("scroll resize", function() {
  var delta = $window.width() / 10;
  $navicons
    .each(function(i) {
      $navicons.eq(i).css({ top: i * delta + 15 });

      if ($window.scrollTop() + i * delta + 15 >= $h2s.eq(i).offset().top) {
        $navicons.eq(i).addClass("vis");
      }
      else {
        $navicons.eq(i).removeClass("vis");
      }
    });
});

$(document.body).prepend($navicons);

$window.trigger("resize");

