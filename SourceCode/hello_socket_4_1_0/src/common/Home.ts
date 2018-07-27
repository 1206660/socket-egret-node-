class Home extends egret.DisplayObjectContainer {

    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddTOStage, this);
    }

    private onAddTOStage(event: egret.Event) {
        let bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0xffffff, 1);
        bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        bg.graphics.endFill();
        this.addChild(bg);

        let label: egret.TextField = new egret.TextField();
        label.text = "Hello world!";
        label.textColor = 0x000000;
        label.anchorOffsetX = label.width / 2;
        label.anchorOffsetY = label.height / 2;
        label.x = this.stage.stageWidth / 2;
        label.y = this.stage.stageHeight / 4;
        this.addChild(label);

        let button = new eui.Button();
        button.width = 100;
        button.height = 40;
        button.anchorOffsetX = button.width / 2;
        button.anchorOffsetY = button.height / 2;
        button.x = this.stage.stageWidth / 2;
        button.y = this.stage.stageHeight / 2;
        button.label = "CLICK";
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnClick, this);
        this.addChild(button);
    }

    private onBtnClick() {
        tcp.send("home", "test", { t: 'hello' });
        tcp.bind("home.test", (data) => {
            console.log("home.test:", data)
        }, this)
    }
}