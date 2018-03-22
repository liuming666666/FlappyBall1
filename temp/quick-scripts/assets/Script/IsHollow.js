(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/IsHollow.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c4860SNY3dA45JcEoTUKJy+', 'IsHollow', __filename);
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
        //# sourceMappingURL=IsHollow.js.map
        