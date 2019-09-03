$(document).ready(function() {
    console.clear();

    var $results = $('<div class="" />').appendTo("#comics");

    function fetch(term){
      $.ajax({
          url: 'https://itunes.apple.com/search',
          crossDomain: true,
          dataType: 'jsonp',
          data: {
            term: term,
            media: 'ebook',
            limit: '6'
          },
          method: 'GET',
          success: function(data){
            console.log(data);

            $results.empty();

            $.each(data.results,function(i,result){

              $results[0].insertAdjacentHTML('beforeend','<a class="" href="' + result.trackViewUrl + '" target="_blank"><div class="col-sm-4 media-row"><img class="music-image" src="' + result.artworkUrl100 + '"><p>Comic: ' + result.trackCensoredName + '</p><p>Price: $' + result.price + '</p></div></a>');
            });
          },
          error: function(e){
            console.log(e);
          }
        }); 
    }

    fetch('Batman the new 52');

});