// Initialize the audio element and control buttons
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentSong = document.getElementById('current-song');

// Song list (Add more songs if needed)
const songs = [
    { name: 'Song 1', file: 'song1.mp3' },
    { name: 'Song 2', file: 'song2.mp3' },
    { name: 'Song 3', file: 'song3.mp3' }
];

let songIndex = 0;

// Load a song
function loadSong(index) {
    audio.src = songs[index].file;
    currentSong.textContent = songs[index].name;
    audio.play();
}

// Play and Pause functionality
playBtn.addEventListener('click', () => audio.play());
pauseBtn.addEventListener('click', () => audio.pause());

// Next and Previous functionality
nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
});

prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
});

// Load the first song on page load
window.addEventListener('load', () => loadSong(songIndex));