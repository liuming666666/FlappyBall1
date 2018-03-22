(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scroll.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '36989y7Y39EKpyHqzNmSxfP', 'Scroll', __filename);
// Script/Scroll.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        //背景移动速度
        speed: 0,
        //重置的边界
        resetX: 0,
        ball: cc.RigidBody,
        game: cc.Node
    },

    onload: function onload() {
        this.initSpeed = this.speed; //背景移动初始值
        this.initRimSpeed = this.game.getComponent("Game").rimSpeed; //篮筐移动初始值
    },

    update: function update(dt) {
        //Run状态才移动
        if (this.game.getComponent("Game").status == 1) {
            var ballSpeed = this.ball.getComponent(cc.RigidBody).linearVelocity; //篮球的速度对象
            var ballSpeedX = ballSpeed.x; //篮球的x轴速度
            console.log(ballSpeedX);
            var ballPositionX = this.game.getComponent("Game").ballInit.x; //篮球的原x位置
            this.ball.node.x = ballPositionX; //设置篮球始终在原位置
            this.backgroundMove(dt, ballSpeedX); //移动背景
            this.rimMove(dt, ballSpeedX); //移动篮框
        }
    },

    /**
     * 背景移动
     */
    backgroundMove: function backgroundMove(dt, ballSpeedX) {
        if (this.node.x <= this.resetX) {
            this.node.x -= this.resetX;
        }
        if (ballSpeedX == 0) {
            this.node.x += this.speed * dt;
        } else {
            if (Math.abs(ballSpeedX) < 50) {
                //this.speed = 0;
                this.ball.getComponent(cc.RigidBody).linearVelocity = { x: 0, y: this.ball.getComponent(cc.RigidBody).linearVelocity.y };
            }
            var ballX = ballSpeedX * dt;
            if (-20 < ballSpeedX * dt < 0) {
                ballX = -40;
            }
            this.node.x -= ballSpeedX * dt;
        }
    },

    /**
     * 篮筐移动
     * @param dt
     */
    rimMove: function rimMove(dt, ballSpeedX) {
        var _this = this;

        var rimSpeed = this.game.getComponent("Game").rimSpeed;
        this.game.getComponent("Game").rims.forEach(function (rim, index) {
            if (ballSpeedX == 0) {
                rim.topRimNode.x += rimSpeed * dt;
                rim.bottomRimNode.x += rimSpeed * dt;
            } else {
                if (Math.abs(ballSpeedX) < 50) {
                    //this.speed = 0;
                    _this.ball.getComponent(cc.RigidBody).linearVelocity = { x: 0, y: _this.ball.getComponent(cc.RigidBody).linearVelocity.y };
                }
                var ballX = ballSpeedX * dt;
                if (-20 < ballSpeedX * dt < 0) {
                    ballX = -40;
                }
                rim.topRimNode.x -= ballX;
                rim.bottomRimNode.x -= ballX;
            }
        });
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
        //# sourceMappingURL=Scroll.js.map
        