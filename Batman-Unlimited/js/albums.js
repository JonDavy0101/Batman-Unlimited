$(document).ready(function() {
    console.clear();

    var $results = $('<div class="" />').appendTo("#albums");

    function fetch(term){
      $.ajax({
          url: 'https://itunes.apple.com/search',
          crossDomain: true,
          dataType: 'jsonp',
          data: {
            term: term,
            media: 'music',
            entity: 'album',
            attribute: 'albumTerm',
            limit: '6'
          },
          method: 'GET',
          success: function(data){
            console.log(data);

            $results.empty();

            $.each(data.results,function(i,result){

              $results[0].insertAdjacentHTML('beforeend','<a class="result" href="' + result.collectionViewUrl + '" target="_blank"><div class="col-sm-4 media-row"><img class="music-image" src="' + result.artworkUrl100 + '"><p>Album: ' + result.collectionName + '</p><p>Price: $' + result.collectionPrice + '</p></div></a>');
            });
          },
          error: function(e){
            console.log(e);
          }
        }); 
    }

    fetch('batman');
    //fetch('The Dark Knight');
    //fetch('Batman Begins');

});