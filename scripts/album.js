// Example Album
var albumPicasso = {
    name: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { name: 'Blue', length: '4:26' },
        { name: 'Green', length: '3:14' },
        { name: 'Red', length: '5:01' },
        { name: 'Pink', length: '3:21'},
        { name: 'Magenta', length: '2:15'}
    ]
};

// Another Example Album
var albumMarconi = {
    name: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { name: 'Hello, Operator?', length: '1:01' },
        { name: 'Ring, ring, ring', length: '5:01' },
        { name: 'Fits in your pocket', length: '3:21'},
        { name: 'Can you hear me now?', length: '3:14' },
        { name: 'Wrong phone number', length: '2:15'}
    ]
};

var albumNirvana = {
    name: 'Nevermind',
    artist: 'Nirvana',
    label: 'DCG',
    year: '1991',
    albumArtUrl: 'assets/images/album_covers/22.png',
    genre: 'grunge',
    songs: [
        { name: 'Smells Like Teen Spirit', length: '5:01' },
        { name: 'In Bloom', length: '4:14' },
        { name: 'Come as You Are', length: '3:03'},
        { name: 'Breed', length: '3:14' },
        { name: 'Lithium', length: '4:17' },
        { name: 'Polly', length: '2:57' },
        { name: 'Territorial Pissings', length: '2:22'},
        { name: 'Drain You', length: '3:43' },
        { name: 'Lounge Act', length: '2:36' },
        { name: 'Stay Away', length: '3:32' },
        { name: 'On a Plain', length: '3:16'},
        { name: 'Something in the Way', length: '3:46' },
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
    + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

     var $row = $(template);

     var clickHandler = function() {
       var songNumber = $(this).attr('data-song-number');

	      if (currentlyPlayingSong !== null) {
		        // Revert to song number for currently playing song because user started playing new song.
		          var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
		            currentlyPlayingCell.html(currentlyPlayingSong);
	             }
	      if (currentlyPlayingSong !== songNumber) {
		        // Switch from Play -> Pause button to indicate new song is playing.
		          $(this).html(pauseButtonTemplate);
		          currentlyPlayingSong = songNumber;
	     } else if (currentlyPlayingSong === songNumber) {
		       // Switch from Pause -> Play button to pause currently playing song.
		         $(this).html(playButtonTemplate);
		          currentlyPlayingSong = null;
	           }
           };
   };


     var onHover = function(event) {
         // Placeholder for function logic
     };
     var offHover = function(event) {
         // Placeholder for function logic
     };

     $row.find('.song-item-number').click(clickHandler);

     $row.hover(onHover, offHover);

     return $row;
};

  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');

var setCurrentAlbum = function(album) {
  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);

     // #3
     $albumSongList.empty();

     // #4
     for (i = 0; i < album.songs.length; i++) {
       var $newRow = createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
      $albumSongList.append($newRow);
     }
 };



// Album button templates
 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 var currentlyPlayingSong = null;


$(document).ready(function() {
     setCurrentAlbum(albumPicasso);

});
     var albums = [albumPicasso, albumMarconi, albumNirvana];
     var index = 1;
     albumImage.addEventListener("click", function(event) {
       setCurrentAlbum(albums[index]);
       index++;
       if (index == albums.length) {
         index= 0;
       }
     });


var clickHandler = function(targetElement){
  var songItem = getSongItem(targetElement);

  if (currentlyPlayingSong === null) {
    songItem.innerHTML = pauseButtonTemplate;
    currentlyPlayingSong = songItem.getAttribute('data-song-number');
  } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
  songItem.innerHTML = playButtonTemplate;
  currentlyPlayingSong = null;
} else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
     var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
     currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
     songItem.innerHTML = pauseButtonTemplate;
     currentlyPlayingSong = songItem.getAttribute('data-song-number');
 }
}
 };
