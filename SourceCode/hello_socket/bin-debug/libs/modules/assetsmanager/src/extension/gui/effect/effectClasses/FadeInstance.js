//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.FadeInstance
         * @classdesc
         * FadeInstance 类用于实现 Fade 效果的实例类
         * @extends egret.gui.AnimateInstance
         */
        var FadeInstance = (function (_super) {
            __extends(FadeInstance, _super);
            /**
             * @method egret.gui.FadeInstance#constructor
             */
            function FadeInstance(target) {
                return _super.call(this, target) || this;
            }
            FadeInstance.prototype.play = function () {
                var fromValue = this.alphaFrom;
                var toValue = this.alphaTo;
                if ("visible" in this.target && !this.target.visible) {
                    if (isNaN(fromValue))
                        fromValue = this.target.alpha;
                    if (isNaN(toValue))
                        toValue = this.target.alpha;
                    if (fromValue == 0 && toValue != 0) {
                        this.target.alpha = 0;
                        this.target.visible = true;
                    }
                }
                this.motionPaths = [new gui.MotionPath("alpha")];
                this.motionPaths[0].keyframes = [new gui.Keyframe(0, this.alphaFrom),
                    new gui.Keyframe(this.duration, this.alphaTo)];
                _super.prototype.play.call(this);
            };
            return FadeInstance;
        }(gui.AnimateInstance));
        gui.FadeInstance = FadeInstance;
        __reflect(FadeInstance.prototype, "egret.gui.FadeInstance");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
