
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
        //移动篮球
        this.applyLinearImpulse(cc.v2(0,6000),this.getWorldCenter(),true);
    }

});
