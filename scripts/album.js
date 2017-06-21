// Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

// Another Example Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

// 3rd Album
var albumNirvana
  title: 'Nevermind',
  artist: 'Nirvana',
  label: 'DGC',
  year: '1991',
  genre: 'grunge',
  rating: '4.5/5'
  albumArtURL: 'assets/images/album_covers/22.png',
  { title: 'Smells Like Teen Spirit', duration: '5:01' },
  { title: 'In Bloom', duration: '4:14' },
  { title: 'Come as You Are', duration: '3:39' },
  { title: 'Breed', duration: '3:03'},
  { title: 'Lithium', duration: '4:17' },
  { title: 'Polly', duration: '2:57'}
  { title: 'Territorial Pissings', duration: '2:22' },
  { title: 'Drain You', duration: '3:43' },
  { title: 'Lounge Act', duration: '3:36'},
  { title: 'Stay Away', duration: '2:32' },
  { title: 'On a Plain', duration: '3:16'}
  { title: 'Something in the Way', duration: '3:46'}
]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
       '<tr class="album-view-song-item">'
     + '  <td class="song-item-number">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;

    return template;
};

var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);

     // #3
     albumSongList.innerHTML = '';

     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };

 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     document.getElementsByClassName('album-cover-art').addEventListener("click", function (){
       for (i=0; i< album.songs.length; i++){

       }
     })

 };
