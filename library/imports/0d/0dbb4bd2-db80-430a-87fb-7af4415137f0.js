"use strict";
cc._RF.push(module, '0dbb4vS24BDCof7evRBUTfw', 'Ball');
// Script/Ball.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        this.node.setLocalZOrder(2);
    },

    /**
     * ball控制事件
     */
    ballControll: function ballControll() {
        //移动篮球
        this.applyLinearImpulse(cc.v2(0, 5500), this.getWorldCenter(), true);
    }

});

cc._RF.pop();