/// <reference path="../lib/types.d.ts" />
"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var info = (function () {
    function info() {
    }
    info.prototype.execute = function () {
        console.log("当前Egret版本：" + egret.version);
        console.log('Egret安装路径：' + egret.root);
        return 0;
    };
    return info;
}());
__reflect(info.prototype, "info", ["egret.Command"]);
module.exports = info;
