$(document).ready(function() {
  console.clear();

  var $input = $('<input type="search" name="search" placeholder="Write here..">').appendTo("#search-container"),
      $addResults = $('<input type="submit" class= value="Submit">').appendTo("#search-container"),
      $results = $('<div class="results" />').appendTo("#search-results");

  $input.val('');
  $addResults;

  function albumSearch(term){
    $.ajax({
        url: 'https://itunes.apple.com/search',
        crossDomain: true,
        dataType: 'jsonp',
        data: {
          term: term,
          media: 'all',
          entity: 'album',
          limit: '50'
        },
        method: 'GET',
        success: function(data){
          console.log(data);

          $results.empty();

          $.each(data.results,function(i,result){

            $results[0].insertAdjacentHTML('beforeend','<a class="result col-sm-4" href="' + result.collectionViewUrl + '" target="_blank"><div class="media-row"><img class="music-image" src="' + result.artworkUrl100 + '"><p>Album: ' + result.collectionName + '</p><p>Price: $' + result.collectionPrice + '</p></div></a>');
          });
        },
        error: function(e){
          console.log(e);
        }
      }); 
  }

  function comicSearch(term){
    $.ajax({
        url: 'https://itunes.apple.com/search',
        crossDomain: true,
        dataType: 'jsonp',
        data: {
          term: term,
          media: 'ebook',
          entity: 'ebook',
          limit: '50'
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

  function movieSearch(term){
    $.ajax({
        url: 'https://itunes.apple.com/search',
        crossDomain: true,
        dataType: 'jsonp',
        data: {
          term: term,
          media: 'all',
          entity: 'movie',
          limit: '50'
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

  $input.on('keypress',function(){
    if ( !event.keyCode || event.keyCode == 13 ) {
      /*target = $('#select-media').val()
      if (target == "music/soundtracks") {
        albumSearch($input.val());
      } else if (target == "books/comics") {
        comicSearch($input.val());
      } else if (target == "movies") {
        movieSearch($input.val());
      } else {
        return false;
      }*/
      $('#addButton').click();
    }
  });

  $('#addButton').click(function(){
    if ( !event.keyCode || event.keyCode == 13 ) {
      target = $('#select-media').val()
      if (target == "music/soundtracks") {
        albumSearch($input.val());
      } else if (target == "books/comics") {
        comicSearch($input.val());
      } else if (target == "movies") {
        movieSearch($input.val());
      } else {
        return false;
      }
    }
  });

});