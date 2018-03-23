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
        /*var actionTo = cc.jumpBy(0.5, this.node.position, 100,1);
        this.node.runAction(actionTo);*/
        this.getComponent(cc.RigidBody).linearVelocity = { x: this.getComponent(cc.RigidBody).linearVelocity.x, y: 0 };
        //移动篮球
        this.applyLinearImpulse(cc.v2(0, 2500), this.getWorldCenter(), true);
    }

});

cc._RF.pop();