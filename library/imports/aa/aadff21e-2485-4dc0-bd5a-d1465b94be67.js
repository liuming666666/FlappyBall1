"use strict";
cc._RF.push(module, 'aadffIeJIVNwL1a0UZblL5n', 'BottomPoolHandler');
// Script/BottomPoolHandler.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    unuse: function unuse() {},

    reuse: function reuse() {
        this.node.setPosition(400, 0);
        //console.log(cc.find("Canvas").getComponent("Game").rimSpeed);
    }

});

cc._RF.pop();