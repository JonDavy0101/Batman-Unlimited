$(document).ready(function() {
    console.clear();

    var $results = $('<div class="" />').appendTo("#movies");

    function fetch(term){
      $.ajax({
          url: 'https://itunes.apple.com/search',
          crossDomain: true,
          dataType: 'jsonp',
          data: {
            term: term,
            media: 'movie',
            entity: 'movie',
            limit: '6'
          },
          method: 'GET',
          success: function(data){
            console.log(data);

            $results.empty();

            $.each(data.results,function(i,result){

              $results[0].insertAdjacentHTML('beforeend','<a class="result" href="' + result.trackViewUrl + '" target="_blank"><div class="col-sm-4 media-row"><img class="music-image" src="' + result.artworkUrl100 + '"><p>Movie: ' + result.trackName + '</p><p>Price: $' + result.collectionHdPrice + '</p></div></a>');
            });
          },
          error: function(e){
            console.log(e);
          }
        }); 
    }

    fetch('Batman');

});