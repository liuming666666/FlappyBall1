"use strict";
cc._RF.push(module, '9b8726ratJK4IjhxJ1nxksD', 'GameOver');
// Script/GameOver.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        game: null,
        scoreLabel: cc.Label
    },

    /**
     * 重新开始
     */
    restStartClick: function restStartClick() {
        cc.director.loadScene('Game');
    }
});

cc._RF.pop();