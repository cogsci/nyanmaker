$(document).ready(function() {
  $('html').click(function() {
    $('.content').velocity({
      translateX: "2000px"
    }, 500, function() {
      // Animation complete
    });
  });
});
