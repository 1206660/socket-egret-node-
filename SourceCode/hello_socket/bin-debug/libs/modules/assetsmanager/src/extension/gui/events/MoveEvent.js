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
         * @class egret.gui.MoveEvent
         * @classdesc
         * 移动事件
         * @extends egret.Event
         */
        var MoveEvent = (function (_super) {
            __extends(MoveEvent, _super);
            /**
             * @method egret.gui.MoveEvent#constructor
             * @param type {string}
             * @param oldX {number}
             * @param oldY {number}
             * @param bubbles {boolean}
             * @param cancelable {boolean}
             */
            function MoveEvent(type, bubbles, cancelable) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                var _this = _super.call(this, type, bubbles, cancelable) || this;
                /**
                 * 旧的组件X
                 * @member egret.gui.MoveEvent#oldX
                 */
                _this.oldX = NaN;
                /**
                 * 旧的组件Y
                 * @member egret.gui.MoveEvent#oldY
                 */
                _this.oldY = NaN;
                return _this;
            }
            /**
             * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
             * @method egret.gui.MoveEvent.dispatchMoveEvent
             */
            MoveEvent.dispatchMoveEvent = function (target, oldX, oldY) {
                if (oldX === void 0) { oldX = NaN; }
                if (oldY === void 0) { oldY = NaN; }
                var event = egret.Event.create(MoveEvent, MoveEvent.MOVE);
                event.oldX = oldX;
                event.oldY = oldY;
                var result = target.dispatchEvent(event);
                egret.Event.release(event);
                return result;
            };
            return MoveEvent;
        }(egret.Event));
        /**
         * @constant egret.gui.MoveEvent.MOVE
         */
        MoveEvent.MOVE = "move";
        gui.MoveEvent = MoveEvent;
        __reflect(MoveEvent.prototype, "egret.gui.MoveEvent");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
