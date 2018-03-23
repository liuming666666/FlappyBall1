(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/CheckGoal.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '409faDkiMJFh4IrcGua5O2F', 'CheckGoal', __filename);
// Script/CheckGoal.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.y > selfCollider.node.y + selfCollider.getComponent(cc.PhysicsBoxCollider).offset.y) {
            selfCollider.getComponent(cc.PhysicsBoxCollider).enabled = false;
            cc.find("Canvas").getComponent("Game").getScore();
            cc.find("Canvas").getComponent("Game").removeRim(selfCollider);
        } else {
            cc.find("Canvas").getComponent("Game").gameOver();
        }
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
        //# sourceMappingURL=CheckGoal.js.map
        