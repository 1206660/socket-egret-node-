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
         * @class egret.gui.Sequence
         * @classdesc
         * Sequence 效果以子效果的添加顺序依次播放多个子效果。
         * @extends egret.gui.CompositeEffect
         */
        var Sequence = (function (_super) {
            __extends(Sequence, _super);
            /**
             * @method egret.gui.Sequence#constructor
             */
            function Sequence(target) {
                if (target === void 0) { target = null; }
                var _this = _super.call(this, target) || this;
                _this.instanceClass = gui.SequenceInstance;
                return _this;
            }
            Object.defineProperty(Sequence.prototype, "compositeDuration", {
                get: function () {
                    var sequenceDuration = 0;
                    for (var i = 0; i < this.children.length; ++i) {
                        var childDuration = void 0;
                        var child = (this.children[i]);
                        if (child instanceof gui.CompositeEffect)
                            childDuration = child.compositeDuration;
                        else
                            childDuration = child.duration;
                        childDuration =
                            childDuration * child.repeatCount +
                                (child.repeatDelay * (child.repeatCount - 1)) +
                                child.startDelay;
                        sequenceDuration += childDuration;
                    }
                    return sequenceDuration;
                },
                enumerable: true,
                configurable: true
            });
            return Sequence;
        }(gui.CompositeEffect));
        gui.Sequence = Sequence;
        __reflect(Sequence.prototype, "egret.gui.Sequence");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
