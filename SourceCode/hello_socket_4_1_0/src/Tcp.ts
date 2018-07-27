class Tcp {
    private webSocket: egret.WebSocket;
    private handler: Object = {};
    private isSocketOpen: boolean = false;

    public constructor() {
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.connect("127.0.0.1", 8080);
    }

    private onSocketOpen(): void {
        console.log("连接成功");
        this.isSocketOpen = true;
    }

    private onReceiveMessage(e: egret.Event): void {
        let msg = this.webSocket.readUTF();
        console.log("派发数据：" + msg);
        let data = JSON.parse(msg);
        this.dispatch(data);
    }

    public bind(name: string, func: Function, scopeObj: Object) {
        this.handler[name] = [func, scopeObj];
    }

    public send(c: string, m: string, data: any) {
        let json: Object = {
            "c": c,
            "m": m,
            "data": data
        };
        if (this.isSocketOpen) {
            console.log("发送数据" + JSON.stringify(json));
            this.webSocket.writeUTF(JSON.stringify(json));
        } else {
            console.log("websocket未连接");
        }
    }

    public dispatch(data: Object) {
        let name: string = data["c"] + "." + data["m"];
        let cb: Array<any> = this.handler[name];

        if (cb) {
            let func: Function = cb[0];
            let obj: Object = cb[1];
            func.call(obj, data);
        } else {
            console.log("Tcp not found handler --> " + name)
        }
    }
}