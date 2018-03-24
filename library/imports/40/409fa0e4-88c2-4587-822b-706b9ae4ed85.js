"use strict";
cc._RF.push(module, '409faDkiMJFh4IrcGua5O2F', 'CheckGoal');
// Script/CheckGoal.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.y > selfCollider.node.y + selfCollider.getComponent(cc.PhysicsBoxCollider).offset.y) {
            selfCollider.node.removeComponent(cc.RigidBody);
            cc.find("Canvas").getComponent("Game").getScore();
            cc.find("Canvas").getComponent("Game").removeRim(selfCollider);
        } else {
            cc.find("Canvas").getComponent("Game").gameOver();
        }
    }

});

cc._RF.pop();