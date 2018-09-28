/**
 * @file Main JS file for the theme.
 */
(function ($, Drupal) {
  Drupal.behaviors.stickNav = {
    attach: function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 104) {
          $(".site-navigation").addClass("sticky");
          $("#main-wrapper").addClass("sticky");
        }
        else {
          $(".site-navigation").removeClass("sticky");
          $("#main-wrapper").removeClass("sticky");
        }
      });
    }
  }
})(jQuery, Drupal);