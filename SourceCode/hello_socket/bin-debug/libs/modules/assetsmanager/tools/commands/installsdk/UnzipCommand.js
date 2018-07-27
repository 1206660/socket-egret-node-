"use strict";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var path = require("path");
var UnzipCommand = (function () {
    function UnzipCommand() {
    }
    UnzipCommand.unzip = function (srcPath, destPath, callback) {
        var compilerPath = path.join(__dirname, "../../lib/zip/Unzip.jar");
        var cmd = "java -jar \"" + compilerPath + "\" \"" + srcPath + "\" \"" + destPath + "\"";
        // console.log(cmd);
        var cp_exec1 = require('child_process').exec;
        var build = cp_exec1(cmd);
        build.stdout.on("data", function (data) {
            //console.log(data);
        });
        build.stderr.on("data", function (data) {
            //console.log(data);
        });
        build.on("exit", function (result) {
            if (callback) {
                callback(result);
            }
        });
        return build;
    };
    ;
    return UnzipCommand;
}());
__reflect(UnzipCommand.prototype, "UnzipCommand");
module.exports = UnzipCommand;
