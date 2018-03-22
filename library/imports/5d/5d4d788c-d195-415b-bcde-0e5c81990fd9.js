"use strict";
cc._RF.push(module, '5d4d7iM0ZVBW7zeDlyBmQ/Z', 'HollowAnim');
// Script/HollowAnim.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        hollowScore: cc.Label
    },

    init: function init(hollowNum, color) {
        this.node.active = true;
        this.hollowScore.node.color = color;
        this.node.color = color;
        var display = hollowNum + 1;
        this.hollowScore.string = "x" + display;
        this.getComponent(cc.Animation).play();
    }

});

cc._RF.pop();