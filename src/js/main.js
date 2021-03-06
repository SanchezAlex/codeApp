$(document).ready(function() {
  $(".nav-button").click(function() {
    if (($(this).toggleClass("open"), $("#nav").hasClass("active")))
      $("#nav").stop().animate({ height: 0 }, 300), setTimeout(
        function() {
          $("#nav").removeClass("active").removeAttr("style");
        },
        300
      );
    else {
      var t = $("active").stop().height($(window).height() - 124);
      $("#nav").height(0).animate({ height: t }, 250), setTimeout(
        function() {
          $("#nav").addClass("active").removeAttr("style");
        },
        250
      );
    }
  }), $(
    ".grid-intro"
  ).owlCarousel({ items: 1, animateOut: "slideOutDown", animateIn: "flipInX", smartSpeed: 450, loop: !0, center: !0, nav: !0, navText: [ "<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>" ] });
});
