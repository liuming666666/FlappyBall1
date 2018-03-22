"use strict";
cc._RF.push(module, 'c2d3f4r6DNIFJRQwY+wMwkB', 'Ground');
// Script/Ground.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        game: cc.Node
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        if (this.game.getComponent("Game").status == 1) {
            this.game.getComponent("Game").gameOver();
        }
    }

});

cc._RF.pop();