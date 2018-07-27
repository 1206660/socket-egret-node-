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
         * @class egret.gui.CollectionEvent
         * @classdesc
         * 集合类型数据改变事件
         * @extends egret.Event
         */
        var CollectionEvent = (function (_super) {
            __extends(CollectionEvent, _super);
            /**
             * @method egret.gui.CollectionEvent#constructor
             * @param type {string}
             * @param bubbles {boolean}
             * @param cancelable {boolean}
             * @param kind {string}
             * @param location {number}
             * @param oldLocation {number}
             * @param items {any[]}
             * @param oldItems {any[]}
             */
            function CollectionEvent(type, bubbles, cancelable, kind, location, oldLocation, items, oldItems) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                if (kind === void 0) { kind = null; }
                if (location === void 0) { location = -1; }
                if (oldLocation === void 0) { oldLocation = -1; }
                if (items === void 0) { items = null; }
                if (oldItems === void 0) { oldItems = null; }
                var _this = _super.call(this, type, bubbles, cancelable) || this;
                /**
                 * 指示发生的事件类型。此属性值可以是 CollectionEventKind 类中的一个值，也可以是 null，用于指示类型未知。
                 * @member egret.gui.CollectionEvent#kind
                 */
                _this.kind = null;
                /**
                 * 受事件影响的项目的列表
                 * @member egret.gui.CollectionEvent#items
                 */
                _this.items = null;
                /**
                 * 仅当kind的值为CollectionEventKind.REPLACE时，表示替换前的项目列表
                 * @member egret.gui.CollectionEvent#oldItems
                 */
                _this.oldItems = null;
                _this.kind = kind;
                _this.location = location;
                _this.oldLocation = oldLocation;
                _this.items = items ? items : [];
                _this.oldItems = oldItems ? oldItems : [];
                return _this;
            }
            /**
             * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
             * @method egret.gui.CollectionEvent.dispatchCollectionEvent
             */
            CollectionEvent.dispatchCollectionEvent = function (target, type, kind, location, oldLocation, items, oldItems) {
                if (kind === void 0) { kind = null; }
                if (location === void 0) { location = -1; }
                if (oldLocation === void 0) { oldLocation = -1; }
                if (items === void 0) { items = null; }
                if (oldItems === void 0) { oldItems = null; }
                var event = egret.Event.create(CollectionEvent, type);
                event.kind = kind;
                event.location = location;
                event.oldLocation = oldLocation;
                event.items = items;
                event.oldItems = oldItems;
                var result = target.dispatchEvent(event);
                egret.Event.release(event);
                return result;
            };
            CollectionEvent.prototype.clean = function () {
                _super.prototype.clean.call(this);
                this.kind = null;
                this.items = null;
                this.oldItems = null;
                this.oldLocation = null;
            };
            return CollectionEvent;
        }(egret.Event));
        /**
         * 集合类数据发生改变
         * @constant egret.gui.CollectionEvent.COLLECTION_CHANGE
         */
        CollectionEvent.COLLECTION_CHANGE = "collectionChange";
        gui.CollectionEvent = CollectionEvent;
        __reflect(CollectionEvent.prototype, "egret.gui.CollectionEvent");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
