cc.Class({
    extends: cc.Component,

    properties: {
        game: null,
        scoreLabel: cc.Label
    },

    /**
     * 重新开始
     */
    restStartClick: function() {
        cc.director.loadScene('Game');
    }
});
