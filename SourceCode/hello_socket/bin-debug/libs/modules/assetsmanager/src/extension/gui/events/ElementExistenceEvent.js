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
         * @class egret.gui.ElementExistenceEvent
         * @classdesc
         * Group添加或移除元素时分派的事件。
         * @extends egret.Event
         */
        var ElementExistenceEvent = (function (_super) {
            __extends(ElementExistenceEvent, _super);
            /**
             * @member egret.gui.ElementExistenceEvent#constructor
             */
            function ElementExistenceEvent(type, bubbles, cancelable, element, index) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                if (element === void 0) { element = null; }
                if (index === void 0) { index = -1; }
                var _this = _super.call(this, type, bubbles, cancelable) || this;
                /**
                 * 指向已添加或删除元素的位置的索引。
                 * @member egret.gui.ElementExistenceEvent#index
                 */
                _this.index = NaN;
                /**
                 * 对已添加或删除的视觉元素的引用。
                 * @member egret.gui.ElementExistenceEvent#element
                 */
                _this.element = null;
                _this.element = element;
                _this.index = index;
                return _this;
            }
            /**
             * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
             * @method egret.gui.ElementExistenceEvent.dispatchElementExistenceEvent
             */
            ElementExistenceEvent.dispatchElementExistenceEvent = function (target, type, element, index) {
                if (element === void 0) { element = null; }
                if (index === void 0) { index = -1; }
                var event = egret.Event.create(ElementExistenceEvent, type);
                event.element = element;
                event.index = index;
                var result = target.dispatchEvent(event);
                egret.Event.release(event);
                return result;
            };
            ElementExistenceEvent.prototype.clean = function () {
                _super.prototype.clean.call(this);
                this.element = null;
                this.index = NaN;
            };
            return ElementExistenceEvent;
        }(egret.Event));
        /**
         * 元素添加
         * @constant egret.gui.ElementExistenceEvent.ELEMENT_ADD
         */
        ElementExistenceEvent.ELEMENT_ADD = "elementAdd";
        /**
         * 元素移除
         * @constant egret.gui.ElementExistenceEvent.ELEMENT_REMOVE
         */
        ElementExistenceEvent.ELEMENT_REMOVE = "elementRemove";
        gui.ElementExistenceEvent = ElementExistenceEvent;
        __reflect(ElementExistenceEvent.prototype, "egret.gui.ElementExistenceEvent");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
