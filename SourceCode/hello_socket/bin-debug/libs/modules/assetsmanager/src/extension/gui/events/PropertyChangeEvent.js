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
         * @class egret.gui.PropertyChangeEvent
         * @classdesc
         * 对象的一个属性发生更改时传递到事件侦听器的事件
         * @extends egret.Event
         */
        var PropertyChangeEvent = (function (_super) {
            __extends(PropertyChangeEvent, _super);
            /**
             * 构造函数
             * @method egret.gui.PropertyChangeEvent#constructor
             * @param type {string}
             * @param bubbles {boolean}
             * @param cancelable {boolean}
             * @param kind {string}
             * @param property {any}
             * @param oldValue {any}
             * @param newValue {any}
             * @param source {any}
             */
            function PropertyChangeEvent(type, bubbles, cancelable, kind, property, oldValue, newValue, source) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                if (kind === void 0) { kind = null; }
                if (property === void 0) { property = null; }
                if (oldValue === void 0) { oldValue = null; }
                if (newValue === void 0) { newValue = null; }
                if (source === void 0) { source = null; }
                var _this = _super.call(this, type, bubbles, cancelable) || this;
                /**
                 * 指定更改的类型。可能的值为 PropertyChangeEventKind.UPDATE、PropertyChangeEventKind.DELETE 和 null。
                 * @member egret.gui.PropertyChangeEvent#kind
                 */
                _this.kind = null;
                /**
                 * 更改后的属性的值。
                 * @member egret.gui.PropertyChangeEvent#newValue
                 */
                _this.newValue = null;
                /**
                 * 更改后的属性的值。
                 * @member egret.gui.PropertyChangeEvent#oldValue
                 */
                _this.oldValue = null;
                /**
                 * 指定已更改属性的 String、QName 或 int。
                 * @member egret.gui.PropertyChangeEvent#property
                 */
                _this.property = null;
                /**
                 * 发生更改的对象。
                 * @member egret.gui.PropertyChangeEvent#source
                 */
                _this.source = null;
                _this.kind = kind;
                _this.property = property;
                _this.oldValue = oldValue;
                _this.newValue = newValue;
                _this.source = source;
                return _this;
            }
            /**
             * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
             * @method egret.gui.PropertyChangeEvent.dispatchPropertyChangeEvent
             */
            PropertyChangeEvent.dispatchPropertyChangeEvent = function (target, kind, property, oldValue, newValue, source) {
                if (kind === void 0) { kind = null; }
                if (property === void 0) { property = null; }
                if (oldValue === void 0) { oldValue = null; }
                if (newValue === void 0) { newValue = null; }
                if (source === void 0) { source = null; }
                var event = egret.Event.create(PropertyChangeEvent, PropertyChangeEvent.PROPERTY_CHANGE);
                event.kind = kind;
                event.property = property;
                event.oldValue = oldValue;
                event.newValue = newValue;
                event.source = source;
                var result = target.dispatchEvent(event);
                egret.Event.release(event);
                return result;
            };
            PropertyChangeEvent.prototype.clean = function () {
                _super.prototype.clean.call(this);
                this.kind = null;
                this.newValue = null;
                this.oldValue = null;
                this.property = null;
                this.source = null;
            };
            return PropertyChangeEvent;
        }(egret.Event));
        /**
         * 属性改变
         * @constant egret.gui.PropertyChangeEvent.PROPERTY_CHANGE
         */
        PropertyChangeEvent.PROPERTY_CHANGE = "propertyChange";
        gui.PropertyChangeEvent = PropertyChangeEvent;
        __reflect(PropertyChangeEvent.prototype, "egret.gui.PropertyChangeEvent");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
