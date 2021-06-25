import mediaPlayer from './mediaPlayer';
import autoPlay from './plugins/autoPlay'
import AutoPause from './plugins/autoPause';

const video = document.querySelector("video");

const buttonPause = document.getElementById('pause');


const player = new mediaPlayer({
    el: video,
    plugins: [new autoPlay(), new AutoPause()],
});

const buttonPlay: HTMLElement = document.querySelector('#play');
buttonPlay.onclick = () => player.togglePlay();


buttonPause.onclick = () => player.pause();

const muted: HTMLElement = document.querySelector("#mute-unmute");
muted.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute;
    }
};


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}