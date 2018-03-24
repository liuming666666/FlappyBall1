
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.node.setLocalZOrder(2);
    }
    ,

    /**
     * ball控制事件
     */
    ballControll: function() {
        //播放触摸屏幕音效
        cc.audioEngine.play(cc.find("Canvas").getComponent("Game").touchAudio , false ,1);
        this.getComponent(cc.RigidBody).linearVelocity = {x:this.getComponent(cc.RigidBody).linearVelocity.x,y:0};
        //移动篮球
        this.applyLinearImpulse(cc.v2(0,3500),this.getWorldCenter(),true);
    }

});
