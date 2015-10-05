function appear() {
  $('.content').velocity({translateX: '-1000px'}, {duration: 1, display: 'hidden'});
  $('.content').velocity({translateX: '100px'}, {duration: 500, display: 'visible'});
}
$(function() {
  appear();
  $('html').click(function() {
    $('.content').velocity({
      // properties and values
      translateX: '5000px'
    }, {
      // options
      duration: 500,
      complete: function() {
        appear();
      }
    });
  });
});
