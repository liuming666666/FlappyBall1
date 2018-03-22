(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/GameOver.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9b8726ratJK4IjhxJ1nxksD', 'GameOver', __filename);
// Script/GameOver.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        game: null,
        scoreLabel: cc.Label
    },

    /**
     * 重新开始
     */
    restStartClick: function restStartClick() {
        cc.director.loadScene('Game');
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
        //# sourceMappingURL=GameOver.js.map
        