$(document).ready(function() {
  $('html').click(function() {
    $('.content').animate({
      marginRight: "-50%",
      opacity: 0.25
    }, 500, function() {
      // Animation complete
    });
  });
});
