"use strict";
cc._RF.push(module, 'c4860SNY3dA45JcEoTUKJy+', 'IsHollow');
// Script/IsHollow.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        cc.find("Canvas/Ball/qiuhuo").getComponent(cc.ParticleSystem).stopSystem();
        cc.find("Canvas").getComponent("Game").isHollow = 1;
    }
});

cc._RF.pop();