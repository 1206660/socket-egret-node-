var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Tcp = (function () {
    function Tcp() {
        this.handler = {};
        this.isSocketOpen = false;
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.connect("127.0.0.1", 8080);
    }
    Tcp.prototype.onSocketOpen = function () {
        console.log("连接成功");
        this.isSocketOpen = true;
    };
    Tcp.prototype.onReceiveMessage = function (e) {
        var msg = this.webSocket.readUTF();
        console.log("派发数据：" + msg);
        var data = JSON.parse(msg);
        this.dispatch(data);
    };
    Tcp.prototype.bind = function (name, func, scopeObj) {
        this.handler[name] = [func, scopeObj];
    };
    Tcp.prototype.send = function (c, m, data) {
        var json = {
            "c": c,
            "m": m,
            "data": data
        };
        if (this.isSocketOpen) {
            console.log("发送数据" + JSON.stringify(json));
            this.webSocket.writeUTF(JSON.stringify(json));
        }
        else {
            console.log("websocket未连接");
        }
    };
    Tcp.prototype.dispatch = function (data) {
        var name = data["c"] + "." + data["m"];
        var cb = this.handler[name];
        if (cb) {
            var func = cb[0];
            var obj = cb[1];
            func.call(obj, data);
        }
        else {
            console.log("Tcp not found handler --> " + name);
        }
    };
    return Tcp;
}());
__reflect(Tcp.prototype, "Tcp");
