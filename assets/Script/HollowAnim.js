cc.Class({
    extends: cc.Component,

    properties: {
        hollowScore: cc.Label
    },


    init: function (hollowNum,color) {
        this.node.active = true;
        this.hollowScore.node.color = color;
        this.node.color = color;
        var display = hollowNum+1;
        this.hollowScore.string = "x"+display;
        this.getComponent(cc.Animation).play();
    }

});
