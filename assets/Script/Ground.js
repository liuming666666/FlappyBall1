cc.Class({
    extends: cc.Component,

    properties: {
        game:cc.Node
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function (contact, selfCollider, otherCollider) {
        if(this.game.getComponent("Game").status == 1) {
            this.game.getComponent("Game").gameOver();
        }
    }

});
