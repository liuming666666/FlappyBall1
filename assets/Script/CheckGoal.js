
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        if(otherCollider.node.y > selfCollider.node.y + selfCollider.getComponent(cc.PhysicsBoxCollider).offset.y) {
            selfCollider.getComponent(cc.PhysicsBoxCollider).enabled = false;
            cc.find("Canvas").getComponent("Game").getScore();
            cc.find("Canvas").getComponent("Game").removeRim(selfCollider);
        }else{
            cc.find("Canvas").getComponent("Game").gameOver();
        }

    }

});
