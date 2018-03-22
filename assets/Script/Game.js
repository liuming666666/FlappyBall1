/**
 * 挂载在canvas下面，控制游戏的主要进程逻辑
 * 得分，失败，重新开始
 */

var Status = cc.Enum({
    Menu: -1,
    Run: -1,
    Over: -1
});

//随机节奏篮圈位置
var rimPosition = {
    simple:[{x:500,y:-100,r:0},{x:500,y:100,r:0},{x:500,y:0,r:0},{x:500,y:200,r:0},{x:500,y:-200,r:0}],    //简单
        commonly:[{x:500,y:-200,r:-30},{x:500,y:0,r:30},{x:500,y:200,r:-45},{x:500,y:-100,r:45},{x:500,y:100,r:0}],    //一般
        difficulty: [{x:500,y:0,r:45},{x:500,y:-150,r:30},{x:500,y:-150,r:15},{x:500,y:200,r:0},{x:500,y:-125,r:-30}]  //困难
};

cc.Class({
    extends: cc.Component,

    properties: {
        //游戏结束面板预制
        gameOverPref: cc.Prefab,
        //得分标签
        scoreLabel: cc.Label,
        //篮球
        ball: cc.RigidBody,
        //上篮筐
        topRim: cc.Prefab,
        //下篮筐
        bottomRim: cc.Prefab,
        //篮筐移动速度
        rimSpeed: 0,
        rims: [],
        //是不是空心,默认是空心
        isHollow:0,
        //空心次数
        hollowNum: 0,
        //球粒子
        qiu: cc.ParticleSystem,
        //空心球分数特效节点
        hollowLabel: cc.Node,
        startTimer: cc.Label
    },

    statics: {
        Status
    },

    // use this for initialization
    onLoad: function () {
        this.count = 0;
        var self = this;
        this.rimPositionArr = [];
        //记录篮球初始位置
        this.ballInit = this.ball.node.getPosition();
        //游戏状态主菜单界面
        this.status = Status.Menu;
        //分数初始化
        this.score = 0;
        //游戏结束面板池
        this.GameOverPool = new cc.NodePool();
        //上篮筐池
        this.topRimPool = new cc.NodePool("TopPoolHandler");
        //下篮筐池
        this.bottomRimPool = new cc.NodePool("BottomPoolHandler");

        for(var key in rimPosition) {
            rimPosition[key].forEach((value,index) => {
                self.rimPositionArr.push(value);
            });
        }
        //this.scheduleOnce(this.gameOver, 5);
    },

    /**
     * 开始游戏
     */
    startGame: function() {
        //修改游戏状态
        this.status = Status.Run;
        this.score = 0;
        this.scoreLabel.string = "score:" + this.score;
        //回归篮球位置
        this.ball.node.setPosition(this.ballInit);
        //背景开始移动，开始生成篮筐
        this.spawnRim({x:200,y:0,r:0});
        //添加球控制事件
        this.node.on(cc.Node.EventType.TOUCH_START,
            this.ball.getComponent("Ball").ballControll,this.ball);

        //把球修改成动态的
        this.ball.getComponent(cc.RigidBody).type = 2;
    },

    /**
     * 获得分数，并修改
     */
    getScore: function() {
        if(this.status == Status.Run) {
            if(this.isHollow == 0) {
                //开启粒子系统
                this.qiu.resetSystem();
                this.rims[0].bottomRimNode.children[0].getComponent(cc.ParticleSystem).resetSystem();
                this.hollowNum++;
                this.score += this.hollowNum*1;
                var color;
                switch (this.hollowNum) {
                    case 1 :
                         color = {
                            a: 255,
                            b: 235,
                            g: 191,
                            r: 156
                        };
                        this.rims[0].bottomRimNode.children[0].getComponent(cc.ParticleSystem).totalParticles = 50;
                        this.qiu.totalParticles = 50;
                        break;
                    case 2 :
                        color = {
                            a: 255,
                            b: 77,
                            g: 232,
                            r: 255
                        };
                        this.rims[0].bottomRimNode.children[0].getComponent(cc.ParticleSystem).totalParticles = 100;
                        this.qiu.totalParticles = 100;
                        break;
                    default :
                        color = {
                            a: 255,
                            b: 68,
                            g: 63,
                            r: 252
                        };
                        this.rims[0].bottomRimNode.children[0].getComponent(cc.ParticleSystem).totalParticles = 150;
                        this.qiu.totalParticles = 150;
                }
                this.hollowLabel.getComponent("HollowAnim").init(this.hollowNum ,color);
            }else{
                this.isHollow = 0;
                this.hollowNum =0;
            }
            this.score++;
            //修改分数显示的值
            this.scoreLabel.string = "score:" + this.score;
            //播放得分音效
            //cc.audioEngine.play(音频文件,false,1);
        }
    },

    /**
     * 游戏结束
     */
    gameOver: function() {
        //游戏结束，修改游戏状态
        this.status = Status.Over;
        var gameOverNode = this.GameOverPool.get();
        //取消绑定时间
        this.node.off(cc.Node.EventType.MOUSE_DOWN, this.ball.getComponent("Ball").ballControll,this.ball);
        if(!gameOverNode) {
            console.log("创建了结束面板");
            //制造游戏结束预制节点
            gameOverNode = cc.instantiate(this.gameOverPref);

            //把节点传给GAMEOVER
            gameOverNode.getComponent("GameOver").game = this.node;
        }
        gameOverNode.getComponent("GameOver").scoreLabel.string = "score:" + this.score;
        //把生成的GameOver节点挂到Canvas下面
        this.node.addChild(gameOverNode,5);
    },

    /**
     * play按钮点击事件
     */
    playBtnClick: function() {
        //开始按钮隐藏
        this.node.getChildByName("PlayBtn").active = false;
        /*var time = 1;
        this.startTimer.string = 'Ready';
        this.startTimer.node.active = true;
        this.startTimer.node.opacity = 255;
        this.startTimer.node.runAction(cc.sequence(cc.scaleTo(0.2,1.5),cc.scaleTo(0.2,1),cc.fadeOut(0.6),cc.callFunc(()=>{
            time--;

        if(time<0){
            this.startTimer.node.stopAllActions();
            this.node.on(cc.Node.EventType.TOUCH_START,(event)=>{

            }
        );
        }else{
            this.startTimer.node.opacity = 255;
            if(time==0){
                this.startTimer.string = 'Go!';
            }else{
                this.startTimer.string = 'Ready';
            }
        }
    })).repeatForever());*/
        this.startGame();
    },

    /**
     * 生成篮筐
     */
    spawnRim: function(position) {
        this.count ++;
        if(this.count == this.rimPositionArr.length) {
            this.count = 0;
        }
        var topRimNode = this.topRimPool.get();
        var bottomRimNode = this.bottomRimPool.get();
        //var rimPositionArr = rimPosition.simple;   //简单数组
        //var index = Math.floor((Math.random()*rimPositionArr.length));
        if(!topRimNode) {
            //上篮筐
            topRimNode = cc.instantiate(this.topRim);
            topRimNode.addComponent('TopPoolHandler');
            topRimNode.setPosition({
                x:position["x"],
                y:position.y
            });
            topRimNode.setRotation(position.r);
        }
        if(!bottomRimNode) {
            //下篮筐
            bottomRimNode = cc.instantiate(this.bottomRim);
            bottomRimNode.addComponent('BottomPoolHandler');
            bottomRimNode.setPosition({
                x:position.x,
                y:position.y
            });
            bottomRimNode.setRotation(position.r);
        }
        this.node.addChild(topRimNode,1);
        this.node.addChild(bottomRimNode,3);
        //默认为空心球,0为空心
        var rim = {
            topRimNode: topRimNode,
            bottomRimNode: bottomRimNode
        };
        this.rims.push(rim);

    },

    /**
     * 移除篮筐
     */
    removeRim: function(bottomRim) {
        this.spawnRim(this.rimPositionArr[this.count]);
        this.rims.forEach((rim,index) => {
            if(rim.bottomRimNode == bottomRim.node) {
                rim.topRimNode.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(()=>{
                    rim.topRimNode.destroy();
                })));
                rim.bottomRimNode.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(()=>{
                    rim.bottomRimNode.destroy();
                })));
                //this.topRimPool.put(value.topRimNode);
                //this.bottomRimPool.put(value.bottomRimNode);
                this.rims.splice(0,1);
                return true;
            }
        });
    },

    // called every frame，每一帧调用更新
    update: function (dt) {
        if(this.rims.length >0 && this.status == 1 && this.ball.node.x> this.rims[0].topRimNode.x + this.rims[0].topRimNode.width/2) {
            this.gameOver();
        }
    }

});
