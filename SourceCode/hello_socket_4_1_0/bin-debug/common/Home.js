var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddTOStage, _this);
        return _this;
    }
    Home.prototype.onAddTOStage = function (event) {
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff, 1);
        bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        bg.graphics.endFill();
        this.addChild(bg);
        var label = new egret.TextField();
        label.text = "Hello world!";
        label.textColor = 0x000000;
        label.anchorOffsetX = label.width / 2;
        label.anchorOffsetY = label.height / 2;
        label.x = this.stage.stageWidth / 2;
        label.y = this.stage.stageHeight / 4;
        this.addChild(label);
        var button = new eui.Button();
        button.width = 100;
        button.height = 40;
        button.anchorOffsetX = button.width / 2;
        button.anchorOffsetY = button.height / 2;
        button.x = this.stage.stageWidth / 2;
        button.y = this.stage.stageHeight / 2;
        button.label = "CLICK";
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this);
        this.addChild(button);
    };
    Home.prototype.onBtnClick = function () {
        tcp.send("home", "test", { t: 'hello' });
        tcp.bind("home.test", function (data) {
            console.log("home.test:", data);
        }, this);
    };
    return Home;
}(egret.DisplayObjectContainer));
__reflect(Home.prototype, "Home");
