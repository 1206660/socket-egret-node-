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
         * @class egret.gui.TreeItemRenderer
         * @classdesc
         * Tree组件的项呈示器基类
         * @extends egret.gui.ItemRenderer
         * @implements egret.gui.ITreeItemRenderer
         */
        var TreeItemRenderer = (function (_super) {
            __extends(TreeItemRenderer, _super);
            /**
             * 构造函数
             * @method egret.gui.TreeItemRenderer#constructor
             */
            function TreeItemRenderer() {
                var _this = _super.call(this) || this;
                /**
                 * [SkinPart]图标显示对象
                 * @member egret.gui.TreeItemRenderer#iconDisplay
                 */
                _this.iconDisplay = null;
                /**
                 * [SkinPart]子节点开启按钮
                 * @member egret.gui.TreeItemRenderer#disclosureButton
                 */
                _this.disclosureButton = null;
                /**
                 * [SkinPart]用于调整缩进值的容器对象。
                 * @member egret.gui.TreeItemRenderer#contentGroup
                 */
                _this.contentGroup = null;
                /**
                 *
                 * @type {number}
                 * @private
                 */
                _this._indentation = 17;
                /**
                 *
                 * @type {null}
                 * @private
                 */
                _this._iconSkinName = null;
                /**
                 *
                 * @type {number}
                 * @private
                 */
                _this._depth = 0;
                /**
                 *
                 * @type {boolean}
                 * @private
                 */
                _this._hasChildren = false;
                /**
                 *
                 * @type {boolean}
                 * @private
                 */
                _this._isOpen = false;
                _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onItemMouseDown, _this, false, 1000);
                return _this;
            }
            TreeItemRenderer.prototype.onItemMouseDown = function (event) {
                if (event.target == this.disclosureButton) {
                    event.stopImmediatePropagation();
                }
            };
            Object.defineProperty(TreeItemRenderer.prototype, "indentation", {
                /**
                 * 子节点相对父节点的缩进值，以像素为单位。默认17。
                 * @member egret.gui.TreeItemRenderer#indentation
                 */
                get: function () {
                    return this._indentation;
                },
                set: function (value) {
                    this._indentation = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TreeItemRenderer.prototype, "iconSkinName", {
                /**
                 * @member egret.gui.TreeItemRenderer#iconSkinName
                 */
                get: function () {
                    return this._iconSkinName;
                },
                set: function (value) {
                    if (this._iconSkinName == value)
                        return;
                    this._iconSkinName = value;
                    if (this.iconDisplay) {
                        this.iconDisplay.source = this._iconSkinName;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TreeItemRenderer.prototype, "depth", {
                /**
                 * @member egret.gui.TreeItemRenderer#depth
                 */
                get: function () {
                    return this._depth;
                },
                set: function (value) {
                    if (value == this._depth)
                        return;
                    this._depth = value;
                    if (this.contentGroup) {
                        this.contentGroup.x = this._depth * this._indentation;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TreeItemRenderer.prototype, "hasChildren", {
                /**
                 * @member egret.gui.TreeItemRenderer#hasChildren
                 */
                get: function () {
                    return this._hasChildren;
                },
                set: function (value) {
                    if (this._hasChildren == value)
                        return;
                    this._hasChildren = value;
                    if (this.disclosureButton) {
                        this.disclosureButton.visible = this._hasChildren;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TreeItemRenderer.prototype, "opened", {
                /**
                 * @member egret.gui.TreeItemRenderer#opened
                 */
                get: function () {
                    return this._isOpen;
                },
                set: function (value) {
                    if (this._isOpen == value)
                        return;
                    this._isOpen = value;
                    if (this.disclosureButton) {
                        this.disclosureButton.selected = this._isOpen;
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 添加外观部件时调用
             * @method egret.gui.TreeItemRenderer#partAdded
             * @param partName {string}
             * @param instance {any}
             */
            TreeItemRenderer.prototype.partAdded = function (partName, instance) {
                _super.prototype.partAdded.call(this, partName, instance);
                if (instance == this.iconDisplay) {
                    this.iconDisplay.source = this._iconSkinName;
                }
                else if (instance == this.disclosureButton) {
                    this.disclosureButton.visible = this._hasChildren;
                    this.disclosureButton.selected = this._isOpen;
                    this.disclosureButton._autoSelected = false;
                    this.disclosureButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.disclosureButton_mouseDownHandler, this);
                }
                else if (instance == this.contentGroup) {
                    this.contentGroup.x = this._depth * this._indentation;
                }
            };
            /**
             * 删除外观部件的实例时调用
             * @method egret.gui.TreeItemRenderer#partRemoved
             * @param partName {string}
             * @param instance {any}
             */
            TreeItemRenderer.prototype.partRemoved = function (partName, instance) {
                _super.prototype.partRemoved.call(this, partName, instance);
                if (instance == this.iconDisplay) {
                    this.iconDisplay.source = null;
                }
                else if (instance == this.disclosureButton) {
                    this.disclosureButton.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.disclosureButton_mouseDownHandler, this);
                    this.disclosureButton._autoSelected = true;
                    this.disclosureButton.visible = true;
                }
            };
            /**
             * 鼠标在disclosureButton上按下
             * @method egret.gui.TreeItemRenderer#disclosureButton_mouseDownHandler
             * @param event {TouchEvent}
             */
            TreeItemRenderer.prototype.disclosureButton_mouseDownHandler = function (event) {
                gui.TreeEvent.dispatchTreeEvent(this, gui.TreeEvent.ITEM_OPENING, this.itemIndex, this.data, this, !this._isOpen, false, true);
            };
            return TreeItemRenderer;
        }(gui.ItemRenderer));
        gui.TreeItemRenderer = TreeItemRenderer;
        __reflect(TreeItemRenderer.prototype, "egret.gui.TreeItemRenderer", ["egret.gui.ITreeItemRenderer", "egret.gui.IItemRenderer", "egret.gui.ILayoutElement", "egret.IEventDispatcher"]);
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
