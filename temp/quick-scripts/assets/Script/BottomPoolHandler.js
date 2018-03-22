(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/BottomPoolHandler.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'aadffIeJIVNwL1a0UZblL5n', 'BottomPoolHandler', __filename);
// Script/BottomPoolHandler.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    unuse: function unuse() {},

    reuse: function reuse() {
        this.node.setPosition(400, 0);
        //console.log(cc.find("Canvas").getComponent("Game").rimSpeed);
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
        //# sourceMappingURL=BottomPoolHandler.js.map
        