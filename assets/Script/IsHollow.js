
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        cc.find("Canvas/Ball/qiuhuo").getComponent(cc.ParticleSystem).stopSystem();
        cc.find("Canvas").getComponent("Game").isHollow = 1;
    }
});
