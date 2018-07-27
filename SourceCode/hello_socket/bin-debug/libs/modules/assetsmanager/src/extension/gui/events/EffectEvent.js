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
        var EffectEvent = (function (_super) {
            __extends(EffectEvent, _super);
            /**
             * 构造函数
             */
            function EffectEvent(eventType, bubbles, cancelable, effectInstance) {
                if (bubbles === void 0) { bubbles = false; }
                if (cancelable === void 0) { cancelable = false; }
                if (effectInstance === void 0) { effectInstance = null; }
                var _this = _super.call(this, eventType, bubbles, cancelable) || this;
                _this.effectInstance = effectInstance;
                return _this;
            }
            return EffectEvent;
        }(egret.Event));
        /**
         * 动画播放结束
         */
        EffectEvent.EFFECT_END = "effectEnd";
        /**
         * 动画播放被停止
         */
        EffectEvent.EFFECT_STOP = "effectStop";
        /**
         * 动画播放开始
         */
        EffectEvent.EFFECT_START = "effectStart";
        /**
         * 动画开始重复播放
         */
        EffectEvent.EFFECT_REPEAT = "effectRepeat";
        /**
         * 动画播放更新
         */
        EffectEvent.EFFECT_UPDATE = "effectUpdate";
        gui.EffectEvent = EffectEvent;
        __reflect(EffectEvent.prototype, "egret.gui.EffectEvent");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
