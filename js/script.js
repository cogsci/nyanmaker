
// makes cat appear from the left
function appear() {
  $('.cat').velocity({translateX: '-1000px'}, {duration: 1, display: 'hidden'});
  $('.cat').velocity({translateX: '100px'}, {duration: 500, display: 'visible'});
}

$(function() {
  // audio
  var nyansong = document.getElementById('nyansong');

  appear();

  // controls audio playback
  Mousetrap.bind('a', function() {
    nyansong.play();
  });
  Mousetrap.bind('m', function() {
    nyansong.pause();
  });
  Mousetrap.bind('up', function() {
    nyansong.volume+=0.1;
  });
  Mousetrap.bind('down', function() {
    nyansong.volume-=0.1;
  });

  // displays number of trips cat has taken
  var trips = 0;
  function incrementTrips() {
    trips++;
    $('p').velocity({
      opacity: 1
    },{
      duration: 2000
    });
    $('.counter')[0].textContent = trips;
    console.log(trips);
  }

  $('html').click(function() {
    // makes cat fly away to the right then return from left
    $('.cat').velocity({
      // properties and values
      translateX: '5000px'
    }, {
      // options
      duration: 500,
      complete: function() {
        appear();
        incrementTrips();
      }
    });
  });
});
