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
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        var setTimeoutCache = {};
        var setTimeoutIndex = 0;
        var setTimeoutCount = 0;
        var lastTime = 0;
        /**
         * @private
         */
        function $addTimer(listener, thisObject, delay) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var data = { listener: listener, thisObject: thisObject, delay: delay, params: args };
            setTimeoutCount++;
            if (setTimeoutCount == 1 && egret.sys.$ticker) {
                lastTime = egret.getTimer();
                egret.sys.$ticker.$startTick(timeoutUpdate, null);
            }
            setTimeoutIndex++;
            setTimeoutCache[setTimeoutIndex] = data;
            return setTimeoutIndex;
        }
        gui.$addTimer = $addTimer;
        /**
         * @private
         */
        function $clearTimer(key) {
            if (setTimeoutCache[key]) {
                setTimeoutCount--;
                delete setTimeoutCache[key];
                if (setTimeoutCount == 0 && egret.sys.$ticker) {
                    egret.sys.$ticker.$stopTick(timeoutUpdate, null);
                }
            }
        }
        gui.$clearTimer = $clearTimer;
        /**
         * @private
         *
         * @param dt
         */
        function timeoutUpdate(timeStamp) {
            var dt = timeStamp - lastTime;
            lastTime = timeStamp;
            for (var key in setTimeoutCache) {
                var key2 = key;
                var data = setTimeoutCache[key2];
                data.delay -= dt;
                if (data.delay <= 0) {
                    data.listener.apply(data.thisObject, data.params);
                    $clearTimer(key2);
                }
            }
            return false;
        }
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
