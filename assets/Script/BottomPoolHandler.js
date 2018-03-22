
cc.Class({
    extends: cc.Component,

    properties: {

    },

    unuse: function () {

    },

    reuse: function () {
        this.node.setPosition(400,0);
        //console.log(cc.find("Canvas").getComponent("Game").rimSpeed);
    }

});
