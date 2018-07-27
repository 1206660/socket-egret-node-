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
         * @class egret.gui.CompositeEffectInstance
         * @classdesc
         * CompositeEffectInstance 类用于实现 CompositeEffect 类的实例类
         * @extends egret.gui.EffectInstance
         */
        var CompositeEffectInstance = (function (_super) {
            __extends(CompositeEffectInstance, _super);
            /**
             * @method egret.gui.CompositeEffectInstance#constructor
             */
            function CompositeEffectInstance(target) {
                var _this = _super.call(this, target) || this;
                /**
                 * 正在播放或者等待播放的EffectInstances
                 */
                _this._activeEffectQueue = [];
                _this._playheadTime = 0;
                _this._childSets = [];
                return _this;
            }
            Object.defineProperty(CompositeEffectInstance.prototype, "_actualDuration", {
                /**
                 * @inheritDoc
                 */
                get: function () {
                    var value = NaN;
                    if (this.repeatCount > 0) {
                        value = this._durationWithoutRepeat * this.repeatCount +
                            (this.repeatDelay * (this.repeatCount - 1)) + this.startDelay;
                    }
                    return value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CompositeEffectInstance.prototype, "playheadTime", {
                /**
                 * @inheritDoc
                 */
                get: function () {
                    return this._playheadTime;
                },
                enumerable: true,
                configurable: true
            });
            CompositeEffectInstance.prototype._setPlayheadTime = function (value) {
                if (this._timerAnimation)
                    this._timerAnimation.playheadTime = value;
                else
                    this._playheadTime = value;
                _super.prototype._setPlayheadTime.call(this, value);
            };
            Object.defineProperty(CompositeEffectInstance.prototype, "_durationWithoutRepeat", {
                /**
                 * 不含重复次数的持续时间
                 */
                get: function () {
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @inheritDoc
             */
            CompositeEffectInstance.prototype.play = function () {
                this._timerAnimation = new gui.Animation(this.animationUpdate, this);
                this._timerAnimation.duration = this._durationWithoutRepeat;
                this._timerAnimation.motionPaths = [new gui.SimpleMotionPath("timer", 0, 0)];
                this._timerAnimation.endFunction = this.animationEnd;
                this._timerAnimation.play();
                _super.prototype.play.call(this);
            };
            /**
             * @inheritDoc
             */
            CompositeEffectInstance.prototype.pause = function () {
                _super.prototype.pause.call(this);
                if (this._timerAnimation)
                    this._timerAnimation.pause();
            };
            /**
             * @inheritDoc
             */
            CompositeEffectInstance.prototype.stop = function () {
                _super.prototype.stop.call(this);
                if (this._timerAnimation)
                    this._timerAnimation.stop();
            };
            /**
             * @inheritDoc
             */
            CompositeEffectInstance.prototype.end = function () {
                _super.prototype.end.call(this);
                if (this._timerAnimation)
                    this._timerAnimation.end();
            };
            /**
             * @inheritDoc
             */
            CompositeEffectInstance.prototype.resume = function () {
                _super.prototype.resume.call(this);
                if (this._timerAnimation)
                    this._timerAnimation.resume();
            };
            /**
             * @inheritDoc
             */
            CompositeEffectInstance.prototype.reverse = function () {
                _super.prototype.reverse.call(this);
                this._setPlayReversed(!this.playReversed);
                if (this._timerAnimation)
                    this._timerAnimation.reverse();
            };
            /**
             * @inheritDoc
             */
            CompositeEffectInstance.prototype.finishEffect = function () {
                this._activeEffectQueue = null;
                _super.prototype.finishEffect.call(this);
            };
            /**
             * 向此 Composite 效果添加一组新的子效果。
             * Sequence 效果将按子效果组的添加顺序一次播放一个子效果组。
             * Parallel 效果将同时播放所有子效果组，而不考虑这些子效果组的添加顺序。
             */
            CompositeEffectInstance.prototype.addChildSet = function (childSet) {
                if (childSet) {
                    var n = childSet.length;
                    if (n > 0) {
                        if (!this._childSets)
                            this._childSets = [childSet];
                        else
                            this._childSets.push(childSet);
                        for (var i = 0; i < n; i++) {
                            childSet[i].addEventListener(gui.EffectEvent.EFFECT_END, this._effectEndHandler, this);
                            childSet[i].parentCompositeEffectInstance = this;
                        }
                    }
                }
            };
            /**
             * @inheritDoc
             */
            CompositeEffectInstance.prototype._playWithNoDuration = function () {
                _super.prototype._playWithNoDuration.call(this);
                this.end();
            };
            CompositeEffectInstance.prototype.animationUpdate = function (animation) {
                this._playheadTime = this._timerAnimation ?
                    this._timerAnimation.playheadTime :
                    this._playheadTime;
            };
            CompositeEffectInstance.prototype.animationEnd = function (animation) {
                this._playheadTime = this._timerAnimation ?
                    this._timerAnimation.playheadTime :
                    this._playheadTime;
            };
            /**
             * 在每个子效果完成播放时调用。子类必须实现此函数。
             */
            CompositeEffectInstance.prototype._onEffectEnd = function (childEffect) {
            };
            CompositeEffectInstance.prototype._effectEndHandler = function (event) {
                this._onEffectEnd(event.effectInstance);
            };
            return CompositeEffectInstance;
        }(gui.EffectInstance));
        gui.CompositeEffectInstance = CompositeEffectInstance;
        __reflect(CompositeEffectInstance.prototype, "egret.gui.CompositeEffectInstance");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
