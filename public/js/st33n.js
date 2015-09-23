var $window = $(window);
var $selfie = $("#me img");
var marginWidth = $(".marginnote").width();

var $minime = $selfie.clone().addClass("minime")
  .click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

$(document.body).prepend($minime);

$window.on("scroll resize", function() {

  if ($window.scrollTop() > 500) {
    $minime.addClass("vis");
    $minime.width($window.width() / 10);
  }
  else {
    $minime.removeClass("vis");
  }
});

$window.trigger("resize");

