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
    /**
     * @classdesc IO流事件，当错误导致输入或输出操作失败时调度 IOErrorEvent 对象。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/IOErrorEvent.ts
     * @language en_US
     */
    /**
     * @classdesc IO流事件，当错误导致输入或输出操作失败时调度 IOErrorEvent 对象。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/IOErrorEvent.ts
     * @language zh_CN
     */
    var IOErrorEvent = (function (_super) {
        __extends(IOErrorEvent, _super);
        /**
         * Create a egret.IOErrorEvent objects
         * @param type {string} Type of event, accessible as Event.type.
         * @param bubbles {boolean} Determines whether the Event object participates in the bubbling stage of the event flow. The default value is false.
         * @param cancelable {boolean} Determine whether the Event object can be canceled. The default value is false.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 创建一个 egret.IOErrorEvent 对象
         * @param type {string} 事件的类型，可以作为 Event.type 访问。
         * @param bubbles {boolean} 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable {boolean} 确定是否可以取消 Event 对象。默认值为 false。
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        function IOErrorEvent(type, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            return _super.call(this, type, bubbles, cancelable) || this;
        }
        /**
         * EventDispatcher object using the specified event object thrown Event. The objects will be thrown in the object cache pool for the next round robin.
         * @param target {egret.IEventDispatcher} Distribute event target
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target {egret.IEventDispatcher} 派发事件目标
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        IOErrorEvent.dispatchIOErrorEvent = function (target) {
            var event = egret.Event.create(IOErrorEvent, IOErrorEvent.IO_ERROR);
            var result = target.dispatchEvent(event);
            egret.Event.release(event);
            return result;
        };
        return IOErrorEvent;
    }(egret.Event));
    /**
     * io error
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * io发生错误
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    IOErrorEvent.IO_ERROR = "ioError";
    egret.IOErrorEvent = IOErrorEvent;
    __reflect(IOErrorEvent.prototype, "egret.IOErrorEvent");
})(egret || (egret = {}));
