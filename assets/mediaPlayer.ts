class mediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
            this.media = config.el;
            this.plugins = config.plugins || [];

            this.initPlugins();
        }
        //cuando trabajamos con clases añadimos metodos al prototype
        // mediaPlayer.prototype._initPlugins = function() {
        //     this.plugins.forEach(plugin => {
        //         instancia
        //         plugin();
        //         plugin.run(this);
        //     });
        // }
    private initPlugins() {

        this.plugins.forEach(plugin => {
            //instancia
            //plugin();
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }
    togglePlay(){
        if (this.media.paused) {
            this.play();
        }else{
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    unmuteMute() {
        this.media.muted ? this.media.muted = false : this.media.muted = true;
    }
}




export default mediaPlayer;