(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Ball.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0dbb4vS24BDCof7evRBUTfw', 'Ball', __filename);
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
        //播放触摸屏幕音效
        cc.audioEngine.play(cc.find("Canvas").getComponent("Game").touchAudio, false, 1);
        this.getComponent(cc.RigidBody).linearVelocity = { x: this.getComponent(cc.RigidBody).linearVelocity.x, y: 0 };
        //移动篮球
        this.applyLinearImpulse(cc.v2(0, 2500), this.getWorldCenter(), true);
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Ball.js.map
        