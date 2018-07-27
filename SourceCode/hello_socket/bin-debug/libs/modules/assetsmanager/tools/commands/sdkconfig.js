"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var InstallSDK = require("./installsdk");
var SDKConfig = (function () {
    function SDKConfig() {
    }
    SDKConfig.prototype.execute = function () {
        InstallSDK.printAndroidSDKConfig();
    };
    return SDKConfig;
}());
__reflect(SDKConfig.prototype, "SDKConfig");
module.exports = SDKConfig;
