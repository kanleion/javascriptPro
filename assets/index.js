import mediaPlayer from './mediaPlayer.js';
import autoPlay from './plugins/autoPlay.js'

const video = document.querySelector("video");
const buttonPlay = document.getElementById('play');
const buttonPause = document.getElementById('pause');
const muted = document.querySelector("#mute-unmute");

const player = new mediaPlayer({
    el: video,
    plugins: [new autoPlay()]
});

buttonPlay.onclick = () => player.play();
buttonPause.onclick = () => player.pause();
muted.onclick = () => player.unmuteMute();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}