$(document).ready(function(){

    const songs = [
        { name: 'song1', id: 1 },
        { name: 'song2', id: 2 },
        { name: 'song3', id: 3 },
        { name: 'song4', id: 4 }
    ];

    const audio = new Audio('./Music/song2.mp3');
    let currentSongIndex = 1;

    // Show songs in ul
    for(let song of songs){
        const li = $('<li></li>').text(song.name).attr('id', song.id).addClass('song-item');
        $('#song-list').append(li);
    }

    // Play button click
    $('#play-btn').on('click', function(){
        if(audio.paused){
            audio.play();
        } else {
            audio.pause();
        }

        const icon = $(this).children('i');
        if(icon.hasClass('fa-circle-play')){
            icon.removeClass('fa-circle-play').addClass('fa-circle-pause');
        } else {
            icon.removeClass('fa-circle-pause').addClass('fa-circle-play');
        }
    });

    // Time update - progress bar
    $(audio).on('timeupdate', function(){
        const currentProgress = (audio.currentTime * 100) / audio.duration;
        $('#progress').val(currentProgress);
    });

    // Seek progress bar
    $('#progress').on('change', function(){
        const updatedTime = (audio.duration * $(this).val()) / 100;
        audio.currentTime = updatedTime;
    });

    // Song list click
    $('#song-list').on('click', 'li', function(){
        const songId = $(this).attr('id');
        audio.src = `./Music/song${songId}.mp3`;
        audio.currentTime = 0;
        audio.play();
        $('#play-btn i').removeClass('fa-circle-play').addClass('fa-circle-pause');

        currentSongIndex = songs.findIndex(song => song.id === parseInt(songId));
    });

    // Update song by index
    const updateSongByIndex = (index) => {
        const song = songs[index];
        audio.src = `./Music/song${song.id}.mp3`;
        audio.currentTime = 0;
        audio.play();
        $('#play-btn i').removeClass('fa-circle-play').addClass('fa-circle-pause');
    };

    // Backward
    $('#backward').on('click', function(){
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updateSongByIndex(currentSongIndex);
    });

    // Forward
    $('#forward').on('click', function(){
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updateSongByIndex(currentSongIndex);
    });

});
