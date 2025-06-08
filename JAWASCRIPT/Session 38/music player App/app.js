const playbtn=document.querySelector('#play-btn');
const progress=document.querySelector('#progress');
const songlist=document.querySelector('#song-list');

let songs=[
    {
        name:'song1',
        id:1
    },
    {
        name:'song2',
        id:2
    },
    {
        name:'song3',
        id:3
    },
    {
        name:'song4',
        id:4
    },
]

// constructor
const audio=new Audio('./Music/song2.mp3')

// show songs in ul

for(let song of songs){
    const li=document.createElement('li')
    li.innerText=song.name;
    li.setAttribute('id',song.id);
    li.classList.add('song-item');// styling
    songlist.append(li);
}


// play btn click

playbtn.addEventListener('click', function(){
    audio.paused? audio.play() : audio.pause();
    if(playbtn.children[0].classList.contains('fa-circle-play')){
        playbtn.children[0].classList.remove('fa-circle-play');
        playbtn.children[0].classList.add('fa-circle-pause')
    }
    else{
        
        playbtn.children[0].classList.remove('fa-circle-pause');
        playbtn.children[0].classList.add('fa-circle-play')

    }
})

// current time ko dekho

audio.addEventListener('timeupdate', function(){
    const currentprogress=audio.currentTime*100/audio.duration;
    progress.value=currentprogress;
})

// input ko apnee hisab se age piche karo 

progress.addEventListener('change', function(){
    const updatedtime=audio.duration*progress.value/100;
    audio.currentTime=updatedtime;
})

// song selection 

songlist.addEventListener('click',function(e){
    const songid=e.target.getAttribute('id');
    audio.src=`./Music/song${songid}.mp3`;
    audio.currentTime=0;
    audio.play();
    playbtn.children[0].classList.remove('fa-circle-play');
    playbtn.children[0].classList.add('fa-circle-pause');
})



let currentSongIndex = 1;
const updateSongByIndex = (index) => {
    const song = songs[index];
    audio.src = `./Music/song${song.id}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playbtn.children[0].classList.remove('fa-circle-play');
    playbtn.children[0].classList.add('fa-circle-pause');
};


// song backward..
let backward=document.querySelector('#backward');
backward.addEventListener('click', function(){
    currentSongIndex=(currentSongIndex-1 + songs.length)%songs.length;
    updateSongByIndex(currentSongIndex);
});


// song forward
let forward=document.querySelector('#forward');
forward.addEventListener('click', function(){
    currentSongIndex=(currentSongIndex+1)%songs.length;
    updateSongByIndex(currentSongIndex);
})




