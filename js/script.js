$(document).ready(function() {
  $('.content').velocity({
    translateX: "1050px"
  }, 500);
  $('html').click(function() {
    $('.content').velocity({
      translateX: "5000px"
    }, 500, function() {
      // Animation complete
    });
  });
});
