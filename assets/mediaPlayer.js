function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}
//cuando trabajamos con clases añadimos metodos al prototype
// mediaPlayer.prototype._initPlugins = function() {
//     this.plugins.forEach(plugin => {
//         instancia
//         plugin();
//         plugin.run(this);
//     });
// }
mediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play,
        pause: () => this.pause,
        media: this.media,
        get muted() {
            return this.media.muted;
        },

        set muted(value) {
            this.media.muted = value;

        },
    };

    this.plugins.forEach(plugin => {
        //instancia
        //plugin();
        plugin.run(player);
    });
}

mediaPlayer.prototype.play = function() {
    this.media.play();
}
mediaPlayer.prototype.pause = function() {
    this.media.pause();
}

mediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

mediaPlayer.prototype.unmute = function() {
    this.media.unmute = false;
}

mediaPlayer.prototype.unmuteMute = function() {
    this.media.muted ? this.media.muted = false : this.media.muted = true;
};
export default mediaPlayer;