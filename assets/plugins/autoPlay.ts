import mediaPlayer from "../mediaPlayer";
class autoPlay {
    constructor() {}
    run(player: mediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}


export default autoPlay;