(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/HollowAnim.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5d4d7iM0ZVBW7zeDlyBmQ/Z', 'HollowAnim', __filename);
// Script/HollowAnim.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        hollowScore: cc.Label
    },

    init: function init(hollowNum, color) {
        this.node.active = true;
        this.hollowScore.node.color = color;
        this.node.color = color;
        var display = hollowNum + 1;
        this.hollowScore.string = "x" + display;
        this.getComponent(cc.Animation).play();
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
        //# sourceMappingURL=HollowAnim.js.map
        