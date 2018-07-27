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
         * @class egret.gui.HSlider
         * @classdesc
         * 水平滑块控件
         * @extends egret.gui.SliderBase
         */
        var HSlider = (function (_super) {
            __extends(HSlider, _super);
            /**
             * 构造函数
             * @method egret.gui.HSlider#constructor
             */
            function HSlider() {
                return _super.call(this) || this;
            }
            /**
             * 将相对于轨道的 x,y 像素位置转换为介于最小值和最大值（包括两者）之间的一个值
             * @param x
             * @param y
             * @returns {number}
             */
            HSlider.prototype.pointToValue = function (x, y) {
                if (!this.thumb || !this.track)
                    return 0;
                var range = this.maximum - this.minimum;
                var thumbRange = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth;
                return this.minimum + ((thumbRange != 0) ? (x / thumbRange) * range : 0);
            };
            /**
             * 设置外观部件的边界，这些外观部件的几何图形不是完全由外观的布局指定的
             */
            HSlider.prototype.updateSkinDisplayList = function () {
                if (!this.thumb || !this.track)
                    return;
                var thumbRange = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth;
                var range = this.maximum - this.minimum;
                var thumbPosTrackX = (range > 0) ? ((this.pendingValue - this.minimum) / range) * thumbRange : 0;
                var thumbPos = this.track.localToGlobal(thumbPosTrackX, 0);
                var thumbPosX = thumbPos.x;
                var thumbPosY = thumbPos.y;
                var thumbPosParentX = this.thumb.parent.globalToLocal(thumbPosX, thumbPosY, egret.$TempPoint).x;
                this.thumb.setLayoutBoundsPosition(Math.round(thumbPosParentX), this.thumb.layoutBoundsY);
                if (this.showTrackHighlight && this.trackHighlight && this.trackHighlight.parent) {
                    var trackHighlightX = this.trackHighlight.parent.globalToLocal(thumbPosX, thumbPosY, egret.$TempPoint).x - thumbPosTrackX;
                    this.trackHighlight.x = Math.round(trackHighlightX);
                    this.trackHighlight.width = Math.round(thumbPosTrackX);
                }
            };
            return HSlider;
        }(gui.SliderBase));
        gui.HSlider = HSlider;
        __reflect(HSlider.prototype, "egret.gui.HSlider");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
