// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransferedObjectUUID = getTransferedObjectUUID;
function getTransferedObjectUUID(name, id) {
    return name.toLowerCase() + "-" + id;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReactNativeBridge = exports.WeexBridge = exports.Image = undefined;
exports.enable = enable;

var _canvas = __webpack_require__(5);

var _canvas2 = _interopRequireDefault(_canvas);

var _image = __webpack_require__(19);

var _image2 = _interopRequireDefault(_image);

var _RenderingContext = __webpack_require__(3);

var _RenderingContext2 = _interopRequireDefault(_RenderingContext);

var _RenderingContext3 = __webpack_require__(2);

var _RenderingContext4 = _interopRequireDefault(_RenderingContext3);

var _bridgeWeex = __webpack_require__(20);

var _bridgeWeex2 = _interopRequireDefault(_bridgeWeex);

var _bridgeReactnative = __webpack_require__(21);

var _bridgeReactnative2 = _interopRequireDefault(_bridgeReactnative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = exports.Image = _image2.default;

var WeexBridge = exports.WeexBridge = _bridgeWeex2.default;
var ReactNativeBridge = exports.ReactNativeBridge = _bridgeReactnative2.default;

function enable(el) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        bridge = _ref.bridge,
        debug = _ref.debug,
        disableAutoSwap = _ref.disableAutoSwap,
        disableComboCommands = _ref.disableComboCommands;

    var GBridge = _image2.default.GBridge = _canvas2.default.GBridge = _RenderingContext2.default.GBridge = _RenderingContext4.default.GBridge = bridge;

    GBridge.callEnable(el.ref, [0, // renderMode: 0--RENDERMODE_WHEN_DIRTY, 1--RENDERMODE_CONTINUOUSLY
    -1, // hybridLayerType:  0--LAYER_TYPE_NONE 1--LAYER_TYPE_SOFTWARE 2--LAYER_TYPE_HARDWARE
    false, // supportScroll
    false, // newCanvasMode
    1, // compatible
    'white', // clearColor
    false // sameLevel: newCanvasMode = true && true => GCanvasView and Webview is same level
    ]);

    if (debug === true) {
        GBridge.callEnableDebug();
    }
    if (disableComboCommands) {
        GBridge.callEnableDisableCombo();
    }

    var canvas = new _canvas2.default(el.ref, { disableAutoSwap: disableAutoSwap });
    canvas.width = el.style.width;
    canvas.height = el.style.height;

    return canvas;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FillStylePattern = __webpack_require__(6);

var _FillStylePattern2 = _interopRequireDefault(_FillStylePattern);

var _FillStyleLinearGradient = __webpack_require__(7);

var _FillStyleLinearGradient2 = _interopRequireDefault(_FillStyleLinearGradient);

var _FillStyleRadialGradient = __webpack_require__(8);

var _FillStyleRadialGradient2 = _interopRequireDefault(_FillStyleRadialGradient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderingContext2D = function () {

    // _imageMap = new GHashMap();
    // _textureMap = new GHashMap();

    function CanvasRenderingContext2D() {
        _classCallCheck(this, CanvasRenderingContext2D);

        this._drawCommands = '';
        this._globalAlpha = 1.0;
        this._fillStyle = 'rgb(0,0,0)';
        this._strokeStyle = 'rgb(0,0,0)';
        this._lineWidth = 1;
        this._lineCap = 'butt';
        this._lineJoin = 'miter';
        this._miterLimit = 10;
        this._globalCompositeOperation = 'source-over';
        this._textAlign = 'start';
        this._textBaseline = 'alphabetic';
        this._font = '10px sans-serif';
        this._savedGlobalAlpha = [];
        this.timer = null;
        this.componentId = null;

        this.createRadialGradient = function (x0, y0, r0, x1, y1, r1) {
            return new _FillStyleRadialGradient2.default(x0, y0, r0, x1, y1, r1);
        };

        this.quadraticCurveTo = function (cpx, cpy, x, y) {
            this._drawCommands = this._drawCommands.concat("u" + cpx + "," + cpy + "," + x + "," + y + ";");
        };

        this.strokeText = function (text, x, y) {
            var tmptext = text.replace(/!/g, "!!");
            tmptext = tmptext.replace(/,/g, "!,");
            tmptext = tmptext.replace(/;/g, "!;");
            this._drawCommands = this._drawCommands.concat("U" + tmptext + "," + x + "," + y + ",0.0;");
        };

        this.measureText = function (text) {
            throw new Error('GCanvas not supported yet');
        };

        this.isPointInPath = function (x, y) {
            throw new Error('GCanvas not supported yet');
        };

        this.className = 'CanvasRenderingContext2D';
    }

    _createClass(CanvasRenderingContext2D, [{
        key: 'setTransform',
        value: function setTransform(a, b, c, d, tx, ty) {
            this._drawCommands = this._drawCommands.concat("t" + (a === 1 ? "1" : a.toFixed(2)) + "," + (b === 0 ? "0" : b.toFixed(2)) + "," + (c === 0 ? "0" : c.toFixed(2)) + "," + (d === 1 ? "1" : d.toFixed(2)) + "," + tx.toFixed(2) + "," + ty.toFixed(2) + ";");
        }
    }, {
        key: 'transform',
        value: function transform(a, b, c, d, tx, ty) {
            this._drawCommands = this._drawCommands.concat("f" + (a === 1 ? "1" : a.toFixed(2)) + "," + (b === 0 ? "0" : b.toFixed(2)) + "," + (c === 0 ? "0" : c.toFixed(2)) + "," + (d === 1 ? "1" : d.toFixed(2)) + "," + tx + "," + ty + ";");
        }
    }, {
        key: 'resetTransform',
        value: function resetTransform() {
            this._drawCommands = this._drawCommands.concat("m;");
        }
    }, {
        key: 'scale',
        value: function scale(a, d) {
            this._drawCommands = this._drawCommands.concat("k" + a.toFixed(2) + "," + d.toFixed(2) + ";");
        }
    }, {
        key: 'rotate',
        value: function rotate(angle) {
            this._drawCommands = this._drawCommands.concat("r" + angle.toFixed(6) + ";");
        }
    }, {
        key: 'translate',
        value: function translate(tx, ty) {
            this._drawCommands = this._drawCommands.concat("l" + tx.toFixed(2) + "," + ty.toFixed(2) + ";");
        }
    }, {
        key: 'save',
        value: function save() {
            this._savedGlobalAlpha.push(this._globalAlpha);
            this._drawCommands = this._drawCommands.concat("v;");
        }
    }, {
        key: 'restore',
        value: function restore() {
            this._drawCommands = this._drawCommands.concat("e;");
            this._globalAlpha = this._savedGlobalAlpha.pop();
        }
    }, {
        key: 'createPattern',
        value: function createPattern(img, pattern) {
            return new _FillStylePattern2.default(img, pattern);
        }
    }, {
        key: 'createLinearGradient',
        value: function createLinearGradient(x0, y0, x1, y1) {
            return new _FillStyleLinearGradient2.default(x0, y0, x1, y1);
        }
    }, {
        key: 'strokeRect',
        value: function strokeRect(x, y, w, h) {
            this._drawCommands = this._drawCommands.concat("s" + x + "," + y + "," + w + "," + h + ";");
        }
    }, {
        key: 'clearRect',
        value: function clearRect(x, y, w, h) {
            this._drawCommands = this._drawCommands.concat("c" + x + "," + y + "," + w + "," + h + ";");
        }
    }, {
        key: 'clip',
        value: function clip() {
            this._drawCommands = this._drawCommands.concat("p;");
        }
    }, {
        key: 'resetClip',
        value: function resetClip() {
            this._drawCommands = this._drawCommands.concat("q;");
        }
    }, {
        key: 'closePath',
        value: function closePath() {
            this._drawCommands = this._drawCommands.concat("o;");
        }
    }, {
        key: 'moveTo',
        value: function moveTo(x, y) {
            this._drawCommands = this._drawCommands.concat("g" + x.toFixed(2) + "," + y.toFixed(2) + ";");
        }
    }, {
        key: 'lineTo',
        value: function lineTo(x, y) {
            this._drawCommands = this._drawCommands.concat("i" + x.toFixed(2) + "," + y.toFixed(2) + ";");
        }
    }, {
        key: 'bezierCurveTo',
        value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
            this._drawCommands = this._drawCommands.concat("z" + cp1x.toFixed(2) + "," + cp1y.toFixed(2) + "," + cp2x.toFixed(2) + "," + cp2y.toFixed(2) + "," + x.toFixed(2) + "," + y.toFixed(2) + ";");
        }
    }, {
        key: 'arcTo',
        value: function arcTo(x1, y1, x2, y2, radius) {
            this._drawCommands = this._drawCommands.concat("h" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + radius + ";");
        }
    }, {
        key: 'beginPath',
        value: function beginPath() {
            this._drawCommands = this._drawCommands.concat("b;");
        }
    }, {
        key: 'fillRect',
        value: function fillRect(x, y, w, h) {
            this._drawCommands = this._drawCommands.concat("n" + x + "," + y + "," + w + "," + h + ";");
        }
    }, {
        key: 'rect',
        value: function rect(x, y, w, h) {
            this._drawCommands = this._drawCommands.concat("w" + x + "," + y + "," + w + "," + h + ";");
        }
    }, {
        key: 'fill',
        value: function fill() {
            this._drawCommands = this._drawCommands.concat("L;");
        }
    }, {
        key: 'stroke',
        value: function stroke(path) {
            this._drawCommands = this._drawCommands.concat("x;");
        }
    }, {
        key: 'arc',
        value: function arc(x, y, radius, startAngle, endAngle, anticlockwise) {

            var ianticlockwise = 0;
            if (anticlockwise) {
                ianticlockwise = 1;
            }

            this._drawCommands = this._drawCommands.concat("y" + x.toFixed(2) + "," + y.toFixed(2) + "," + radius.toFixed(2) + "," + startAngle + "," + endAngle + "," + ianticlockwise + ";");
        }
    }, {
        key: 'fillText',
        value: function fillText(text, x, y) {
            var tmptext = text.replace(/!/g, "!!");
            tmptext = tmptext.replace(/,/g, "!,");
            tmptext = tmptext.replace(/;/g, "!;");
            this._drawCommands = this._drawCommands.concat("T" + tmptext + "," + x + "," + y + ",0.0;");
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {
            var numArgs = arguments.length;
            function drawImageCommands() {

                if (numArgs === 3) {
                    var x = parseFloat(sx) || 0.0;
                    var y = parseFloat(sy) || 0.0;

                    return "d" + image._id + ",0,0," + image.width + "," + image.height + "," + x + "," + y + "," + image.width + "," + image.height + ";";
                } else if (numArgs === 5) {
                    var _x = parseFloat(sx) || 0.0;
                    var _y = parseFloat(sy) || 0.0;
                    var width = parseInt(sw) || image.width;
                    var height = parseInt(sh) || image.height;

                    return "d" + image._id + ",0,0," + image.width + "," + image.height + "," + _x + "," + _y + "," + width + "," + height + ";";
                } else if (numArgs === 9) {
                    sx = parseFloat(sx) || 0.0;
                    sy = parseFloat(sy) || 0.0;
                    sw = parseInt(sw) || image.width;
                    sh = parseInt(sh) || image.height;
                    dx = parseFloat(dx) || 0.0;
                    dy = parseFloat(dy) || 0.0;
                    dw = parseInt(dw) || image.width;
                    dh = parseInt(dh) || image.height;

                    return "d" + image._id + "," + sx + "," + sy + "," + sw + "," + sh + "," + dx + "," + dy + "," + dw + "," + dh + ";";
                }
            }
            CanvasRenderingContext2D.GBridge.bindImageTexture(this.componentId, image.src, image._id);
            this._drawCommands += drawImageCommands();
        }
    }, {
        key: 'fillStyle',
        set: function set(value) {
            this._fillStyle = value;

            if (typeof value == 'string') {
                this._drawCommands = this._drawCommands.concat("F" + value + ";");
            } else if (value instanceof _FillStylePattern2.default) {
                var image = value._img;
                CanvasRenderingContext2D.GBridge.bindImageTexture(this.componentId, image.src, image._id);
                this._drawCommands = this._drawCommands.concat("G" + image._id + "," + value._style + ";");
            } else if (value instanceof _FillStyleLinearGradient2.default) {
                var command = "D" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._stop_count;
                for (var i = 0; i < value._stop_count; ++i) {
                    command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
                }
                this._drawCommands = this._drawCommands.concat(command + ";");
            } else if (value instanceof _FillStyleRadialGradient2.default) {
                var command = "H" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._start_pos._r.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._end_pos._r.toFixed(2) + "," + value._stop_count;
                for (var i = 0; i < value._stop_count; ++i) {
                    command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
                }
                this._drawCommands = this._drawCommands.concat(command + ";");
            }
        },
        get: function get() {
            return this._fillStyle;
        }
    }, {
        key: 'globalAlpha',
        get: function get() {
            return this._globalAlpha;
        },
        set: function set(value) {
            this._globalAlpha = value;
            this._drawCommands = this._drawCommands.concat("a" + value.toFixed(2) + ";");
        }
    }, {
        key: 'strokeStyle',
        get: function get() {
            return this._strokeStyle;
        },
        set: function set(value) {

            this._strokeStyle = value;

            if (typeof value == 'string') {
                this._drawCommands = this._drawCommands.concat("S" + value + ";");
            } else if (value instanceof _FillStylePattern2.default) {
                var image = value._img;
                CanvasRenderingContext2D.GBridge.bindImageTexture(this.componentId, image.src, image._id);
                this._drawCommands = this._drawCommands.concat("G" + image._id + "," + value._style + ";");
            } else if (value instanceof _FillStyleLinearGradient2.default) {
                var command = "D" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._stop_count;

                for (var i = 0; i < value._stop_count; ++i) {
                    command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
                }
                this._drawCommands = this._drawCommands.concat(command + ";");
            } else if (value instanceof _FillStyleRadialGradient2.default) {
                var command = "H" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._start_pos._r.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y + ",".toFixed(2) + value._end_pos._r.toFixed(2) + "," + value._stop_count;

                for (var i = 0; i < value._stop_count; ++i) {
                    command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
                }
                this._drawCommands = this._drawCommands.concat(command + ";");
            }
        }
    }, {
        key: 'lineWidth',
        get: function get() {
            return this._lineWidth;
        },
        set: function set(value) {
            this._lineWidth = value;
            this._drawCommands = this._drawCommands.concat("W" + value + ";");
        }
    }, {
        key: 'lineCap',
        get: function get() {
            return this._lineCap;
        },
        set: function set(value) {
            this._lineCap = value;
            this._drawCommands = this._drawCommands.concat("C" + value + ";");
        }
    }, {
        key: 'lineJoin',
        get: function get() {
            return this._lineJoin;
        },
        set: function set(value) {
            this._lineJoin = value;
            this._drawCommands = this._drawCommands.concat("J" + value + ";");
        }
    }, {
        key: 'miterLimit',
        get: function get() {
            return this._miterLimit;
        },
        set: function set(value) {
            this._miterLimit = value;
            this._drawCommands = this._drawCommands.concat("M" + value + ";");
        }
    }, {
        key: 'globalCompositeOperation',
        get: function get() {
            return this._globalCompositeOperation;
        },
        set: function set(value) {

            this._globalCompositeOperation = value;
            var mode = 0;
            switch (value) {
                case "source-over":
                    mode = 0;
                    break;
                case "source-atop":
                    mode = 5;
                    break;
                case "source-in":
                    mode = 0;
                    break;
                case "source-out":
                    mode = 2;
                    break;
                case "destination-over":
                    mode = 4;
                    break;
                case "destination-atop":
                    mode = 4;
                    break;
                case "destination-in":
                    mode = 4;
                    break;
                case "destination-out":
                    mode = 3;
                    break;
                case "lighter":
                    mode = 1;
                    break;
                case "copy":
                    mode = 2;
                    break;
                case "xor":
                    mode = 6;
                    break;
                default:
                    mode = 0;
            }

            this._drawCommands = this._drawCommands.concat("B" + mode + ";");
        }
    }, {
        key: 'textAlign',
        get: function get() {
            return this._textAlign;
        },
        set: function set(value) {

            this._textAlign = value;
            var Align = 0;
            switch (value) {
                case "start":
                    Align = 0;
                    break;
                case "end":
                    Align = 1;
                    break;
                case "left":
                    Align = 2;
                    break;
                case "center":
                    Align = 3;
                    break;
                case "right":
                    Align = 4;
                    break;
                default:
                    Align = 0;
            }

            this._drawCommands = this._drawCommands.concat("A" + Align + ";");
        }
    }, {
        key: 'textBaseline',
        get: function get() {
            return this._textBaseline;
        },
        set: function set(value) {
            this._textBaseline = value;
            var baseline = 0;
            switch (value) {
                case "alphabetic":
                    baseline = 0;
                    break;
                case "middle":
                    baseline = 1;
                    break;
                case "top":
                    baseline = 2;
                    break;
                case "hanging":
                    baseline = 3;
                    break;
                case "bottom":
                    baseline = 4;
                    break;
                case "ideographic":
                    baseline = 5;
                    break;
                default:
                    baseline = 0;
                    break;
            }

            this._drawCommands = this._drawCommands.concat("E" + baseline + ";");
        }
    }, {
        key: 'font',
        get: function get() {
            return this._font;
        },
        set: function set(value) {
            this._font = value;
            this._drawCommands = this._drawCommands.concat("j" + value + ";");
        }
    }]);

    return CanvasRenderingContext2D;
}();

exports.default = CanvasRenderingContext2D;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _GLenum = __webpack_require__(9);

var _GLenum2 = _interopRequireDefault(_GLenum);

var _ActiveInfo = __webpack_require__(10);

var _ActiveInfo2 = _interopRequireDefault(_ActiveInfo);

var _Buffer = __webpack_require__(11);

var _Buffer2 = _interopRequireDefault(_Buffer);

var _Framebuffer = __webpack_require__(12);

var _Framebuffer2 = _interopRequireDefault(_Framebuffer);

var _Renderbuffer = __webpack_require__(13);

var _Renderbuffer2 = _interopRequireDefault(_Renderbuffer);

var _Texture = __webpack_require__(14);

var _Texture2 = _interopRequireDefault(_Texture);

var _Program = __webpack_require__(15);

var _Program2 = _interopRequireDefault(_Program);

var _Shader = __webpack_require__(16);

var _Shader2 = _interopRequireDefault(_Shader);

var _ShaderPrecisionFormat = __webpack_require__(17);

var _ShaderPrecisionFormat2 = _interopRequireDefault(_ShaderPrecisionFormat);

var _UniformLocation = __webpack_require__(18);

var _UniformLocation2 = _interopRequireDefault(_UniformLocation);

var _GLmethod = __webpack_require__(4);

var _GLmethod2 = _interopRequireDefault(_GLmethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var processArray = function processArray(array) {
    var checkArrayType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    function joinArray(arr, sep) {
        var res = '';
        for (var i = 0; i < arr.length; i++) {
            if (i !== 0) {
                res += sep;
            }
            res += arr[i];
        }
        return res;
    }

    var type = 'Float32Array';
    if (checkArrayType) {
        if (array instanceof Uint8Array) {
            type = 'Uint8Array';
        } else if (array instanceof Uint16Array) {
            type = 'Uint16Array';
        } else if (array instanceof Uint32Array) {
            type = 'Uint32Array';
        } else if (array instanceof Float32Array) {
            type = 'Float32Array';
        } else {
            throw new Error('Check array type failed. Array type is ' + (typeof array === 'undefined' ? 'undefined' : _typeof(array)));
        }
    }

    var ArrayTypes = {
        Uint8Array: 1,
        Uint16Array: 2,
        Uint32Array: 4,
        Float32Array: 14
    };
    return ArrayTypes[type] + ',' + btoa(joinArray(array, ','));
};

var WebGLRenderingContext = function () {
    function WebGLRenderingContext(canvas, type, attrs) {
        var _this = this;

        _classCallCheck(this, WebGLRenderingContext);

        _initialiseProps.call(this);

        this._canvas = canvas;
        this._type = type;
        this._version = 'WebGL 1.0';
        this._attrs = attrs;
        this._map = new Map();

        Object.keys(_GLenum2.default).forEach(function (name) {
            return Object.defineProperty(_this, name, {
                value: _GLenum2.default[name]
            });
        });
    }

    // static GBridge = null;

    _createClass(WebGLRenderingContext, [{
        key: 'canvas',
        get: function get() {
            return this._canvas;
        }
    }]);

    return WebGLRenderingContext;
}();

var _initialiseProps = function _initialiseProps() {
    this.className = 'WebGLRenderingContext';

    this.activeTexture = function (textureUnit) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.activeTexture + ',' + textureUnit, true);
    };

    this.attachShader = function (progarm, shader) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.attachShader + ',' + progarm.id + ',' + shader.id, true);
    };

    this.bindAttribLocation = function (program, index, name) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.bindAttribLocation + ',' + program.id + ',' + index + ',' + name, true);
    };

    this.bindBuffer = function (target, buffer) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.bindBuffer + ',' + target + ',' + (buffer ? buffer.id : 0), true);
    };

    this.bindFramebuffer = function (target, framebuffer) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.bindFramebuffer + ',' + target + ',' + (framebuffer ? framebuffer.id : 0), true);
    };

    this.bindRenderbuffer = function (target, renderBuffer) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.bindRenderbuffer + ',' + target + ',' + (renderBuffer ? renderBuffer.id : 0), true);
    };

    this.bindTexture = function (target, texture) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.bindTexture + ',' + target + ',' + (texture ? texture.id : 0), true);
    };

    this.blendColor = function (r, g, b, a) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.blendColor + ',' + target + ',' + r + ',' + g + ',' + b + ',' + a, true);
    };

    this.blendEquation = function (mode) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.blendEquation + ',' + mode, true);
    };

    this.blendEquationSeparate = function (modeRGB, modeAlpha) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.blendEquationSeparate + ',' + modeRGB + ',' + modeAlpha, true);
    };

    this.blendFunc = function (sfactor, dfactor) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.blendFunc + ',' + sfactor + ',' + dfactor, true);
    };

    this.blendFuncSeparate = function (srcRGB, dstRGB, srcAlpha, dstAlpha) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.blendFuncSeparate + ',' + srcRGB + ',' + dstRGB + ',' + srcAlpha + ',' + dstAlpha, true);
    };

    this.bufferData = function (target, data, usage) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.bufferData + ',' + target + ',' + processArray(data, true) + ',' + usage, true);
    };

    this.bufferSubData = function (target, offset, data) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.bufferSubData + ',' + target + ',' + offset + ',' + processArray(data, true), true);
    };

    this.checkFramebufferStatus = function (target) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.checkFramebufferStatus + ',' + target);
        return Number(result);
    };

    this.clear = function (mask) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.clear + ',' + mask);
        this._canvas._needRender = true;
    };

    this.clearColor = function (r, g, b, a) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.clearColor + ',' + r + ',' + g + ',' + b, true);
    };

    this.clearDepth = function (depth) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.clearDepth + ',' + depth, true);
    };

    this.clearStencil = function (s) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.clearStencil + ',' + s);
    };

    this.colorMask = function (r, g, b, a) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.colorMask + ',' + r + ',' + g + ',' + b + ',' + a);
    };

    this.compileShader = function (shader) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.compileShader + ',' + shader.id, true);
    };

    this.compressedTexImage2D = function (target, level, internalformat, width, height, border, pixels) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.compressedTexImage2D + ',' + target + ',' + level + ',' + internalformat + ',' + width + ',' + height + ',' + border + ',' + processArray(pixels), true);
    };

    this.compressedTexSubImage2D = function (target, level, xoffset, yoffset, width, height, format, pixels) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.compressedTexSubImage2D + ',' + target + ',' + level + ',' + xoffset + ',' + yoffset + ',' + width + ',' + height + ',' + format + ',' + processArray(pixels), true);
    };

    this.copyTexImage2D = function (target, level, internalformat, x, y, width, height, border) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.copyTexImage2D + ',' + target + ',' + level + ',' + internalformat + ',' + x + ',' + y + ',' + width + ',' + height + ',' + border, true);
    };

    this.copyTexSubImage2D = function (target, level, xoffset, yoffset, x, y, width, height) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.copyTexSubImage2D + ',' + target + ',' + level + ',' + xoffset + ',' + yoffset + ',' + x + ',' + y + ',' + width + ',' + height);
    };

    this.createBuffer = function () {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.createBuffer + '');
        var buffer = new _Buffer2.default(result);
        this._map.set(buffer.uuid(), buffer);
        return buffer;
    };

    this.createFramebuffer = function () {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.createFramebuffer + '');
        var framebuffer = new _Framebuffer2.default(result);
        this._map.set(framebuffer.uuid(), framebuffer);
        return framebuffer;
    };

    this.createProgram = function () {
        var id = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.createProgram + '');
        var program = new _Program2.default(id);
        this._map.set(program.uuid(), program);
        return program;
    };

    this.createRenderbuffer = function () {
        var id = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.createRenderbuffer + '');
        var renderBuffer = new _Renderbuffer2.default(id);
        this._map.set(renderBuffer.uuid(), renderBuffer);
        return renderBuffer;
    };

    this.createShader = function (type) {
        var id = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.createShader + ',' + type);
        var shader = new _Shader2.default(id, type);
        this._map.set(shader.uuid(), shader);
        return shader;
    };

    this.createTexture = function () {
        var id = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.createTexture + '');
        var texture = new _Texture2.default(id);
        this._map.set(texture.uuid(), texture);
        return texture;
    };

    this.cullFace = function (mode) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.cullFace + ',' + mode, true);
    };

    this.deleteBuffer = function (buffer) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.deleteBuffer + ',' + buffer.id, true);
    };

    this.deleteFramebuffer = function (framebuffer) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.deleteFramebuffer + ',' + framebuffer.id, true);
    };

    this.deleteProgram = function (program) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.deleteProgram + ',' + program.id, true);
    };

    this.deleteRenderbuffer = function (renderbuffer) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.deleteRenderbuffer + ',' + renderbuffer.id, true);
    };

    this.deleteShader = function (shader) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.deleteShader + ',' + shader.id, true);
    };

    this.deleteTexture = function (texture) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.deleteTexture + ',' + texture.id, true);
    };

    this.depthFunc = function (func) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.depthFunc + ',' + func);
    };

    this.depthMask = function (flag) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.depthMask + ',' + Number(flag), true);
    };

    this.depthRange = function (zNear, zFar) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.depthRange + ',' + zNear + ',' + zFar, true);
    };

    this.detachShader = function (program, shader) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.detachShader + ',' + program.id + ',' + shader.id, true);
    };

    this.disable = function (cap) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.disable + ',' + cap, true);
    };

    this.disableVertexAttribArray = function (index) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.disableVertexAttribArray + ',' + index, true);
    };

    this.drawArrays = function (mode, first, count) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.drawArrays + ',' + mode + ',' + first + ',' + count);
        this._canvas._needRender = true;
    };

    this.drawElements = function (mode, count, type, offset) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.drawElements + ',' + mode + ',' + count + ',' + type + ',' + offset + ';');
        this._canvas._needRender = true;
    };

    this.enable = function (cap) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.enable + ',' + cap, true);
    };

    this.enableVertexAttribArray = function (index) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.enableVertexAttribArray + ',' + index, true);
    };

    this.flush = function () {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.flush + '');
    };

    this.framebufferRenderbuffer = function (target, attachment, textarget, texture, level) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.framebufferRenderbuffer + ',' + target + ',' + attachment + ',' + textarget + ',' + (texture ? texture.id : 0) + ',' + level, true);
    };

    this.framebufferTexture2D = function (target, attachment, textarget, texture, level) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.framebufferTexture2D + ',' + target + ',' + attachment + ',' + textarget + ',' + (texture ? texture.id : 0) + ',' + level, true);
    };

    this.frontFace = function (mode) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.frontFace + ',' + mode, true);
    };

    this.generateMipmap = function (target) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.generateMipmap + ',' + target, true);
    };

    this.getActiveAttrib = function (progarm, index) {
        var resultString = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getActiveAttrib + ',' + progarm.id + ',' + index);

        var _resultString$split = resultString.split(','),
            _resultString$split2 = _slicedToArray(_resultString$split, 3),
            type = _resultString$split2[0],
            size = _resultString$split2[1],
            name = _resultString$split2[2];

        return new _ActiveInfo2.default({
            type: Number(type),
            size: Number(size),
            name: name
        });
    };

    this.getActiveUniform = function (progarm, index) {
        var resultString = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getActiveUniform + ',' + progarm.id + ',' + index);

        var _resultString$split3 = resultString.split(','),
            _resultString$split4 = _slicedToArray(_resultString$split3, 3),
            type = _resultString$split4[0],
            size = _resultString$split4[1],
            name = _resultString$split4[2];

        return new _ActiveInfo2.default({
            type: Number(type),
            size: Number(size),
            name: name
        });
    };

    this.getAttachedShaders = function (progarm) {
        var _this2 = this;

        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getAttachedShaders + ',' + progarm.id);

        var _result = _toArray(result),
            type = _result[0],
            ids = _result.slice(1);

        return ids.map(function (id) {
            return _this2._map.get(_Shader2.default.uuid(id));
        });
    };

    this.getAttribLocation = function (progarm, name) {
        return WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getAttribLocation + ',' + progarm.id + ',' + name);
    };

    this.getBufferParameter = function (target, pname) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getBufferParameter + ',' + target + ',' + pname);

        var _getBufferParameter = getBufferParameter,
            _getBufferParameter2 = _slicedToArray(_getBufferParameter, 2),
            type = _getBufferParameter2[0],
            res = _getBufferParameter2[1];

        return res;
    };

    this.getError = function () {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getError + '');
        return result;
    };

    this.getExtension = function (name) {
        return null;
    };

    this.getFramebufferAttachmentParameter = function (target, attachment, pname) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getFramebufferAttachmentParameter + ',' + target + ',' + attachment + ',' + pname);
        switch (pname) {
            case _GLenum2.default.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:
                return this._map.get(_Renderbuffer2.default.uuid(result)) || this._map.get(_Texture2.default.uuid(result)) || null;
            default:
                return result;
        }
    };

    this.getParameter = function (pname) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getParameter + ',' + pname);
        switch (pname) {
            case _GLenum2.default.VERSION:
                return this._version;
            case _GLenum2.default.ARRAY_BUFFER_BINDING: // buffer
            case _GLenum2.default.ELEMENT_ARRAY_BUFFER_BINDING:
                // buffer
                return this._map.get(_Buffer2.default.uuid(result)) || null;
            case _GLenum2.default.CURRENT_PROGRAM:
                // program
                return this._map.get(_Program2.default.uuid(result)) || null;
            case _GLenum2.default.FRAMEBUFFER_BINDING:
                // framebuffer
                return this._map.get(_Framebuffer2.default.uuid(result)) || null;
            case _GLenum2.default.RENDERBUFFER_BINDING:
                // renderbuffer
                return this._map.get(_Renderbuffer2.default.uuid(result)) || null;
            case _GLenum2.default.TEXTURE_BINDING_2D: // texture
            case _GLenum2.default.TEXTURE_BINDING_CUBE_MAP:
                // texture
                return this._map.get(_Texture2.default.uuid(result)) || null;
            case _GLenum2.default.ALIASED_LINE_WIDTH_RANGE: // Float32Array
            case _GLenum2.default.ALIASED_POINT_SIZE_RANGE: // Float32Array
            case _GLenum2.default.BLEND_COLOR: // Float32Array
            case _GLenum2.default.COLOR_CLEAR_VALUE: // Float32Array
            case _GLenum2.default.DEPTH_RANGE: // Float32Array
            case _GLenum2.default.MAX_VIEWPORT_DIMS: // Int32Array
            case _GLenum2.default.SCISSOR_BOX: // Int32Array
            case _GLenum2.default.VIEWPORT: // Int32Array            
            case _GLenum2.default.COMPRESSED_TEXTURE_FORMATS: // Uint32Array
            default:
                var _result$split = result.split(','),
                    _result$split2 = _toArray(_result$split),
                    type = _result$split2[0],
                    res = _result$split2.slice(1);

                if (res.length === 1) {
                    return Number(res[0]);
                } else {
                    return res.map(Number);
                }
        }
    };

    this.getProgramInfoLog = function (progarm) {
        return WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getProgramInfoLog + ',' + progarm.id);
    };

    this.getProgramParameter = function (program, pname) {
        var res = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getProgramParameter + ',' + program.id + ',' + pname);

        var _res$split$map = res.split(',').map(function (i) {
            return parseInt(i);
        }),
            _res$split$map2 = _slicedToArray(_res$split$map, 2),
            type = _res$split$map2[0],
            result = _res$split$map2[1];

        if (type === 1) {
            return Boolean(result);
        } else if (type === 2) {
            return result;
        } else {
            throw new Error('Unrecongized program paramater ' + res + ', type: ' + (typeof res === 'undefined' ? 'undefined' : _typeof(res)));
        }
    };

    this.getRenderbufferParameter = function (target, pname) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getRenderbufferParameter + ',' + target + ',' + pname);
        return result;
    };

    this.getShaderInfoLog = function (shader) {
        return WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getShaderInfoLog + ',' + shader.id);
    };

    this.getShaderParameter = function (shader, pname) {
        return WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getShaderParameter + ',' + shader.id + ',' + pname);
    };

    this.getShaderPrecisionFormat = function (shaderType, precisionType) {
        var _WebGLRenderingContex = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getShaderPrecisionFormat + ',' + shaderType + ',' + precisionType),
            _WebGLRenderingContex2 = _slicedToArray(_WebGLRenderingContex, 3),
            rangeMin = _WebGLRenderingContex2[0],
            rangeMax = _WebGLRenderingContex2[1],
            precision = _WebGLRenderingContex2[2];

        var shaderPrecisionFormat = new _ShaderPrecisionFormat2.default({
            rangeMin: Number(rangeMin),
            rangeMax: Number(rangeMax),
            precision: Number(precision)
        });
        return shaderPrecisionFormat;
    };

    this.getShaderSource = function (shader) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getShaderSource + ',' + shader.id);
        return result;
    };

    this.getSupportedExtensions = function () {
        return Object.keys({});
    };

    this.getTexParameter = function (target, pname) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getTexParameter + ',' + target + ',' + pname);
        return result;
    };

    this.getUniformLocation = function (program, name) {
        var id = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getUniformLocation + ',' + program.id + ',' + name);
        if (id === -1) {
            return null;
        } else {
            return new _UniformLocation2.default(Number(id));
        }
    };

    this.getVertexAttrib = function (index, pname) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getVertexAttrib + ',' + index + ',' + pname);
        switch (pname) {
            case _GLenum2.default.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                return this._map.get(_Buffer2.default.uuid(result)) || null;
            case _GLenum2.default.CURRENT_VERTEX_ATTRIB: // Float32Array
            default:
                return result;
        }
    };

    this.getVertexAttribOffset = function (index, pname) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.getVertexAttribOffset + ',' + index + ',' + pname);
        return Number(result);
    };

    this.isBuffer = function (buffer) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.isBuffer + ',' + buffer.id);
        return Boolean(result);
    };

    this.isContextLost = function () {
        return false;
    };

    this.isEnabled = function (cap) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.isEnabled + ',' + cap);
        return Boolean(result);
    };

    this.isFramebuffer = function (framebuffer) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.isFramebuffer + ',' + framebuffer.id);
        return Boolean(result);
    };

    this.isProgram = function (program) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.isProgram + ',' + program.id);
        return Boolean(result);
    };

    this.isRenderbuffer = function (renderBuffer) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.isRenderbuffer + ',' + renderbuffer.id);
        return Boolean(result);
    };

    this.isShader = function (shader) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.isShader + ',' + shader.id);
        return Boolean(result);
    };

    this.isTexture = function (texture) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.isTexture + ',' + texture.id);
        return Boolean(result);
    };

    this.lineWidth = function (width) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.lineWidth + ',' + width, true);
    };

    this.linkProgram = function (program) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.linkProgram + ',' + program.id, true);
    };

    this.pixelStorei = function (pname, param) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.pixelStorei + ',' + pname + ',' + Number(param));
    };

    this.polygonOffset = function (factor, units) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.polygonOffset + ',' + factor + ',' + units);
    };

    this.readPixels = function (x, y, width, height, format, type, pixels) {
        var result = WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.readPixels + ',' + x + ',' + y + ',' + width + ',' + height + ',' + format + ',' + type);
        return result;
    };

    this.renderbufferStorage = function (target, internalFormat, width, height) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.renderbufferStorage + ',' + target + ',' + internalFormat + ',' + width + ',' + height, true);
    };

    this.sampleCoverage = function (value, invert) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.sampleCoverage + ',' + value + ',' + Number(invert), true);
    };

    this.scissor = function (x, y, width, height) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.scissor + ',' + x + ',' + y + ',' + width + ',' + height, true);
    };

    this.shaderSource = function (shader, source) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.shaderSource + ',' + shader.id + ',' + source);
    };

    this.stencilFunc = function (func, ref, mask) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.stencilFunc + ',' + func + ',' + ref + ',' + mask, true);
    };

    this.stencilFuncSeparate = function (face, func, ref, mask) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.stencilFuncSeparate + ',' + face + ',' + func + ',' + ref + ',' + mask, true);
    };

    this.stencilMask = function (mask) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.stencilMask + ',' + mask, true);
    };

    this.stencilMaskSeparate = function (face, mask) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.stencilMaskSeparate + ',' + face + ',' + mask, true);
    };

    this.stencilOp = function (fail, zfail, zpass) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.stencilOp + ',' + fail + ',' + zfail + ',' + zpass);
    };

    this.stencilOpSeparate = function (face, fail, zfail, zpass) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.stencilOp + ',' + face + ',' + fail + ',' + zfail + ',' + zpass, true);
    };

    this.texImage2D = function () {
        var _WebGLRenderingContex3;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        (_WebGLRenderingContex3 = WebGLRenderingContext.GBridge).texImage2D.apply(_WebGLRenderingContex3, [this._canvas.id].concat(args));
    };

    this.texParameterf = function (target, pname, param) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.texParameterf + ',' + target + ',' + pname + ',' + param, true);
    };

    this.texParameteri = function (target, pname, param) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.texParameteri + ',' + target + ',' + pname + ',' + param);
    };

    this.texSubImage2D = function () {
        var _WebGLRenderingContex4;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        (_WebGLRenderingContex4 = WebGLRenderingContext.GBridge).texSubImage2D.apply(_WebGLRenderingContex4, [this._canvas.id].concat(args));
    };

    this.uniform1f = function (location, v0) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform1f + ',' + location.id + ',' + v0);
    };

    this.uniform1fv = function (location, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform1fv + ',' + location.id + ',' + processArray(value), true);
    };

    this.uniform1i = function (location, v0) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform1i + ',' + location.id + ',' + v0
        // true
        );
    };

    this.uniform1iv = function (location, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform1iv + ',' + location.id + ',' + processArray(value), true);
    };

    this.uniform2f = function (location, v0, v1) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform2f + ',' + location.id + ',' + v0 + ',' + v1, true);
    };

    this.uniform2fv = function (location, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform2fv + ',' + location.id + ',' + processArray(value), true);
    };

    this.uniform2i = function (location, v0, v1) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform2i + ',' + location.id + ',' + v0 + ',' + v1, true);
    };

    this.uniform2iv = function (location, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform2iv + ',' + location.id + ',' + processArray(value), true);
    };

    this.uniform3f = function (location, v0, v1, v2) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform3f + ',' + location.id + ',' + v0 + ',' + v1 + ',' + v2, true);
    };

    this.uniform3fv = function (location, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform3fv + ',' + location.id + ',' + processArray(value), true);
    };

    this.uniform3i = function (location, v0, v1, v2) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform3i + ',' + location.id + ',' + v0 + ',' + v1 + ',' + v2, true);
    };

    this.uniform3iv = function (location, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform3iv + ',' + location.id + ',' + processArray(value), true);
    };

    this.uniform4f = function (location, v0, v1, v2, v3) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform4f + ',' + location.id + ',' + v0 + ',' + v1 + ',' + v2 + ',' + v3, true);
    };

    this.uniform4fv = function (location, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform4fv + ',' + location.id + ',' + processArray(value), true);
    };

    this.uniform4i = function (location, v0, v1, v2, v3) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform4i + ',' + location.id + ',' + v0 + ',' + v1 + ',' + v2 + ',' + v3, true);
    };

    this.uniform4iv = function (location, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniform4iv + ',' + location.id + ',' + processArray(value, true), true);
    };

    this.uniformMatrix2fv = function (location, transpose, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniformMatrix2fv + ',' + location.id + ',' + Number(transpose) + ',' + processArray(value), true);
    };

    this.uniformMatrix3fv = function (location, transpose, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniformMatrix3fv + ',' + location.id + ',' + Number(transpose) + ',' + processArray(value), true);
    };

    this.uniformMatrix4fv = function (location, transpose, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.uniformMatrix4fv + ',' + location.id + ',' + Number(transpose) + ',' + processArray(value), true);
    };

    this.useProgram = function (progarm) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.useProgram + ',' + progarm.id + '', true);
    };

    this.validateProgram = function (program) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.validateProgram + ',' + program.id, true);
    };

    this.vertexAttrib1f = function (index, v0) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttrib1f + ',' + index + ',' + v0, true);
    };

    this.vertexAttrib2f = function (index, v0, v1) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttrib2f + ',' + index + ',' + v0 + ',' + v1, true);
    };

    this.vertexAttrib3f = function (index, v0, v1, v2) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttrib3f + ',' + index + ',' + v0 + ',' + v1 + ',' + v2, true);
    };

    this.vertexAttrib4f = function (index, v0, v1, v2, v3) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttrib4f + ',' + index + ',' + v0 + ',' + v1 + ',' + v2 + ',' + v3, true);
    };

    this.vertexAttrib1fv = function (index, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttrib1fv + ',' + index + ',' + processArray(value), true);
    };

    this.vertexAttrib2fv = function (index, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttrib2fv + ',' + index + ',' + processArray(value), true);
    };

    this.vertexAttrib3fv = function (index, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttrib3fv + ',' + index + ',' + processArray(value), true);
    };

    this.vertexAttrib4fv = function (index, value) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttrib4fv + ',' + index + ',' + processArray(value), true);
    };

    this.vertexAttribPointer = function (index, size, type, normalized, stride, offset) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.vertexAttribPointer + ',' + index + ',' + size + ',' + type + ',' + Number(normalized) + ',' + stride + ',' + offset, true);
    };

    this.viewport = function (x, y, width, height) {
        WebGLRenderingContext.GBridge.callNative(this._canvas.id, _GLmethod2.default.viewport + ',' + x + ',' + y + ',' + width + ',' + height, true);
    };
};

exports.default = WebGLRenderingContext;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = 1;

var GLmethod = {};

GLmethod.activeTexture = i++; //1
GLmethod.attachShader = i++;
GLmethod.bindAttribLocation = i++;
GLmethod.bindBuffer = i++;
GLmethod.bindFramebuffer = i++;
GLmethod.bindRenderbuffer = i++;
GLmethod.bindTexture = i++;
GLmethod.blendColor = i++;
GLmethod.blendEquation = i++;
GLmethod.blendEquationSeparate = i++; //10
GLmethod.blendFunc = i++;
GLmethod.blendFuncSeparate = i++;
GLmethod.bufferData = i++;
GLmethod.bufferSubData = i++;
GLmethod.checkFramebufferStatus = i++;
GLmethod.clear = i++;
GLmethod.clearColor = i++;
GLmethod.clearDepth = i++;
GLmethod.clearStencil = i++;
GLmethod.colorMask = i++; //20
GLmethod.compileShader = i++;
GLmethod.compressedTexImage2D = i++;
GLmethod.compressedTexSubImage2D = i++;
GLmethod.copyTexImage2D = i++;
GLmethod.copyTexSubImage2D = i++;
GLmethod.createBuffer = i++;
GLmethod.createFramebuffer = i++;
GLmethod.createProgram = i++;
GLmethod.createRenderbuffer = i++;
GLmethod.createShader = i++; //30
GLmethod.createTexture = i++;
GLmethod.cullFace = i++;
GLmethod.deleteBuffer = i++;
GLmethod.deleteFramebuffer = i++;
GLmethod.deleteProgram = i++;
GLmethod.deleteRenderbuffer = i++;
GLmethod.deleteShader = i++;
GLmethod.deleteTexture = i++;
GLmethod.depthFunc = i++;
GLmethod.depthMask = i++; //40
GLmethod.depthRange = i++;
GLmethod.detachShader = i++;
GLmethod.disable = i++;
GLmethod.disableVertexAttribArray = i++;
GLmethod.drawArrays = i++;
GLmethod.drawArraysInstancedANGLE = i++;
GLmethod.drawElements = i++;
GLmethod.drawElementsInstancedANGLE = i++;
GLmethod.enable = i++;
GLmethod.enableVertexAttribArray = i++; //50
GLmethod.flush = i++;
GLmethod.framebufferRenderbuffer = i++;
GLmethod.framebufferTexture2D = i++;
GLmethod.frontFace = i++;
GLmethod.generateMipmap = i++;
GLmethod.getActiveAttrib = i++;
GLmethod.getActiveUniform = i++;
GLmethod.getAttachedShaders = i++;
GLmethod.getAttribLocation = i++;
GLmethod.getBufferParameter = i++; //60
GLmethod.getContextAttributes = i++;
GLmethod.getError = i++;
GLmethod.getExtension = i++;
GLmethod.getFramebufferAttachmentParameter = i++;
GLmethod.getParameter = i++;
GLmethod.getProgramInfoLog = i++;
GLmethod.getProgramParameter = i++;
GLmethod.getRenderbufferParameter = i++;
GLmethod.getShaderInfoLog = i++;
GLmethod.getShaderParameter = i++; //70
GLmethod.getShaderPrecisionFormat = i++;
GLmethod.getShaderSource = i++;
GLmethod.getSupportedExtensions = i++;
GLmethod.getTexParameter = i++;
GLmethod.getUniform = i++;
GLmethod.getUniformLocation = i++;
GLmethod.getVertexAttrib = i++;
GLmethod.getVertexAttribOffset = i++;
GLmethod.isBuffer = i++;
GLmethod.isContextLost = i++; //80
GLmethod.isEnabled = i++;
GLmethod.isFramebuffer = i++;
GLmethod.isProgram = i++;
GLmethod.isRenderbuffer = i++;
GLmethod.isShader = i++;
GLmethod.isTexture = i++;
GLmethod.lineWidth = i++;
GLmethod.linkProgram = i++;
GLmethod.pixelStorei = i++;
GLmethod.polygonOffset = i++; //90
GLmethod.readPixels = i++;
GLmethod.renderbufferStorage = i++;
GLmethod.sampleCoverage = i++;
GLmethod.scissor = i++;
GLmethod.shaderSource = i++;
GLmethod.stencilFunc = i++;
GLmethod.stencilFuncSeparate = i++;
GLmethod.stencilMask = i++;
GLmethod.stencilMaskSeparate = i++;
GLmethod.stencilOp = i++; //100
GLmethod.stencilOpSeparate = i++;
GLmethod.texImage2D = i++;
GLmethod.texParameterf = i++;
GLmethod.texParameteri = i++;
GLmethod.texSubImage2D = i++;
GLmethod.uniform1f = i++;
GLmethod.uniform1fv = i++;
GLmethod.uniform1i = i++;
GLmethod.uniform1iv = i++;
GLmethod.uniform2f = i++; //110
GLmethod.uniform2fv = i++;
GLmethod.uniform2i = i++;
GLmethod.uniform2iv = i++;
GLmethod.uniform3f = i++;
GLmethod.uniform3fv = i++;
GLmethod.uniform3i = i++;
GLmethod.uniform3iv = i++;
GLmethod.uniform4f = i++;
GLmethod.uniform4fv = i++;
GLmethod.uniform4i = i++; //120
GLmethod.uniform4iv = i++;
GLmethod.uniformMatrix2fv = i++;
GLmethod.uniformMatrix3fv = i++;
GLmethod.uniformMatrix4fv = i++;
GLmethod.useProgram = i++;
GLmethod.validateProgram = i++;
GLmethod.vertexAttrib1f = i++; //new
GLmethod.vertexAttrib2f = i++; //new
GLmethod.vertexAttrib3f = i++; //new
GLmethod.vertexAttrib4f = i++; //new       //130
GLmethod.vertexAttrib1fv = i++; //new
GLmethod.vertexAttrib2fv = i++; //new
GLmethod.vertexAttrib3fv = i++; //new
GLmethod.vertexAttrib4fv = i++; //new
GLmethod.vertexAttribPointer = i++;
GLmethod.viewport = i++;

exports.default = GLmethod;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RenderingContext = __webpack_require__(2);

var _RenderingContext2 = _interopRequireDefault(_RenderingContext);

var _RenderingContext3 = __webpack_require__(3);

var _RenderingContext4 = _interopRequireDefault(_RenderingContext3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GCanvas = function () {

    // static GBridge = null;

    function GCanvas(id, _ref) {
        var _this = this;

        var disableAutoSwap = _ref.disableAutoSwap;

        _classCallCheck(this, GCanvas);

        this.id = null;
        this._needRender = true;

        this.id = id;

        this._disableAutoSwap = disableAutoSwap;
        if (disableAutoSwap) {
            this._swapBuffers = function () {
                GCanvas.GBridge.render(_this.id);
            };
        }
    }

    _createClass(GCanvas, [{
        key: 'getContext',
        value: function getContext(type) {
            var _this2 = this;

            var context = null;

            if (type.match(/webgl/i)) {
                context = new _RenderingContext4.default(this);

                context.componentId = this.id;

                if (!this._disableAutoSwap) {
                    var render = function render() {
                        if (_this2._needRender) {
                            GCanvas.GBridge.render(_this2.id);
                            _this2._needRender = false;
                        }
                    };
                    setInterval(render, 16);
                }

                GCanvas.GBridge.callSetContextType(this.id, 1); // 0 for 2d; 1 for webgl
            } else if (type.match(/2d/i)) {
                context = new _RenderingContext2.default(this);

                context.componentId = this.id;

                var _render = function _render() {

                    var commands = context._drawCommands;
                    context._drawCommands = '';

                    GCanvas.GBridge.render2d(_this2.id, commands);
                    _this2._needRender = false;
                };
                setInterval(_render, 16);

                GCanvas.GBridge.callSetContextType(this.id, 0);
            } else {
                throw new Error('not supported context ' + type);
            }

            return context;
        }
    }]);

    return GCanvas;
}();

exports.default = GCanvas;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FillStylePattern = function FillStylePattern(img, pattern) {
    _classCallCheck(this, FillStylePattern);

    this._style = pattern;
    this._img = img;
};

exports.default = FillStylePattern;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FillStyleLinearGradient = function FillStyleLinearGradient(x0, y0, x1, y1) {
    _classCallCheck(this, FillStyleLinearGradient);

    this.addColorStop = function (pos, color) {
        if (this._stop_count < 5 && 0.0 <= pos && pos <= 1.0) {
            this._stops[this._stop_count] = { _pos: pos, _color: color };
            this._stop_count++;
        }
    };

    this._start_pos = { _x: x0, _y: y0 };
    this._end_pos = { _x: x1, _y: y1 };
    this._stop_count = 0;
    this._stops = [0, 0, 0, 0, 0];
};

exports.default = FillStyleLinearGradient;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FillStyleRadialGradient = function () {
    function FillStyleRadialGradient(x0, y0, r0, x1, y1, r1) {
        _classCallCheck(this, FillStyleRadialGradient);

        this._start_pos = { _x: x0, _y: y0, _r: r0 };
        this._end_pos = { _x: x1, _y: y1, _r: r1 };
        this._stop_count = 0;
        this._stops = [0, 0, 0, 0, 0];
    }

    _createClass(FillStyleRadialGradient, [{
        key: "addColorStop",
        value: function addColorStop(pos, color) {
            if (this._stop_count < 5 && 0.0 <= pos && pos <= 1.0) {
                this._stops[this._stop_count] = { _pos: pos, _color: color };
                this._stop_count++;
            }
        }
    }]);

    return FillStyleRadialGradient;
}();

exports.default = FillStyleRadialGradient;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    "DEPTH_BUFFER_BIT": 256,
    "STENCIL_BUFFER_BIT": 1024,
    "COLOR_BUFFER_BIT": 16384,
    "POINTS": 0,
    "LINES": 1,
    "LINE_LOOP": 2,
    "LINE_STRIP": 3,
    "TRIANGLES": 4,
    "TRIANGLE_STRIP": 5,
    "TRIANGLE_FAN": 6,
    "ZERO": 0,
    "ONE": 1,
    "SRC_COLOR": 768,
    "ONE_MINUS_SRC_COLOR": 769,
    "SRC_ALPHA": 770,
    "ONE_MINUS_SRC_ALPHA": 771,
    "DST_ALPHA": 772,
    "ONE_MINUS_DST_ALPHA": 773,
    "DST_COLOR": 774,
    "ONE_MINUS_DST_COLOR": 775,
    "SRC_ALPHA_SATURATE": 776,
    "FUNC_ADD": 32774,
    "BLEND_EQUATION": 32777,
    "BLEND_EQUATION_RGB": 32777,
    "BLEND_EQUATION_ALPHA": 34877,
    "FUNC_SUBTRACT": 32778,
    "FUNC_REVERSE_SUBTRACT": 32779,
    "BLEND_DST_RGB": 32968,
    "BLEND_SRC_RGB": 32969,
    "BLEND_DST_ALPHA": 32970,
    "BLEND_SRC_ALPHA": 32971,
    "CONSTANT_COLOR": 32769,
    "ONE_MINUS_CONSTANT_COLOR": 32770,
    "CONSTANT_ALPHA": 32771,
    "ONE_MINUS_CONSTANT_ALPHA": 32772,
    "BLEND_COLOR": 32773,
    "ARRAY_BUFFER": 34962,
    "ELEMENT_ARRAY_BUFFER": 34963,
    "ARRAY_BUFFER_BINDING": 34964,
    "ELEMENT_ARRAY_BUFFER_BINDING": 34965,
    "STREAM_DRAW": 35040,
    "STATIC_DRAW": 35044,
    "DYNAMIC_DRAW": 35048,
    "BUFFER_SIZE": 34660,
    "BUFFER_USAGE": 34661,
    "CURRENT_VERTEX_ATTRIB": 34342,
    "FRONT": 1028,
    "BACK": 1029,
    "FRONT_AND_BACK": 1032,
    "TEXTURE_2D": 3553,
    "CULL_FACE": 2884,
    "BLEND": 3042,
    "DITHER": 3024,
    "STENCIL_TEST": 2960,
    "DEPTH_TEST": 2929,
    "SCISSOR_TEST": 3089,
    "POLYGON_OFFSET_FILL": 32823,
    "SAMPLE_ALPHA_TO_COVERAGE": 32926,
    "SAMPLE_COVERAGE": 32928,
    "NO_ERROR": 0,
    "INVALID_ENUM": 1280,
    "INVALID_VALUE": 1281,
    "INVALID_OPERATION": 1282,
    "OUT_OF_MEMORY": 1285,
    "CW": 2304,
    "CCW": 2305,
    "LINE_WIDTH": 2849,
    "ALIASED_POINT_SIZE_RANGE": 33901,
    "ALIASED_LINE_WIDTH_RANGE": 33902,
    "CULL_FACE_MODE": 2885,
    "FRONT_FACE": 2886,
    "DEPTH_RANGE": 2928,
    "DEPTH_WRITEMASK": 2930,
    "DEPTH_CLEAR_VALUE": 2931,
    "DEPTH_FUNC": 2932,
    "STENCIL_CLEAR_VALUE": 2961,
    "STENCIL_FUNC": 2962,
    "STENCIL_FAIL": 2964,
    "STENCIL_PASS_DEPTH_FAIL": 2965,
    "STENCIL_PASS_DEPTH_PASS": 2966,
    "STENCIL_REF": 2967,
    "STENCIL_VALUE_MASK": 2963,
    "STENCIL_WRITEMASK": 2968,
    "STENCIL_BACK_FUNC": 34816,
    "STENCIL_BACK_FAIL": 34817,
    "STENCIL_BACK_PASS_DEPTH_FAIL": 34818,
    "STENCIL_BACK_PASS_DEPTH_PASS": 34819,
    "STENCIL_BACK_REF": 36003,
    "STENCIL_BACK_VALUE_MASK": 36004,
    "STENCIL_BACK_WRITEMASK": 36005,
    "VIEWPORT": 2978,
    "SCISSOR_BOX": 3088,
    "COLOR_CLEAR_VALUE": 3106,
    "COLOR_WRITEMASK": 3107,
    "UNPACK_ALIGNMENT": 3317,
    "PACK_ALIGNMENT": 3333,
    "MAX_TEXTURE_SIZE": 3379,
    "MAX_VIEWPORT_DIMS": 3386,
    "SUBPIXEL_BITS": 3408,
    "RED_BITS": 3410,
    "GREEN_BITS": 3411,
    "BLUE_BITS": 3412,
    "ALPHA_BITS": 3413,
    "DEPTH_BITS": 3414,
    "STENCIL_BITS": 3415,
    "POLYGON_OFFSET_UNITS": 10752,
    "POLYGON_OFFSET_FACTOR": 32824,
    "TEXTURE_BINDING_2D": 32873,
    "SAMPLE_BUFFERS": 32936,
    "SAMPLES": 32937,
    "SAMPLE_COVERAGE_VALUE": 32938,
    "SAMPLE_COVERAGE_INVERT": 32939,
    "COMPRESSED_TEXTURE_FORMATS": 34467,
    "DONT_CARE": 4352,
    "FASTEST": 4353,
    "NICEST": 4354,
    "GENERATE_MIPMAP_HINT": 33170,
    "BYTE": 5120,
    "UNSIGNED_BYTE": 5121,
    "SHORT": 5122,
    "UNSIGNED_SHORT": 5123,
    "INT": 5124,
    "UNSIGNED_INT": 5125,
    "FLOAT": 5126,
    "DEPTH_COMPONENT": 6402,
    "ALPHA": 6406,
    "RGB": 6407,
    "RGBA": 6408,
    "LUMINANCE": 6409,
    "LUMINANCE_ALPHA": 6410,
    "UNSIGNED_SHORT_4_4_4_4": 32819,
    "UNSIGNED_SHORT_5_5_5_1": 32820,
    "UNSIGNED_SHORT_5_6_5": 33635,
    "FRAGMENT_SHADER": 35632,
    "VERTEX_SHADER": 35633,
    "MAX_VERTEX_ATTRIBS": 34921,
    "MAX_VERTEX_UNIFORM_VECTORS": 36347,
    "MAX_VARYING_VECTORS": 36348,
    "MAX_COMBINED_TEXTURE_IMAGE_UNITS": 35661,
    "MAX_VERTEX_TEXTURE_IMAGE_UNITS": 35660,
    "MAX_TEXTURE_IMAGE_UNITS": 34930,
    "MAX_FRAGMENT_UNIFORM_VECTORS": 36349,
    "SHADER_TYPE": 35663,
    "DELETE_STATUS": 35712,
    "LINK_STATUS": 35714,
    "VALIDATE_STATUS": 35715,
    "ATTACHED_SHADERS": 35717,
    "ACTIVE_UNIFORMS": 35718,
    "ACTIVE_ATTRIBUTES": 35721,
    "SHADING_LANGUAGE_VERSION": 35724,
    "CURRENT_PROGRAM": 35725,
    "NEVER": 512,
    "LESS": 513,
    "EQUAL": 514,
    "LEQUAL": 515,
    "GREATER": 516,
    "NOTEQUAL": 517,
    "GEQUAL": 518,
    "ALWAYS": 519,
    "KEEP": 7680,
    "REPLACE": 7681,
    "INCR": 7682,
    "DECR": 7683,
    "INVERT": 5386,
    "INCR_WRAP": 34055,
    "DECR_WRAP": 34056,
    "VENDOR": 7936,
    "RENDERER": 7937,
    "VERSION": 7938,
    "NEAREST": 9728,
    "LINEAR": 9729,
    "NEAREST_MIPMAP_NEAREST": 9984,
    "LINEAR_MIPMAP_NEAREST": 9985,
    "NEAREST_MIPMAP_LINEAR": 9986,
    "LINEAR_MIPMAP_LINEAR": 9987,
    "TEXTURE_MAG_FILTER": 10240,
    "TEXTURE_MIN_FILTER": 10241,
    "TEXTURE_WRAP_S": 10242,
    "TEXTURE_WRAP_T": 10243,
    "TEXTURE": 5890,
    "TEXTURE_CUBE_MAP": 34067,
    "TEXTURE_BINDING_CUBE_MAP": 34068,
    "TEXTURE_CUBE_MAP_POSITIVE_X": 34069,
    "TEXTURE_CUBE_MAP_NEGATIVE_X": 34070,
    "TEXTURE_CUBE_MAP_POSITIVE_Y": 34071,
    "TEXTURE_CUBE_MAP_NEGATIVE_Y": 34072,
    "TEXTURE_CUBE_MAP_POSITIVE_Z": 34073,
    "TEXTURE_CUBE_MAP_NEGATIVE_Z": 34074,
    "MAX_CUBE_MAP_TEXTURE_SIZE": 34076,
    "TEXTURE0": 33984,
    "TEXTURE1": 33985,
    "TEXTURE2": 33986,
    "TEXTURE3": 33987,
    "TEXTURE4": 33988,
    "TEXTURE5": 33989,
    "TEXTURE6": 33990,
    "TEXTURE7": 33991,
    "TEXTURE8": 33992,
    "TEXTURE9": 33993,
    "TEXTURE10": 33994,
    "TEXTURE11": 33995,
    "TEXTURE12": 33996,
    "TEXTURE13": 33997,
    "TEXTURE14": 33998,
    "TEXTURE15": 33999,
    "TEXTURE16": 34000,
    "TEXTURE17": 34001,
    "TEXTURE18": 34002,
    "TEXTURE19": 34003,
    "TEXTURE20": 34004,
    "TEXTURE21": 34005,
    "TEXTURE22": 34006,
    "TEXTURE23": 34007,
    "TEXTURE24": 34008,
    "TEXTURE25": 34009,
    "TEXTURE26": 34010,
    "TEXTURE27": 34011,
    "TEXTURE28": 34012,
    "TEXTURE29": 34013,
    "TEXTURE30": 34014,
    "TEXTURE31": 34015,
    "ACTIVE_TEXTURE": 34016,
    "REPEAT": 10497,
    "CLAMP_TO_EDGE": 33071,
    "MIRRORED_REPEAT": 33648,
    "FLOAT_VEC2": 35664,
    "FLOAT_VEC3": 35665,
    "FLOAT_VEC4": 35666,
    "INT_VEC2": 35667,
    "INT_VEC3": 35668,
    "INT_VEC4": 35669,
    "BOOL": 35670,
    "BOOL_VEC2": 35671,
    "BOOL_VEC3": 35672,
    "BOOL_VEC4": 35673,
    "FLOAT_MAT2": 35674,
    "FLOAT_MAT3": 35675,
    "FLOAT_MAT4": 35676,
    "SAMPLER_2D": 35678,
    "SAMPLER_CUBE": 35680,
    "VERTEX_ATTRIB_ARRAY_ENABLED": 34338,
    "VERTEX_ATTRIB_ARRAY_SIZE": 34339,
    "VERTEX_ATTRIB_ARRAY_STRIDE": 34340,
    "VERTEX_ATTRIB_ARRAY_TYPE": 34341,
    "VERTEX_ATTRIB_ARRAY_NORMALIZED": 34922,
    "VERTEX_ATTRIB_ARRAY_POINTER": 34373,
    "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING": 34975,
    "IMPLEMENTATION_COLOR_READ_TYPE": 35738,
    "IMPLEMENTATION_COLOR_READ_FORMAT": 35739,
    "COMPILE_STATUS": 35713,
    "LOW_FLOAT": 36336,
    "MEDIUM_FLOAT": 36337,
    "HIGH_FLOAT": 36338,
    "LOW_INT": 36339,
    "MEDIUM_INT": 36340,
    "HIGH_INT": 36341,
    "FRAMEBUFFER": 36160,
    "RENDERBUFFER": 36161,
    "RGBA4": 32854,
    "RGB5_A1": 32855,
    "RGB565": 36194,
    "DEPTH_COMPONENT16": 33189,
    "STENCIL_INDEX8": 36168,
    "DEPTH_STENCIL": 34041,
    "RENDERBUFFER_WIDTH": 36162,
    "RENDERBUFFER_HEIGHT": 36163,
    "RENDERBUFFER_INTERNAL_FORMAT": 36164,
    "RENDERBUFFER_RED_SIZE": 36176,
    "RENDERBUFFER_GREEN_SIZE": 36177,
    "RENDERBUFFER_BLUE_SIZE": 36178,
    "RENDERBUFFER_ALPHA_SIZE": 36179,
    "RENDERBUFFER_DEPTH_SIZE": 36180,
    "RENDERBUFFER_STENCIL_SIZE": 36181,
    "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE": 36048,
    "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME": 36049,
    "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL": 36050,
    "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE": 36051,
    "COLOR_ATTACHMENT0": 36064,
    "DEPTH_ATTACHMENT": 36096,
    "STENCIL_ATTACHMENT": 36128,
    "DEPTH_STENCIL_ATTACHMENT": 33306,
    "NONE": 0,
    "FRAMEBUFFER_COMPLETE": 36053,
    "FRAMEBUFFER_INCOMPLETE_ATTACHMENT": 36054,
    "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT": 36055,
    "FRAMEBUFFER_INCOMPLETE_DIMENSIONS": 36057,
    "FRAMEBUFFER_UNSUPPORTED": 36061,
    "FRAMEBUFFER_BINDING": 36006,
    "RENDERBUFFER_BINDING": 36007,
    "MAX_RENDERBUFFER_SIZE": 34024,
    "INVALID_FRAMEBUFFER_OPERATION": 1286,
    "UNPACK_FLIP_Y_WEBGL": 37440,
    "UNPACK_PREMULTIPLY_ALPHA_WEBGL": 37441,
    "CONTEXT_LOST_WEBGL": 37442,
    "UNPACK_COLORSPACE_CONVERSION_WEBGL": 37443,
    "BROWSER_DEFAULT_WEBGL": 37444
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebGLActiveInfo = function WebGLActiveInfo(_ref) {
    var type = _ref.type,
        name = _ref.name,
        size = _ref.size;

    _classCallCheck(this, WebGLActiveInfo);

    this.className = 'WebGLActiveInfo';

    this.type = type;
    this.name = name;
    this.size = size;
};

exports.default = WebGLActiveInfo;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classUtils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'WebGLBuffer';

function _uuid(id) {
    return (0, _classUtils.getTransferedObjectUUID)(name, id);
}

var WebGLBuffer = function () {
    function WebGLBuffer(id) {
        _classCallCheck(this, WebGLBuffer);

        this.className = name;

        this.id = id;
    }

    _createClass(WebGLBuffer, [{
        key: 'uuid',
        value: function uuid() {
            return _uuid(this.id);
        }
    }]);

    return WebGLBuffer;
}();

WebGLBuffer.uuid = _uuid;
exports.default = WebGLBuffer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classUtils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'WebGLFrameBuffer';

function _uuid(id) {
    return (0, _classUtils.getTransferedObjectUUID)(name, id);
}

var WebGLFramebuffer = function () {
    function WebGLFramebuffer(id) {
        _classCallCheck(this, WebGLFramebuffer);

        this.className = name;

        this.id = id;
    }

    _createClass(WebGLFramebuffer, [{
        key: 'uuid',
        value: function uuid() {
            return _uuid(this.id);
        }
    }]);

    return WebGLFramebuffer;
}();

WebGLFramebuffer.uuid = _uuid;
exports.default = WebGLFramebuffer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classUtils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'WebGLRenderBuffer';

function _uuid(id) {
    return (0, _classUtils.getTransferedObjectUUID)(name, id);
}

var WebGLRenderbuffer = function () {
    function WebGLRenderbuffer(id) {
        _classCallCheck(this, WebGLRenderbuffer);

        this.className = name;

        this.id = id;
    }

    _createClass(WebGLRenderbuffer, [{
        key: 'uuid',
        value: function uuid() {
            return _uuid(this.id);
        }
    }]);

    return WebGLRenderbuffer;
}();

WebGLRenderbuffer.uuid = _uuid;
exports.default = WebGLRenderbuffer;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classUtils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'WebGLTexture';

function _uuid(id) {
    return (0, _classUtils.getTransferedObjectUUID)(name, id);
}

var WebGLTexture = function () {
    function WebGLTexture(id, type) {
        _classCallCheck(this, WebGLTexture);

        this.className = name;

        this.id = id;
        this.type = type;
    }

    _createClass(WebGLTexture, [{
        key: 'uuid',
        value: function uuid() {
            return _uuid(this.id);
        }
    }]);

    return WebGLTexture;
}();

WebGLTexture.uuid = _uuid;
exports.default = WebGLTexture;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classUtils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'WebGLProgram';

function _uuid(id) {
    return (0, _classUtils.getTransferedObjectUUID)(name, id);
}

var WebGLProgram = function () {
    function WebGLProgram(id) {
        _classCallCheck(this, WebGLProgram);

        this.className = name;

        this.id = id;
    }

    _createClass(WebGLProgram, [{
        key: 'uuid',
        value: function uuid() {
            return _uuid(this.id);
        }
    }]);

    return WebGLProgram;
}();

WebGLProgram.uuid = _uuid;
exports.default = WebGLProgram;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classUtils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'WebGLShader';

function _uuid(id) {
    return (0, _classUtils.getTransferedObjectUUID)(name, id);
}

var WebGLShader = function () {
    function WebGLShader(id, type) {
        _classCallCheck(this, WebGLShader);

        this.className = name;

        this.id = id;
        this.type = type;
    }

    _createClass(WebGLShader, [{
        key: 'uuid',
        value: function uuid() {
            return _uuid(this.id);
        }
    }]);

    return WebGLShader;
}();

WebGLShader.uuid = _uuid;
exports.default = WebGLShader;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebGLShaderPrecisionFormat = function WebGLShaderPrecisionFormat(_ref) {
    var rangeMin = _ref.rangeMin,
        rangeMax = _ref.rangeMax,
        precision = _ref.precision;

    _classCallCheck(this, WebGLShaderPrecisionFormat);

    this.className = 'WebGLShaderPrecisionFormat';

    this.rangeMin = rangeMin;
    this.rangeMax = rangeMax;
    this.precision = precision;
};

exports.default = WebGLShaderPrecisionFormat;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classUtils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var name = 'WebGLUniformLocation';

function _uuid(id) {
    return (0, _classUtils.getTransferedObjectUUID)(name, id);
}

var WebGLUniformLocation = function () {
    function WebGLUniformLocation(id, type) {
        _classCallCheck(this, WebGLUniformLocation);

        this.className = name;

        this.id = id;
        this.type = type;
    }

    _createClass(WebGLUniformLocation, [{
        key: 'uuid',
        value: function uuid() {
            return _uuid(this.id);
        }
    }]);

    return WebGLUniformLocation;
}();

WebGLUniformLocation.uuid = _uuid;
exports.default = WebGLUniformLocation;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var incId = 1;

var noop = function noop() {};

var GImage = function () {

    // static GBridge = null;

    function GImage() {
        _classCallCheck(this, GImage);

        this._id = incId++;
        this._width = 0;
        this._height = 0;
        this._src = undefined;
        this._onload = noop;
        this._onerror = noop;
        this.complete = false;
    }

    _createClass(GImage, [{
        key: 'addEventListener',
        value: function addEventListener(name, listener) {
            if (name === 'load') {
                this.onload = listener;
            } else if (name === 'error') {
                this.onerror = listener;
            }
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(name, listener) {
            if (name === 'load') {
                this.onload = noop;
            } else if (name === 'error') {
                this.onerror = noop;
            }
        }
    }, {
        key: 'width',
        get: function get() {
            return this._width;
        },
        set: function set(v) {
            this._width = v;
        }
    }, {
        key: 'height',
        get: function get() {
            return this._height;
        },
        set: function set(v) {
            this._height = v;
        }
    }, {
        key: 'src',
        get: function get() {
            return this._src;
        },
        set: function set(v) {
            var _this = this;

            this._src = v;

            GImage.GBridge.perloadImage([this._src, this._id], function (data) {
                if (typeof data === 'string') {
                    data = JSON.parse(data);
                }
                if (data.error) {
                    var evt = { type: 'error', target: _this };
                    _this.onerror(evt);
                } else {
                    _this.complete = true;
                    _this.width = typeof data.width === 'number' ? data.width : 0;
                    _this.height = typeof data.height === 'number' ? data.height : 0;
                    var evt = { type: 'load', target: _this };
                    _this.onload(evt);
                }
            });
        }
    }, {
        key: 'onload',
        get: function get() {
            return this._onload;
        },
        set: function set(v) {
            this._onload = v;
        }
    }, {
        key: 'onerror',
        get: function get() {
            return this._onerror;
        },
        set: function set(v) {
            this._onerror = v;
        }
    }]);

    return GImage;
}();

exports.default = GImage;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _GLmethod = __webpack_require__(4);

var _GLmethod2 = _interopRequireDefault(_GLmethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isWeex = typeof WXEnvironment !== 'undefined';
var isWeexIOS = isWeex && /ios/i.test(WXEnvironment.platform);
var isWeexAndroid = isWeex && !isWeexIOS;

var GCanvasModule = typeof weex !== 'undefined' && weex.requireModule ? weex.requireModule('gcanvas') : typeof __weex_require__ !== 'undefined' ? __weex_require__('@weex-module/gcanvas') : {};

var isDebugging = false;

var isComboDisabled = false;

var logCommand = function () {
    var methodQuery = [];
    Object.keys(_GLmethod2.default).forEach(function (key) {
        methodQuery[_GLmethod2.default[key]] = key;
    });
    var queryMethod = function queryMethod(id) {
        return methodQuery[parseInt(id)] || 'NotFoundMethod';
    };
    var logCommand = function logCommand(id, cmds) {
        var mId = cmds.split(',')[0];
        var mName = queryMethod(mId);
        console.log('=== callNative - componentId:' + id + '; method: ' + mName + '; cmds: ' + cmds);
    };
    return logCommand;
}();

function joinArray(arr, sep) {
    var res = '';
    for (var i = 0; i < arr.length; i++) {
        if (i !== 0) {
            res += sep;
        }
        res += arr[i];
    }
    return res;
}

var commandsCache = {};

var GBridge = {

    callEnable: function callEnable(ref, configArray) {

        commandsCache[ref] = [];

        return GCanvasModule.enable({
            componentId: ref,
            config: configArray
        });
    },

    callEnableDebug: function callEnableDebug() {
        isDebugging = true;
    },

    callEnableDisableCombo: function callEnableDisableCombo() {
        isComboDisabled = true;
    },

    callSetContextType: function callSetContextType(componentId, context_type) {

        GCanvasModule.setContextType(context_type, componentId);
    },

    render: isWeexIOS ? function (componentId) {
        return GCanvasModule.extendCallNative({
            contextId: componentId,
            type: 0x60000001
        });
    } : function (componentId) {
        return callGCanvasLinkNative(componentId, 0x60000001, 'render');
    },

    render2d: isWeexIOS ? function (componentId, commands) {

        if (isDebugging) {
            console.log('>>> >>> render2d ===');
            console.log('>>> commands: ' + commands);
        }

        GCanvasModule.render(commands, componentId);
    } : function (componentId, commands) {

        if (isDebugging) {
            console.log('>>> >>> render2d ===');
            console.log('>>> commands: ' + commands);
        }

        callGCanvasLinkNative(componentId, 0x20000001, commands);
    },

    callExtendCallNative: isWeexIOS ? function (componentId, cmdArgs) {

        throw 'should not be here anymore ' + cmdArgs;
    } : function (componentId, cmdArgs) {

        throw 'should not be here anymore ' + cmdArgs;
    },

    flushNative: isWeexIOS ? function (componentId) {

        var cmdArgs = joinArray(commandsCache[componentId], ';');
        commandsCache[componentId] = [];

        if (isDebugging) {
            console.log('>>> >>> flush native ===');
            console.log('>>> commands: ' + cmdArgs);
        }

        var result = GCanvasModule.extendCallNative({
            "contextId": componentId,
            "type": 0x60000000,
            "args": cmdArgs
        });

        var res = result && result.result;

        if (isDebugging) {
            console.log('>>> result: ' + res);
        }

        return res;
    } : function (componentId) {

        var cmdArgs = joinArray(commandsCache[componentId], ';');
        commandsCache[componentId] = [];

        if (isDebugging) {
            console.log('>>> >>> flush native ===');
            console.log('>>> commands: ' + cmdArgs);
        }

        var result = callGCanvasLinkNative(componentId, 0x60000000, cmdArgs);

        if (isDebugging) {
            console.log('>>> result: ' + result);
        }

        return result;
    },

    callNative: function callNative(componentId, cmdArgs, cache) {

        if (isDebugging) {
            logCommand(componentId, cmdArgs);
        }

        commandsCache[componentId].push(cmdArgs);

        if (!cache || isComboDisabled) {
            return GBridge.flushNative(componentId);
        } else {
            return undefined;
        }
    },

    texImage2D: function texImage2D(componentId) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (isWeexIOS) {
            if (args.length === 6) {
                var target = args[0],
                    level = args[1],
                    internalformat = args[2],
                    format = args[3],
                    type = args[4],
                    image = args[5];

                GBridge.callNative(componentId, _GLmethod2.default.texImage2D + ',' + 6 + ',' + target + ',' + level + ',' + internalformat + ',' + format + ',' + type + ',' + image.src);
            } else if (args.length === 9) {
                var _target = args[0],
                    _level = args[1],
                    _internalformat = args[2],
                    width = args[3],
                    height = args[4],
                    border = args[5],
                    _format = args[6],
                    _type = args[7],
                    _image = args[8];

                GBridge.callNative(componentId, _GLmethod2.default.texImage2D + ',' + 9 + ',' + _target + ',' + _level + ',' + _internalformat + ',' + width + ',' + height + ',' + border + ',' + +_format + ',' + _type + ',' + (_image ? _image.src : 0));
            }
        } else if (isWeexAndroid) {
            if (args.length === 6) {
                var _target2 = args[0],
                    _level2 = args[1],
                    _internalformat2 = args[2],
                    _format2 = args[3],
                    _type2 = args[4],
                    _image2 = args[5];

                GCanvasModule.texImage2D(componentId, _target2, _level2, _internalformat2, _format2, _type2, _image2.src);
            } else if (args.length === 9) {
                var _target3 = args[0],
                    _level3 = args[1],
                    _internalformat3 = args[2],
                    _width = args[3],
                    _height = args[4],
                    _border = args[5],
                    _format3 = args[6],
                    _type3 = args[7],
                    _image3 = args[8];

                GCanvasModule.texImage2D(componentId, _target3, _level3, _internalformat3, _width, _height, _border, _format3, _type3, _image3 ? _image3.src : 0);
            }
        }
    },
    texSubImage2D: function texSubImage2D(componentId, target, level, xoffset, yoffset, format, type, image) {
        if (isWeexIOS) {
            if (arguments.length === 8) {
                GBridge.callNative(componentId, _GLmethod2.default.texSubImage2D + ',' + 6 + ',' + target + ',' + level + ',' + xoffset + ',' + yoffset, +',' + format + ',' + type + ',' + image.src);
            }
        } else if (isWeexAndroid) {
            GCanvasModule.texSubImage2D(componentId, target, level, xoffset, yoffset, format, type, image.src);
        }
    },
    bindImageTexture: function bindImageTexture(componentId, src, imageId) {
        console.log(src, imageId);
        GCanvasModule.bindImageTexture([src, imageId], componentId);
    },
    perloadImage: function perloadImage(_ref, callback) {
        var _ref2 = _slicedToArray(_ref, 2),
            url = _ref2[0],
            id = _ref2[1];

        GCanvasModule.preLoadImage([url, id], function (image) {
            image.url = url;
            image.id = id;
            callback(image);
        });
    }
};

exports.default = GBridge;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var isReactNativeIOS = function isReactNativeIOS() {
    GBridge.Platform.OS === 'ios';
};

var isReactNativeAndroid = function isReactNativeAndroid() {
    GBridge.Platform.OS === 'android';
};

var isDebugging = false;

var isComboDisabled = false;

var commandsCache = {};

var GBridge = {

    GCanvasModule: null,

    Platform: null,

    callEnable: function callEnable(ref, configArray) {

        commandsCache[ref] = [];

        return GBridge.GCanvasModule.enable({
            componentId: ref,
            config: configArray
        });
    },

    callEnableDebug: function callEnableDebug() {
        isDebugging = true;
    },

    callEnableDisableCombo: function callEnableDisableCombo() {
        isComboDisabled = true;
    },

    callSetContextType: function callSetContextType(componentId, context_type) {
        GBridge.GCanvasModule.setContextType(context_type, componentId);
    },

    render: function render(componentId) {
        return GBridge.GCanvasModule.extendCallNative({
            contextId: componentId,
            type: 0x60000001
        });
    },

    render2d: function render2d(componentId, commands) {

        if (isDebugging) {
            console.log('>>> >>> render2d ===');
            console.log('>>> commands: ' + commands);
        }

        GBridge.GCanvasModule.render(commands, componentId);
    },

    flushNative: function flushNative(componentId) {},

    callNative: function callNative(componentId, cmdArgs, cache) {},

    texImage2D: function texImage2D(componentId) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (isReactNativeIOS()) {
            if (args.length === 6) {
                var target = args[0],
                    level = args[1],
                    internalformat = args[2],
                    format = args[3],
                    type = args[4],
                    image = args[5];

                GBridge.GBridge.callNative(componentId, GLmethod.texImage2D + ',' + 6 + ',' + target + ',' + level + ',' + internalformat + ',' + format + ',' + type + ',' + image.src);
            } else if (args.length === 9) {
                var _target = args[0],
                    _level = args[1],
                    _internalformat = args[2],
                    width = args[3],
                    height = args[4],
                    border = args[5],
                    _format = args[6],
                    _type = args[7],
                    _image = args[8];

                GBridge.GBridge.callNative(componentId, GLmethod.texImage2D + ',' + 9 + ',' + _target + ',' + _level + ',' + _internalformat + ',' + width + ',' + height + ',' + border + ',' + +_format + ',' + _type + ',' + (_image ? _image.src : 0));
            }
        } else if (isReactNativeAndroid()) {
            if (args.length === 6) {
                var _target2 = args[0],
                    _level2 = args[1],
                    _internalformat2 = args[2],
                    _format2 = args[3],
                    _type2 = args[4],
                    _image2 = args[5];

                GBridge.GCanvasModule.texImage2D(componentId, _target2, _level2, _internalformat2, _format2, _type2, _image2.src);
            } else if (args.length === 9) {
                var _target3 = args[0],
                    _level3 = args[1],
                    _internalformat3 = args[2],
                    _width = args[3],
                    _height = args[4],
                    _border = args[5],
                    _format3 = args[6],
                    _type3 = args[7],
                    _image3 = args[8];

                GBridge.GCanvasModule.texImage2D(componentId, _target3, _level3, _internalformat3, _width, _height, _border, _format3, _type3, _image3 ? _image3.src : 0);
            }
        }
    },
    texSubImage2D: function texSubImage2D(componentId, target, level, xoffset, yoffset, format, type, image) {
        if (isReactNativeIOS()) {
            if (arguments.length === 8) {
                GBridge.callNative(componentId, GLmethod.texSubImage2D + ',' + 6 + ',' + target + ',' + level + ',' + xoffset + ',' + yoffset, +',' + format + ',' + type + ',' + image.src);
            }
        } else if (isReactNativeAndroid()) {
            GCanvasModule.texSubImage2D(componentId, target, level, xoffset, yoffset, format, type, image.src);
        }
    },
    bindImageTexture: function bindImageTexture(componentId, src, imageId) {
        GBridge.GCanvasModule.bindImageTexture([src, imageId], componentId, function (e) {});
    },
    perloadImage: function perloadImage(_ref, callback) {
        var _ref2 = _slicedToArray(_ref, 2),
            url = _ref2[0],
            id = _ref2[1];

        GBridge.GCanvasModule.preLoadImage([url, id], function (image) {
            image.url = url;
            image.id = id;
            callback(image);
        });
    }
};

exports.default = GBridge;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.G3D = t() : e.G3D = t();
}("undefined" != typeof self ? self : undefined, function () {
  return function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;var o = r[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }var r = {};return t.m = e, t.c = r, t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
    }, t.n = function (e) {
      var r = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(r, "a", r), r;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/", t(t.s = 29);
  }([function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(19),
        o = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(n);t.default = o, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e) {
        return Array.isArray(e) ? e : Array.from(e);
      }function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "__isDirty__";return function (s) {
          return function (s) {
            function c() {
              for (var i, s = arguments.length, f = Array(s), l = 0; l < s; l++) {
                f[l] = arguments[l];
              }o(this, c);var h = a(this, (i = c.__proto__ || Object.getPrototypeOf(c)).call.apply(i, [this].concat(f))),
                  p = function e(t, o, a) {
                var i = t.split("."),
                    s = n(i),
                    c = s[0],
                    f = s.slice(1);if (0 !== f.length) e(f.join("."), o[c], a.filter(function (e) {
                  return e.startsWith(f.join(".") + ".");
                }).map(function (e) {
                  return e.substr(f.length + 1);
                }));else {
                  var l = o[c],
                      p = "__" + c + "__";o[p] = l, Object.defineProperty(o, c, { get: function get() {
                      return o[p];
                    }, set: function set(t) {
                      r.isObject(l) && r.isObject(t) && a.forEach(function (r) {
                        e(r, t, a.filter(function (e) {
                          return e.startsWith(r + ".");
                        }).map(function (e) {
                          return e.substr(r.length + 1);
                        }));
                      }), o[p] = t, h[u] = !0;
                    } });
                }
              };return e.forEach(function (t) {
                p(t, h, e.filter(function (e) {
                  return e.startsWith(t + ".");
                }).map(function (e) {
                  return e.substr(t.length + 1);
                }));
              }), t.forEach(function (e) {
                var r = "__" + e + "_result__";h["__" + e + "__"] = h[e], h[e] = function () {
                  for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) {
                    n[o] = arguments[o];
                  }return h[u] && (t.forEach(function (e) {
                    var t = "__" + e + "_result__",
                        r = "__" + e + "__";h[t] = h[r].apply(h, n);
                  }), h[u] = !1), h[r];
                };
              }), h[u] = !0, h;
            }return i(c, s), c;
          }(s);
        };
      }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = u, e.exports = t.default;
    }).call(t, r(17));
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = null;t.default = { get Image() {
        return n || Image;
      }, set Image(e) {
        n = e;
      }, manuallyFlipY: !1, framebufferNotReady: !1 }, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        a = function () {
      function e(t) {
        n(this, e), this.color = { r: 255, g: 255, b: 255 }, this.intensity = 1, t.lights.push(this);
      }return o(e, [{ key: "getColor", value: function value() {
          return [this.color.r, this.color.g, this.color.b];
        } }, { key: "getIntensity", value: function value() {
          return this.intensity;
        } }]), e;
    }();t.default = a, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o, a) {
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var c = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          f = function (e) {
        function t(e) {
          i(this, t);var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return r.geometry = new n(r), r.materials = { default: new o(r) }, r.scene = null, r.visibility = !0, r.pickable = !0, r.renderLayerIndex = 0, r.scene = e, r.scene.meshes.push(r), r;
        }return s(t, e), c(t, [{ key: "dispose", value: function value() {
            var e = a.findIndex(this.scene.meshes, { id: this.id });-1 !== e && this.scene.meshes.splice(e, 1);
          } }, { key: "getGlobalVisibility", value: function value() {
            for (var e = this; null !== e;) {
              if (!e.visibility) return !1;e = e.parent;
            }return !0;
          } }, { key: "getPickable", value: function value() {
            return this.pickable;
          } }, { key: "getRenderLayerIndex", value: function value() {
            for (var e = this; null !== e;) {
              if (0 !== e.renderLayerIndex) return e.renderLayerIndex;e = e.parent;
            }return 0;
          } }]), t;
      }(r);t.default = f, e.exports = t.default;
    }).call(t, r(7), r(9), r(6), r(17));
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        a = function () {
      function e() {
        n(this, e), this.opacity = 1, this.offset = { x: 0, y: 0 };
      }return o(e, [{ key: "getOpacity", value: function value() {
          return this.opacity;
        } }, { key: "getOffset", value: function value() {
          return new Float32Array([this.offset.x, this.offset.y]);
        } }]), e;
    }();a.COLOR = 1, a.TEXTURE = 2, t.default = a, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o, a) {
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var c,
          f,
          l = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          h = (c = r(["ambientColor", "ambientColor.r", "ambientColor.g", "ambientColor.b", "diffuseColor", "diffuseColor.r", "diffuseColor.g", "diffuseColor.b", "specularColor", "specularColor.r", "specularColor.g", "specularColor.b"], ["getAmbientColor", "getDiffuseColor", "getSpecularColor"]))(f = function (e) {
        function t(e) {
          i(this, t);var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return r.ambientColor = { r: 255, g: 255, b: 255 }, r.ambientTexture = new o(r), r.ambientSource = n.COLOR, r.diffuseColor = { r: 255, g: 255, b: 255 }, r.diffuseTexture = new o(r), r.diffuseSource = n.COLOR, r.specularColor = { r: 0, g: 0, b: 0 }, r.specularTexture = new o(r), r.specularSource = n.COLOR, r.glossiness = 1, r.envMapTexture = new o(r), r.useEnvMap = !1, r.mesh = null, r.mesh = e, r;
        }return s(t, e), l(t, [{ key: "getAmbientSource", value: function value() {
            return this.ambientSource;
          } }, { key: "getAmbientColor", value: function value() {
            return a.fromValues(this.ambientColor.r / 255, this.ambientColor.g / 255, this.ambientColor.b / 255);
          } }, { key: "getDiffuseSource", value: function value() {
            return this.diffuseSource;
          } }, { key: "getDiffuseColor", value: function value() {
            return a.fromValues(this.diffuseColor.r / 255, this.diffuseColor.g / 255, this.diffuseColor.b / 255);
          } }, { key: "getSpecularSource", value: function value() {
            return this.specularSource;
          } }, { key: "getSpecularColor", value: function value() {
            return a.fromValues(this.specularColor.r / 255, this.specularColor.g / 255, this.specularColor.b / 255);
          } }, { key: "getGlossiness", value: function value() {
            return this.glossiness;
          } }, { key: "getUseEnvMap", value: function value() {
            return this.useEnvMap;
          } }]), t;
      }(n)) || f;t.default = h, e.exports = t.default;
    }).call(t, r(1), r(5), r(22), r(0));
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o, a, i) {
      function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var s,
          c,
          f = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          l = 1,
          h = (s = r(["position", "position.x", "position.y", "position.z", "rotation", "rotation.x", "rotation.y", "rotation.z", "scale", "scale.x", "scale.y", "scale.z"], ["getMatrix"]))(c = function () {
        function e() {
          u(this, e), this.id = l++, this.position = { x: 0, y: 0, z: 0 }, this.rotation = { x: 0, y: 0, z: 0 }, this.scale = { x: 1, y: 1, z: 1 }, this.parent = null;
        }return f(e, [{ key: "getWorldMatrix", value: function value() {
            if (this.parent) {
              var e = this.parent.getWorldMatrix();return n.multiply(n.create(), e, this.getMatrix());
            }return this.getMatrix();
          } }, { key: "getMatrix", value: function value() {
            var e = o.create();o.fromEuler(e, this.rotation.x, this.rotation.y, this.rotation.z);var t = a.fromValues(this.position.x, this.position.y, this.position.z),
                r = a.fromValues(this.scale.x, this.scale.y, this.scale.z),
                i = n.create();return n.fromRotationTranslationScale(i, e, t, r), i;
          } }, { key: "transformCoordinate", value: function value(e, t, r) {
            var n = this.getMatrix(),
                o = a.fromValues(e, t, r),
                i = a.transformMat4(a.create(), o, n);return { x: i[0], y: i[1], z: i[2] };
          } }, { key: "transformNormal", value: function value(e, t, r) {
            var n = this.getMatrix(),
                o = i.fromValues(e, t, r, 0),
                a = i.transformMat4(i.create(), o, n);return { x: a[0], y: a[1], z: a[2] };
          } }]), e;
      }()) || c;t.default = h, e.exports = t.default;
    }).call(t, r(1), r(8), r(18), r(0), r(21));
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(39),
        o = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(n);t.default = o, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }return r;
        }return Array.from(e);
      }function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var a,
          i,
          u = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];for (var n in r) {
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
        }return e;
      },
          s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          c = (a = r(["normals"], ["getBuffers"]))(i = function () {
        function e(t) {
          o(this, e), this.vertices = [], this.indices = { default: [] }, this.uvs = [], this.normals = [], this.mesh = t;
        }return s(e, [{ key: "getVertices", value: function value() {
            return new Float32Array(this.vertices);
          } }, { key: "getUVs", value: function value() {
            return new Float32Array(this.uvs);
          } }, { key: "getNormals", value: function value() {
            return new Float32Array(this.normals);
          } }, { key: "getIndices", value: function value() {
            var e = u({}, this.indices);for (var t in e) {
              e[t] = new Uint32Array(e[t]);
            }return e;
          } }, { key: "getBuffers", value: function value() {
            var e = this.mesh.scene.engine,
                t = e.createAttributeBuffer(this.getVertices()),
                r = e.createAttributeBuffer(this.getUVs()),
                n = e.createAttributeBuffer(this.getNormals()),
                o = {},
                a = {},
                i = this.getIndices();for (var u in i) {
              o[u] = e.createElementBuffer(i[u]), a[u] = i[u].length;
            }return { vertices: t, uvs: r, normals: n, indices: o, indicesLength: a };
          } }, { key: "mergeNormals", value: function value() {
            for (var e = this, t = this.vertices, r = this.normals, o = [].concat(n(r)), a = {}, i = 0; i < t.length; i += 3) {
              var u = [t[i], t[i + 1], t[i + 2]].join(",");a[u] || (a[u] = { indices: [], normal: [0, 0, 0] });var s = a[u];s.indices.push(i / 3), s.normal[0] += r[i], s.normal[1] += r[i + 1], s.normal[2] += r[i + 2];
            }for (var c in a) {
              for (var f = a[c], l = f.indices, h = f.normal, p = 0; p < l.length; p++) {
                var v = l[p];r[3 * v] = h[0] / l.length, r[3 * v + 1] = h[1] / l.length, r[3 * v + 2] = h[2] / l.length;
              }
            }return this.normals = r, function () {
              e.normals = o;
            };
          } }]), e;
      }()) || i;t.default = c, e.exports = t.default;
    }).call(t, r(1));
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o) {
      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var s = function (e) {
        function t(e) {
          a(this, t);var r = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return r.geometry = new n(r), r.materials = { default: new o(r) }, r.lineWidth = 2, r;
        }return u(t, e), t;
      }(r);t.default = s, e.exports = t.default;
    }).call(t, r(4), r(23), r(11));
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o, a) {
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var c,
          f,
          l = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          h = (c = r(["color", "color.r", "color.g", "color.b"], ["getColor"]))(f = function (e) {
        function t(e) {
          i(this, t);var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return r.color = { r: 255, g: 255, b: 255 }, r.texture = new o(r), r.source = n.COLOR, r.mesh = null, r.mesh = e, r;
        }return s(t, e), l(t, [{ key: "getSource", value: function value() {
            return this.source;
          } }, { key: "getColor", value: function value() {
            return a.fromValues(this.color.r / 255, this.color.g / 255, this.color.b / 255);
          } }]), t;
      }(n)) || f;t.default = h, e.exports = t.default;
    }).call(t, r(1), r(5), r(22), r(0));
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          u = function (e) {
        function t(e) {
          n(this, t);var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return r.direction = { x: 0, y: 0, z: -1 }, r;
        }return a(t, e), i(t, [{ key: "getDirection", value: function value() {
            return [this.direction.x, this.direction.y, this.direction.z];
          } }]), t;
      }(r);t.default = u, e.exports = t.default;
    }).call(t, r(3));
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          u = function (e) {
        function t() {
          var e;n(this, t);for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) {
            a[i] = arguments[i];
          }var u = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)));return u.sky = { r: 255, g: 255, b: 255 }, u.ground = { r: 0, g: 0, b: 0 }, u.up = { x: 0, y: 1, z: 0 }, u;
        }return a(t, e), i(t, [{ key: "getSky", value: function value() {
            return [this.sky.r, this.sky.g, this.sky.b];
          } }, { key: "getGround", value: function value() {
            return [this.ground.r, this.ground.g, this.ground.b];
          } }, { key: "getUp", value: function value() {
            return [this.up.x, this.up.y, this.up.z];
          } }]), t;
      }(r);t.default = u, e.exports = t.default;
    }).call(t, r(3));
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
        function t() {
          return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }return a(t, e), t;
      }(r);t.default = i, e.exports = t.default;
    }).call(t, r(3));
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          u = function e(t, r, n) {
        null === t && (t = Function.prototype);var o = Object.getOwnPropertyDescriptor(t, r);if (void 0 === o) {
          var a = Object.getPrototypeOf(t);return null === a ? void 0 : e(a, r, n);
        }if ("value" in o) return o.value;var i = o.get;if (void 0 !== i) return i.call(n);
      },
          s = function (e) {
        function t() {
          var e, r, a, i;n(this, t);for (var u = arguments.length, s = Array(u), c = 0; c < u; c++) {
            s[c] = arguments[c];
          }return r = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), a.position = { x: 0, y: 0, z: 0 }, a.radius = 1, i = r, o(a, i);
        }return a(t, e), i(t, [{ key: "getPosition", value: function value() {
            return [this.position.x, this.position.y, this.position.z];
          } }, { key: "getIntensity", value: function value() {
            return u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getIntensity", this).call(this) * this.radius * this.radius;
          } }]), t;
      }(r);t.default = s, e.exports = t.default;
    }).call(t, r(3));
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          u = function (e) {
        function t() {
          var e;n(this, t);for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) {
            a[i] = arguments[i];
          }var u = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)));return u.morphTargetsGeometries = [], u.cycleDuration = 1e3, u;
        }return a(t, e), i(t, [{ key: "getMorphPhaseInfo", value: function value() {
            var e = Date.now() / this.cycleDuration % 1,
                t = 1 / this.morphTargetsGeometries.length,
                r = Math.floor(e / t),
                n = Math.ceil(e / t);return n === this.morphTargetsGeometries.length && (n = 0), { before: r, after: n, phase: e / t - r };
          } }]), t;
      }(r);t.default = u, e.exports = t.default;
    }).call(t, r(4));
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (i(t)) return !!t(e);for (var r in t) {
        if (t[r] !== e[r]) return !1;
      }return !0;
    }function o(e, t) {
      for (var r = 0; r < e.length; r++) {
        if (n(e[r], t)) return r;
      }return -1;
    }Object.defineProperty(t, "__esModule", { value: !0 });var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        i = function i(e) {
      return "function" == typeof e;
    },
        u = function u(e) {
      return "object" === (void 0 === e ? "undefined" : a(e));
    };t.default = { isFunction: i, isObject: u, findIndex: o }, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(40),
        o = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(n);t.default = o, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n() {
      var e = new Float32Array(3);return e[0] = 0, e[1] = 0, e[2] = 0, e;
    }function o(e) {
      var t = new Float32Array(3);return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
    }function a(e) {
      var t = e[0],
          r = e[1],
          n = e[2];return Math.sqrt(t * t + r * r + n * n);
    }function i(e, t, r) {
      var n = new Float32Array(3);return n[0] = e, n[1] = t, n[2] = r, n;
    }function u(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
    }function s(e, t, r, n) {
      return e[0] = t, e[1] = r, e[2] = n, e;
    }function c(e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e;
    }function f(e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e;
    }function l(e, t, r) {
      return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e;
    }function h(e, t, r) {
      return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e[2] = t[2] / r[2], e;
    }function p(e, t) {
      return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e;
    }function v(e, t) {
      return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e;
    }function m(e, t, r) {
      return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e[2] = Math.min(t[2], r[2]), e;
    }function d(e, t, r) {
      return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e[2] = Math.max(t[2], r[2]), e;
    }function y(e, t) {
      return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e;
    }function b(e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e;
    }function g(e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e[2] = t[2] + r[2] * n, e;
    }function M(e, t) {
      var r = t[0] - e[0],
          n = t[1] - e[1],
          o = t[2] - e[2];return Math.sqrt(r * r + n * n + o * o);
    }function _(e, t) {
      var r = t[0] - e[0],
          n = t[1] - e[1],
          o = t[2] - e[2];return r * r + n * n + o * o;
    }function x(e) {
      var t = e[0],
          r = e[1],
          n = e[2];return t * t + r * r + n * n;
    }function T(e, t) {
      return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e;
    }function E(e, t) {
      return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e;
    }function w(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = r * r + n * n + o * o;return a > 0 && (a = 1 / Math.sqrt(a), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a), e;
    }function P(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
    }function O(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = r[0],
          u = r[1],
          s = r[2];return e[0] = o * s - a * u, e[1] = a * i - n * s, e[2] = n * u - o * i, e;
    }function A(e, t, r, n) {
      var o = t[0],
          a = t[1],
          i = t[2];return e[0] = o + n * (r[0] - o), e[1] = a + n * (r[1] - a), e[2] = i + n * (r[2] - i), e;
    }function R(e, t, r, n, o, a) {
      var i = a * a,
          u = i * (2 * a - 3) + 1,
          s = i * (a - 2) + a,
          c = i * (a - 1),
          f = i * (3 - 2 * a);return e[0] = t[0] * u + r[0] * s + n[0] * c + o[0] * f, e[1] = t[1] * u + r[1] * s + n[1] * c + o[1] * f, e[2] = t[2] * u + r[2] * s + n[2] * c + o[2] * f, e;
    }function C(e, t, r, n, o, a) {
      var i = 1 - a,
          u = i * i,
          s = a * a,
          c = u * i,
          f = 3 * a * u,
          l = 3 * s * i,
          h = s * a;return e[0] = t[0] * c + r[0] * f + n[0] * l + o[0] * h, e[1] = t[1] * c + r[1] * f + n[1] * l + o[1] * h, e[2] = t[2] * c + r[2] * f + n[2] * l + o[2] * h, e;
    }function F(e, t) {
      t = t || 1;var r = 2 * Math.random() * Math.PI,
          n = 2 * Math.random() - 1,
          o = Math.sqrt(1 - n * n) * t;return e[0] = Math.cos(r) * o, e[1] = Math.sin(r) * o, e[2] = n * t, e;
    }function L(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = r[3] * n + r[7] * o + r[11] * a + r[15];return i = i || 1, e[0] = (r[0] * n + r[4] * o + r[8] * a + r[12]) / i, e[1] = (r[1] * n + r[5] * o + r[9] * a + r[13]) / i, e[2] = (r[2] * n + r[6] * o + r[10] * a + r[14]) / i, e;
    }function j(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2];return e[0] = n * r[0] + o * r[3] + a * r[6], e[1] = n * r[1] + o * r[4] + a * r[7], e[2] = n * r[2] + o * r[5] + a * r[8], e;
    }function S(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = r[0],
          u = r[1],
          s = r[2],
          c = r[3],
          f = c * n + u * a - s * o,
          l = c * o + s * n - i * a,
          h = c * a + i * o - u * n,
          p = -i * n - u * o - s * a;return e[0] = f * c + p * -i + l * -s - h * -u, e[1] = l * c + p * -u + h * -i - f * -s, e[2] = h * c + p * -s + f * -u - l * -i, e;
    }function k(e, t, r, n) {
      var o = [],
          a = [];return o[0] = t[0] - r[0], o[1] = t[1] - r[1], o[2] = t[2] - r[2], a[0] = o[0], a[1] = o[1] * Math.cos(n) - o[2] * Math.sin(n), a[2] = o[1] * Math.sin(n) + o[2] * Math.cos(n), e[0] = a[0] + r[0], e[1] = a[1] + r[1], e[2] = a[2] + r[2], e;
    }function I(e, t, r, n) {
      var o = [],
          a = [];return o[0] = t[0] - r[0], o[1] = t[1] - r[1], o[2] = t[2] - r[2], a[0] = o[2] * Math.sin(n) + o[0] * Math.cos(n), a[1] = o[1], a[2] = o[2] * Math.cos(n) - o[0] * Math.sin(n), e[0] = a[0] + r[0], e[1] = a[1] + r[1], e[2] = a[2] + r[2], e;
    }function N(e, t, r, n) {
      var o = [],
          a = [];return o[0] = t[0] - r[0], o[1] = t[1] - r[1], o[2] = t[2] - r[2], a[0] = o[0] * Math.cos(n) - o[1] * Math.sin(n), a[1] = o[0] * Math.sin(n) + o[1] * Math.cos(n), a[2] = o[2], e[0] = a[0] + r[0], e[1] = a[1] + r[1], e[2] = a[2] + r[2], e;
    }function D(e, t) {
      var r = i(e[0], e[1], e[2]),
          n = i(t[0], t[1], t[2]);w(r, r), w(n, n);var o = P(r, n);return o > 1 ? 0 : o < -1 ? Math.PI : Math.acos(o);
    }function U(e) {
      return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
    }function V(e, t) {
      return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
    }function B(e, t) {
      var r = e[0],
          n = e[1],
          o = e[2],
          a = t[0],
          i = t[1],
          u = t[2];return Math.abs(r - a) <= z * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(n - i) <= z * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(o - u) <= z * Math.max(1, Math.abs(o), Math.abs(u));
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.create = n, t.clone = o, t.length = a, t.fromValues = i, t.copy = u, t.set = s, t.add = c, t.subtract = f, t.multiply = l, t.divide = h, t.ceil = p, t.floor = v, t.min = m, t.max = d, t.round = y, t.scale = b, t.scaleAndAdd = g, t.distance = M, t.squaredDistance = _, t.squaredLength = x, t.negate = T, t.inverse = E, t.normalize = w, t.dot = P, t.cross = O, t.lerp = A, t.hermite = R, t.bezier = C, t.random = F, t.transformMat4 = L, t.transformMat3 = j, t.transformQuat = S, t.rotateX = k, t.rotateY = I, t.rotateZ = N, t.angle = D, t.str = U, t.exactEquals = V, t.equals = B;var z = 1e-6;t.sub = f, t.mul = l, t.div = h, t.dist = M, t.sqrDist = _, t.len = a, t.sqrLen = x, t.forEach = function () {
      var e = n();return function (t, r, n, o, a, i) {
        var u = void 0,
            s = void 0;for (r || (r = 3), n || (n = 0), s = o ? Math.min(o * r + n, t.length) : t.length, u = n; u < s; u += r) {
          e[0] = t[u], e[1] = t[u + 1], e[2] = t[u + 2], a(e, e, i), t[u] = e[0], t[u + 1] = e[1], t[u + 2] = e[2];
        }return t;
      };
    }();
  }, function (e, t, r) {
    "use strict";
    function n() {
      var e = new Float32Array(4);return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e;
    }function o(e) {
      var t = new Float32Array(4);return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
    }function a(e, t, r, n) {
      var o = new Float32Array(4);return o[0] = e, o[1] = t, o[2] = r, o[3] = n, o;
    }function i(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
    }function u(e, t, r, n, o) {
      return e[0] = t, e[1] = r, e[2] = n, e[3] = o, e;
    }function s(e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e;
    }function c(e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e;
    }function f(e, t, r) {
      return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e[3] = t[3] * r[3], e;
    }function l(e, t, r) {
      return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e[2] = t[2] / r[2], e[3] = t[3] / r[3], e;
    }function h(e, t) {
      return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e[3] = Math.ceil(t[3]), e;
    }function p(e, t) {
      return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e[3] = Math.floor(t[3]), e;
    }function v(e, t, r) {
      return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e[2] = Math.min(t[2], r[2]), e[3] = Math.min(t[3], r[3]), e;
    }function m(e, t, r) {
      return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e[2] = Math.max(t[2], r[2]), e[3] = Math.max(t[3], r[3]), e;
    }function d(e, t) {
      return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e[3] = Math.round(t[3]), e;
    }function y(e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e;
    }function b(e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e[2] = t[2] + r[2] * n, e[3] = t[3] + r[3] * n, e;
    }function g(e, t) {
      var r = t[0] - e[0],
          n = t[1] - e[1],
          o = t[2] - e[2],
          a = t[3] - e[3];return Math.sqrt(r * r + n * n + o * o + a * a);
    }function M(e, t) {
      var r = t[0] - e[0],
          n = t[1] - e[1],
          o = t[2] - e[2],
          a = t[3] - e[3];return r * r + n * n + o * o + a * a;
    }function _(e) {
      var t = e[0],
          r = e[1],
          n = e[2],
          o = e[3];return Math.sqrt(t * t + r * r + n * n + o * o);
    }function x(e) {
      var t = e[0],
          r = e[1],
          n = e[2],
          o = e[3];return t * t + r * r + n * n + o * o;
    }function T(e, t) {
      return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e;
    }function E(e, t) {
      return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e;
    }function w(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = r * r + n * n + o * o + a * a;return i > 0 && (i = 1 / Math.sqrt(i), e[0] = r * i, e[1] = n * i, e[2] = o * i, e[3] = a * i), e;
    }function P(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
    }function O(e, t, r, n) {
      var o = t[0],
          a = t[1],
          i = t[2],
          u = t[3];return e[0] = o + n * (r[0] - o), e[1] = a + n * (r[1] - a), e[2] = i + n * (r[2] - i), e[3] = u + n * (r[3] - u), e;
    }function A(e, t) {
      return t = t || 1, e[0] = Math.random(), e[1] = Math.random(), e[2] = Math.random(), e[3] = Math.random(), w(e, e), y(e, e, t), e;
    }function R(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3];return e[0] = r[0] * n + r[4] * o + r[8] * a + r[12] * i, e[1] = r[1] * n + r[5] * o + r[9] * a + r[13] * i, e[2] = r[2] * n + r[6] * o + r[10] * a + r[14] * i, e[3] = r[3] * n + r[7] * o + r[11] * a + r[15] * i, e;
    }function C(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = r[0],
          u = r[1],
          s = r[2],
          c = r[3],
          f = c * n + u * a - s * o,
          l = c * o + s * n - i * a,
          h = c * a + i * o - u * n,
          p = -i * n - u * o - s * a;return e[0] = f * c + p * -i + l * -s - h * -u, e[1] = l * c + p * -u + h * -i - f * -s, e[2] = h * c + p * -s + f * -u - l * -i, e[3] = t[3], e;
    }function F(e) {
      return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
    }function L(e, t) {
      return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
    }function j(e, t) {
      var r = e[0],
          n = e[1],
          o = e[2],
          a = e[3],
          i = t[0],
          u = t[1],
          s = t[2],
          c = t[3];return Math.abs(r - i) <= S * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(n - u) <= S * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(o - s) <= S * Math.max(1, Math.abs(o), Math.abs(s)) && Math.abs(a - c) <= S * Math.max(1, Math.abs(a), Math.abs(c));
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.create = n, t.clone = o, t.fromValues = a, t.copy = i, t.set = u, t.add = s, t.subtract = c, t.multiply = f, t.divide = l, t.ceil = h, t.floor = p, t.min = v, t.max = m, t.round = d, t.scale = y, t.scaleAndAdd = b, t.distance = g, t.squaredDistance = M, t.length = _, t.squaredLength = x, t.negate = T, t.inverse = E, t.normalize = w, t.dot = P, t.lerp = O, t.random = A, t.transformMat4 = R, t.transformQuat = C, t.str = F, t.exactEquals = L, t.equals = j;var S = 1e-6;t.sub = c, t.mul = f, t.div = l, t.dist = g, t.sqrDist = M, t.len = _, t.sqrLen = x, t.forEach = function () {
      var e = n();return function (t, r, n, o, a, i) {
        var u = void 0,
            s = void 0;for (r || (r = 4), n || (n = 0), s = o ? Math.min(o * r + n, t.length) : t.length, u = n; u < s; u += r) {
          e[0] = t[u], e[1] = t[u + 1], e[2] = t[u + 2], e[3] = t[u + 3], a(e, e, i), t[u] = e[0], t[u + 1] = e[1], t[u + 2] = e[2], t[u + 3] = e[3];
        }return t;
      };
    }();
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(20),
        o = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(n);t.default = o, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var o,
          a,
          i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          u = (o = r(["image"], ["getTexture"]))(a = function () {
        function e(t) {
          n(this, e), this.offset = { x: 0, y: 0 }, this.image = new Uint8Array([255, 255, 255, 255]), this.material = null, this.material = t;
        }return i(e, [{ key: "getImage", value: function value() {
            return this.image;
          } }, { key: "getTexture", value: function value() {
            return this.material.mesh.scene.engine.createTexture(this.getImage());
          } }]), e;
      }()) || a;t.default = u, e.exports = t.default;
    }).call(t, r(1));
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var o,
          a,
          i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];for (var n in r) {
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
        }return e;
      },
          u = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          s = (o = r([], ["getBuffers"]))(a = function () {
        function e(t) {
          n(this, e), this.vertices = [], this.indices = { default: [] }, this.mesh = null, this.mesh = t;
        }return u(e, [{ key: "getVertices", value: function value() {
            return new Float32Array(this.vertices);
          } }, { key: "getIndices", value: function value() {
            var e = i({}, this.indices);for (var t in e) {
              e[t] = new Uint32Array(e[t]);
            }return e;
          } }, { key: "getBuffers", value: function value() {
            for (var e = this.mesh.scene.engine, t = this.getVertices(), r = e.createAttributeBuffer(t), n = {}, o = {}, a = [], i = [], u = 0; u < t.length; u += 3) {
              a.push(0, 0), i.push(0, 0, 1);
            }var s = e.createAttributeBuffer(new Float32Array(a)),
                c = e.createAttributeBuffer(new Float32Array(i)),
                f = this.getIndices();for (var l in f) {
              n[l] = e.createElementBuffer(f[l]), o[l] = f[l].length;
            }return { vertices: r, indices: n, indicesLength: o, uvs: s, normals: c };
          } }]), e;
      }()) || a;t.default = s, e.exports = t.default;
    }).call(t, r(1));
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o, a, i) {
      function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function s(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function c(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var f = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          l = function (e) {
        function t(e) {
          u(this, t);var r = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return r.scene = null, r.center = { x: 0, y: 0, z: 0 }, r.up = { x: 0, y: 1, z: 0 }, r.near = 1, r.far = 1e3, r.fov = 90, r.scene = e, e.activeCamera = r, r;
        }return c(t, e), f(t, [{ key: "getVMatrix", value: function value() {
            var e = n.create(),
                t = o.fromValues(this.center.x, this.center.y, this.center.z),
                r = o.fromValues(this.up.x, this.up.y, this.up.z),
                a = o.fromValues(this.position.x, this.position.y, this.position.z);n.lookAt(e, a, t, r), n.invert(e, e);var i = n.create();return n.invert(i, e), i;
          } }, { key: "getPMatrix", value: function value() {
            var e = this.scene,
                t = this.near,
                r = this.far,
                o = this.fov,
                i = e.engine,
                u = i.width,
                s = i.height;return n.perspective(n.create(), a.deg2rad(o), u / s, t, r);
          } }, { key: "getPosition", value: function value() {
            return new Float32Array([this.position.x, this.position.y, this.position.z]);
          } }, { key: "getViewRay", value: function value(e, t) {
            var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                a = this.scene.engine,
                u = a.width,
                s = a.height;r && (t = s - t);var c = 2 * (e / u - .5),
                f = 2 * (t / s - .5),
                l = this.getPMatrix(),
                h = o.fromValues(c, f, 1);o.transformMat4(h, h, n.invert(n.create(), l)), o.transformMat4(h, h, n.invert(n.create(), this.getVMatrix()));var p = o.sub(o.create(), h, o.fromValues(this.position.x, this.position.y, this.position.z)),
                v = new i();return v.origin.x = this.position.x, v.origin.y = this.position.y, v.origin.z = this.position.z, v.direction.x = p[0], v.direction.y = p[1], v.direction.z = p[2], v;
          } }]), t;
      }(r);t.default = l, e.exports = t.default;
    }).call(t, r(7), r(8), r(0), r(25), r(26));
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { rad2deg: function rad2deg(e) {
        return 180 * e / Math.PI;
      }, deg2rad: function deg2rad(e) {
        return e * Math.PI / 180;
      } }, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          a = function () {
        function e() {
          n(this, e), this.origin = { x: 0, y: 0, z: 0 }, this.direction = { x: 0, y: 0, z: 1 };
        }return o(e, [{ key: "intersectPlane", value: function value(e) {
            var t = e.normal,
                n = e.offset,
                o = this.distanceToPlane({ normal: t, offset: n });if (null === o) return null;var a = r.fromValues(this.origin.x, this.origin.y, this.origin.z),
                i = r.normalize(r.create(), r.fromValues(this.direction.x, this.direction.y, this.direction.z)),
                u = r.scale(r.create(), i, o),
                s = r.add(r.create(), a, u);return { x: s[0], y: s[1], z: s[2] };
          } }, { key: "distanceToPlane", value: function value(e) {
            var t = e.normal,
                n = e.offset;t = r.normalize(r.create(), r.fromValues(t.x, t.y, t.z));var o = r.fromValues(this.origin.x, this.origin.y, this.origin.z),
                a = r.normalize(r.create(), r.fromValues(this.direction.x, this.direction.y, this.direction.z)),
                i = r.dot(t, a);if (0 === i) return null;var u = -(r.dot(o, t) - n) / i;return u > 0 ? u : null;
          } }]), e;
      }();t.default = a, e.exports = t.default;
    }).call(t, r(0));
  }, function (e, t, r) {
    "use strict";
    (function (r) {
      function n(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }return r;
        }return Array.from(e);
      }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
        function e(e, t) {
          var r = [],
              n = !0,
              o = !1,
              a = void 0;try {
            for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0) {}
          } catch (e) {
            o = !0, a = e;
          } finally {
            try {
              !n && u.return && u.return();
            } finally {
              if (o) throw a;
            }
          }return r;
        }return function (t, r) {
          if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return e(t, r);throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
          a = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,
          i = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,
          u = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,
          s = /f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,
          c = /f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,
          f = /^usemtl /,
          l = /^mtllib /,
          h = /^g/,
          p = { parse: function parse(e) {
          function t(e) {
            m(e).forEach(function (e) {
              var t = e.split("/").map(function (e) {
                return Number(e) - 1;
              }),
                  r = o(t, 3);v(r[0], r[1], r[2]);
            });
          }function p(e) {
            var t = m(e),
                a = 0;t.forEach(function (e, t, i) {
              var u = e.split("/").map(function (e) {
                return Number(e) - 1;
              }),
                  s = o(u, 2),
                  c = s[0],
                  f = s[1];if (t % 3 == 0) {
                var l,
                    h,
                    p,
                    m = (l = r).fromValues.apply(l, n(y[c])),
                    d = i[t + 1].split("/").map(function (e) {
                  return Number(e) - 1;
                }),
                    g = o(d, 1),
                    M = g[0],
                    _ = (h = r).fromValues.apply(h, n(y[M])),
                    x = i[t + 2].split("/").map(function (e) {
                  return Number(e) - 1;
                }),
                    T = o(x, 1),
                    E = T[0],
                    w = (p = r).fromValues.apply(p, n(y[E])),
                    P = r.sub(r.create(), _, m),
                    O = r.sub(r.create(), w, m),
                    A = r.cross(r.create(), P, O);b.push([].concat(n(A))), a = b.length - 1;
              }v(c, f, a);
            });
          }function v(e, t, r) {
            if (M[e]) {
              var n = d(M[e].uvs, t, M[e].normals, r);-1 !== n ? _.indices[T].push(M[e].pos[n]) : (M[e].uvs.push(t), M[e].normals.push(r), M[e].pos.push(x), _.positions.push(y[e]), _.uvs.push(g[t]), _.normals.push(b[r]), _.indices[T].push(x++));
            } else M[e] = { uvs: [t], normals: [r], pos: [x] }, _.positions.push(y[e]), _.uvs.push(g[t]), _.normals.push(b[r]), _.indices[T].push(x++);
          }function m(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = 1; r + 1 < e.length;) {
              t.push(e[0], e[r], e[r + 1]), r++;
            }return t;
          }function d(e, t, r, n) {
            for (var o = e.map(function (e, t) {
              return { value: e, i: t };
            }).filter(function (e) {
              return e.value === t;
            }).map(function (e) {
              return e.i;
            }), a = 0; a < o.length; a++) {
              if (r[o[a]] === n) return o[a];
            }return -1;
          }var y = [],
              b = [],
              g = [],
              M = [],
              _ = { positions: [], uvs: [], normals: [], indices: {}, mtls: e.mtl ? this.parseMtl(e.mtl) : {} },
              x = 0,
              T = null;return e.obj.split("\n").forEach(function (e) {
            e = e.trim();var r = void 0;if (0 !== e.length && "#" !== e.charAt(0)) if (null !== (r = a.exec(e))) y.push(r.splice(1).map(Number));else if (null !== (r = i.exec(e))) b.push(r.splice(1).map(Number));else if (null !== (r = u.exec(e))) g.push(r.splice(1).map(Number));else if (null !== (r = c.exec(e))) t(r[1].trim().split(" "));else if (null !== (r = s.exec(e))) p(r[1].trim().split(" "));else if (f.test(e)) {
              var n = e.substring(7).trim();_.indices[n] || (_.indices[n] = []), T = n;
            } else l.test(e) ? e.substring(7).trim() : h.test(e) ? e.substring(2).trim() : console.log("Unhandled expression at line : " + e);
          }), _;
        }, parseMtl: function parseMtl(e) {
          var t = e.split("\n"),
              r = {},
              n = null;return t.forEach(function (e) {
            if (e = e.trim(), 0 !== e.length && "#" !== e.charAt(0)) {
              var t = e.indexOf(" "),
                  o = (t >= 0 ? e.substring(0, t) : e).toLowerCase(),
                  a = t >= 0 ? e.substring(t + 1).trim() : "";"newmtl" === o ? (r[a] = {}, n = a) : "kd" === o ? r[n].diffuseColor = a.split(" ").map(Number) : "ka" === o ? r[n].ambientColor = a.split(" ").map(Number) : "ks" === o ? r[n].specularColor = a.split(" ").map(Number) : "map_kd" === o ? r[n].diffuseTexture = a : "map_ka" === o ? r[n].ambientTexture = a : "map_ks" === o ? r[n].specularTexture = a : "ns" === o ? r[n].glossiness = Number(a) : console.log("Unhandled expression at line : " + e);
            }
          }), r;
        } };t.default = p, e.exports = t.default;
    }).call(t, r(0));
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = { parse: function parse(e) {
        return e instanceof ArrayBuffer ? this.parseBinary(e) : this.parseASCII(e);
      }, parseBinary: function parseBinary(e) {
        for (var t = new DataView(e), r = t.getUint32(80, !0), n = [], o = [], a = [], i = [], u = 0; u < r; u++) {
          for (var s = 84 + 50 * u, c = t.getFloat32(s, !0), f = t.getFloat32(s + 4, !0), l = t.getFloat32(s + 8, !0), h = 1; h <= 3; h++) {
            var p = s + 12 * h;n.push(t.getFloat32(p, !0)), n.push(t.getFloat32(p + 4, !0)), n.push(t.getFloat32(p + 8, !0)), o.push(c, f, l), a.push(0, 0), i.push(i.length);
          }
        }return { positions: n, normals: o, uvs: a, indices: i };
      }, parseASCII: function parseASCII(e) {
        for (var t = /facet([\s\S]*?)endfacet/g, r = /[\s]+([+-]?(?:\d+.\d+|\d+.|\d+|.\d+)(?:[eE][+-]?\d+)?)/.source, n = new RegExp("vertex" + r + r + r, "g"), o = new RegExp("normal" + r + r + r, "g"), a = 0, i = [], u = [], s = [], c = [], f = { x: 0, y: 0, z: 0 }, l = void 0; null !== (l = t.exec(e));) {
          for (var h = 0, p = 0, v = l[0]; null !== (l = o.exec(v));) {
            f.x = parseFloat(l[1]), f.y = parseFloat(l[2]), f.z = parseFloat(l[3]), p++;
          }for (; null !== (l = n.exec(v));) {
            i.push(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3])), u.push(f.x, f.y, f.z), s.push(0, 0), c.push(c.length), h++;
          }1 !== p && console.log("normalCountPerFace is not 1"), 3 !== h && console.log("vertexCountPerFace is not 3"), a++;
        }return { positions: i, normals: u, uvs: s, indices: c };
      } };t.default = n, e.exports = t.default;
  }, function (e, t, r) {
    e.exports = r(30);
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o, a, i, u, s, c, f, l, h, p, v, m, d, y, b, g, M, _, x, T, E, w, P, O) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { Engine: r, Scene: n, Node: o, Env: a, PerspectiveCamera: i, ArcRotateCamera: u, Light: s, DirectionalLight: c, HemisphereLight: f, AmbientLight: l, PointLight: h, MeshBuilder: p, Mesh: v, LineMesh: m, Material: d, RawMaterial: y, StandardMaterial: b, Geometry: g, LineGeometry: M, Mat4: _, Vec3: x, Vec4: T, Quat: E, Ray: w, ObjParser: P, StlParser: O }, e.exports = t.default;
    }).call(t, r(31), r(37), r(7), r(2), r(24), r(42), r(3), r(12), r(13), r(14), r(15), r(43), r(4), r(10), r(5), r(11), r(6), r(9), r(23), r(8), r(0), r(21), r(18), r(26), r(27), r(28));
  }, function (e, t, r) {
    "use strict";
    (function (n, o) {
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }return r;
        }return Array.from(e);
      }function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var s = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          c = r(33),
          f = a(c),
          l = r(34),
          h = a(l),
          p = r(35),
          v = a(p),
          m = r(36),
          d = a(m),
          y = function () {
        function e(t) {
          u(this, e), this.width = 0, this.height = 0, this._currentProgram = null, this._programs = {}, this._framebuffers = {};var r = this._gl = t.getContext("webgl", { antialias: !0 });this.width = t.width, this.height = t.height, this._programs = { default: new n({ gl: r, fShaderSource: f.default, vShaderSource: h.default }), picker: new n({ gl: r, fShaderSource: v.default, vShaderSource: d.default }) }, this._framebuffers = { picker: o.framebufferNotReady ? null : this.createFramebuffer({ width: this.width, height: this.height }).framebuffer }, r.viewport(0, 0, this.width, this.height), r.enable(r.DEPTH_TEST), r.getExtension("OES_element_index_uint"), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0);
        }return s(e, [{ key: "clearColorBuffer", value: function value(e) {
            var t = this._gl;t.clearColor(e.r / 255, e.g / 255, e.b / 255, void 0 !== e.a ? e.a / 255 : 1), t.clear(t.COLOR_BUFFER_BIT);
          } }, { key: "clearDepthBuffer", value: function value() {
            var e = this._gl;e.clear(e.DEPTH_BUFFER_BIT);
          } }, { key: "useProgram", value: function value(e) {
            this._currentProgram = this._programs[e], this._gl.useProgram(this._currentProgram._program);
          } }, { key: "uniform", value: function value(e, t) {
            this._currentProgram.uniform(e, t);
          } }, { key: "attribute", value: function value(e, t) {
            this._currentProgram.attribute(e, t);
          } }, { key: "enableDepthMask", value: function value() {
            this._gl.depthMask(!0);
          } }, { key: "disableDepthMask", value: function value() {
            this._gl.depthMask(!1);
          } }, { key: "enableBlend", value: function value() {
            var e = this._gl;e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
          } }, { key: "disableBlend", value: function value() {
            var e = this._gl;e.disable(e.BLEND);
          } }, { key: "createAttributeBuffer", value: function value(e) {
            var t = this._gl,
                r = t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER, r), t.bufferData(t.ARRAY_BUFFER, e, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, null), r;
          } }, { key: "createElementBuffer", value: function value(e) {
            var t = this._gl,
                r = t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r), t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null), r;
          } }, { key: "createTexture", value: function value(e) {
            var t = this._gl,
                r = t.createTexture();if (t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), e instanceof Uint8Array) t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, e);else {
              t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);var n = function n(e) {
                return Math.log(e) / Math.log(2) % 1 == 0;
              };n(e.width) && n(e.height) && (t.generateMipmap(t.TEXTURE_2D), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST_MIPMAP_NEAREST));
            }return r;
          } }, { key: "createFramebuffer", value: function value(e) {
            var t = e.width,
                r = e.height,
                n = e.useColorBuffer,
                o = void 0 !== n && n,
                a = this._gl,
                i = a.createFramebuffer();a.bindFramebuffer(a.FRAMEBUFFER, i);var u = void 0,
                s = void 0;if (o) {
              var c = a.createRenderbuffer();a.bindRenderbuffer(a.RENDERBUFFER, c), a.renderbufferStorage(a.RENDERBUFFER, a.RGBA4, t, r), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.RENDERBUFFER, c), u = c;
            } else {
              var f = a.createTexture();a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, f), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, t, r, 0, a.RGBA, a.UNSIGNED_BYTE, null), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, f, 0), u = f;
            }var l = a.createRenderbuffer();if (a.bindRenderbuffer(a.RENDERBUFFER, l), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, t, r), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, l), s = l, a.checkFramebufferStatus(a.FRAMEBUFFER) !== a.FRAMEBUFFER_COMPLETE) throw new Error("framebuffer not ready " + a.checkFramebufferStatus(a.FRAMEBUFFER));return a.bindFramebuffer(a.FRAMEBUFFER, null), { framebuffer: i, colorTarget: u, depthTarget: s };
          } }, { key: "bindFramebuffer", value: function value(e) {
            var t = this._gl,
                r = this._framebuffers[e];r ? t.bindFramebuffer(t.FRAMEBUFFER, r) : t.bindFramebuffer(t.FRAMEBUFFER, null);
          } }, { key: "lineWidth", value: function value(e) {
            this._gl.lineWidth(e);
          } }, { key: "elements", value: function value(e) {
            var t = this._gl;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e);
          } }, { key: "draw", value: function value(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.lines,
                n = this._gl,
                o = r ? n.LINES : n.TRIANGLES;n.drawElements(o, e, n.UNSIGNED_INT, 0);
          } }, { key: "readFramebufferPixel", value: function value(e, t, r) {
            var n = this._gl;if (this._framebuffers[e]) {
              this.bindFramebuffer(e);var o = new Uint8Array(4);return n.readPixels(t, r, 1, 1, n.RGBA, n.UNSIGNED_BYTE, o), this.bindFramebuffer(null), [].concat(i(o));
            }throw new Error("framebuffer " + e + " not exits");
          } }]), e;
      }();t.default = y, e.exports = t.default;
    }).call(t, r(32), r(2));
  }, function (e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        a = function () {
      function e(t) {
        var r = t.gl,
            o = t.fShaderSource,
            a = t.vShaderSource;n(this, e), this._gl = null, this._program = null, this._uniforms = {}, this._attributes = {}, this._textureCount = 0, this._gl = r, this._fShaderSource = o, this._vShaderSource = a, this._initProgram();
      }return o(e, [{ key: "_initProgram", value: function value() {
          function e(e, t, r) {
            var n = e.createShader(t);if (e.shaderSource(n, r), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) throw "An error occurred compiling the shaders: " + e.getShaderInfoLog(n);return n;
          }function t(e, t) {
            for (var r = ["FLOAT", "FLOAT_VEC2", "FLOAT_VEC3", "FLOAT_VEC4", "FLOAT_MAT2", "FLOAT_MAT3", "FLOAT_MAT4", "INT", "INT_VEC2", "INT_VEC3", "INT_VEC4", "BOOL", "BOOL_VEC2", "BOOL_VEC3", "BOOL_VEC4", "SAMPLER_2D", "SAMPLER_CUBE"], n = 0; n < r.length; n++) {
              if (e[r[n]] === t) return r[n];
            }throw new Error("get type failed ' + value");
          }var r = this._gl,
              n = this._fShaderSource,
              o = this._vShaderSource,
              a = e(r, r.FRAGMENT_SHADER, n),
              i = e(r, r.VERTEX_SHADER, o),
              u = r.createProgram();if (r.attachShader(u, i), r.attachShader(u, a), r.linkProgram(u), !r.getProgramParameter(u, r.LINK_STATUS)) throw "Unable to initialize the shader program: " + r.getProgramInfoLog(u);for (var s = {}, c = {}, f = r.getProgramParameter(u, r.ACTIVE_ATTRIBUTES), l = 0; l < f; l++) {
            var h = r.getActiveAttrib(u, l),
                p = { type: t(r, h.type), position: r.getAttribLocation(u, h.name), info: h };c[h.name] = p;
          }for (var v = r.getProgramParameter(u, r.ACTIVE_UNIFORMS), m = 0; m < v; m++) {
            var d = r.getActiveUniform(u, m),
                y = { type: t(r, d.type), position: r.getUniformLocation(u, d.name), info: d };if ("2D" === this._parseType(y.type).baseVecType) {
              var b = ++this._textureCount;y.unit = b;
            }var g = d.name;g.endsWith("[0]") && (g = g.replace("[0]", "")), s[g] = y;
          }this._program = u, this._attributes = c, this._uniforms = s;
        } }, { key: "_parseType", value: function value(e) {
          var t = e.split("_")[0],
              r = e.split("_").length > 1 ? e.split("_")[1] : "VEC1";return { baseType: t, vecType: r, baseVecType: r.substr(0, 3), vecSize: Number(r[3]) };
        } }, { key: "uniform", value: function value(e, t) {
          if (this._uniforms[e]) {
            var r = this._gl,
                n = this._uniforms[e],
                o = n.type,
                a = (n.info, n.position),
                i = n.unit,
                u = this._parseType(o),
                s = u.baseType,
                c = (u.vecType, u.baseVecType),
                f = u.vecSize;switch (c) {case "VEC":
                r[["uniform", f, "FLOAT" === s ? "f" : "i", "v"].join("")](a, t);break;case "MAT":
                r[["uniform", "Matrix", f, "fv"].join("")](a, !1, t);break;case "2D":
                r.activeTexture(r["TEXTURE" + i]), r.bindTexture(r.TEXTURE_2D, t), r.uniform1i(a, i);break;default:
                throw "baseVecType invalid";}
          }
        } }, { key: "attribute", value: function value(e, t) {
          if (this._attributes[e]) {
            var r = this._gl,
                n = this._attributes[e],
                o = n.type,
                a = (n.info, n.position),
                i = this._parseType(o),
                u = i.baseType,
                s = (i.vecType, i.baseVecType, i.vecSize);r.bindBuffer(r.ARRAY_BUFFER, t), r.vertexAttribPointer(a, s, r[u], !1, 0, 0), r.enableVertexAttribArray(a);
          }
        } }]), e;
    }();t.default = a, e.exports = t.default;
  }, function (e, t) {
    e.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define PI 3.1415926\n\n#define LIGHT_MAX_COUNT 16\n#define LIGHT_TYPE_NULL 1\n#define LIGHT_TYPE_AMBIENT 2\n#define LIGHT_TYPE_DIRECTIONAL 3\n#define LIGHT_TYPE_POINT 4\n#define LIGHT_TYPE_HEMISPHERE 5\n\n#define MATERIAL_TYPE_RAW 1\n#define MATERIAL_TYPE_STANDARD 2\n\nuniform vec3 uCameraPosition;\n\nuniform int uLightType[LIGHT_MAX_COUNT];\nuniform vec3 uLightColor1[LIGHT_MAX_COUNT];\nuniform vec3 uLightColor2[LIGHT_MAX_COUNT];\nuniform float uLightIntensity[LIGHT_MAX_COUNT];\nuniform vec3 uLightPosition[LIGHT_MAX_COUNT];\n\nuniform int uMaterialType;\nuniform float uMaterialOpacity;\nuniform vec2 uMaterialOffset;\nuniform bool uMaterialAmbientTextureFlag;\nuniform bool uMaterialDiffuseTextureFlag;\nuniform bool uMaterialSpecularTextureFlag;\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform sampler2D uAmbientTexture;\nuniform sampler2D uDiffuseTexture;\nuniform sampler2D uSpecularTexture;\nuniform float uGlossiness;\nuniform bool uEnvMapFlag;\nuniform sampler2D uEnvMapTexture;\n\nvarying vec2 vUV;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\nuniform bool manuallyFlipY;\n\nvec2 des2pol(vec3 pos){\n    float r = distance(vec2(pos.x, pos.z), vec2(0.0));\n    float beta = atan(pos.y, r);\n    float v = beta / PI + 0.5;\n    float alpha = atan(pos.x, pos.z);\n    float u = alpha / (PI * 2.0) + 0.5;\n    return vec2(u, v);\n}\n\n\nvec3 applyLights(vec3 ambientColorSource, vec3 diffuseColorSource, vec3 specularColorSource){\n    vec3 colorLighted = vec3(0.0);\n\n    vec3 nNormal = normalize(vNormal);\n    vec3 nViewDirection = normalize(uCameraPosition - vPosition);\n\n    if(uEnvMapFlag){\n        vec3 viewReflect = reflect(-nViewDirection, nNormal);\n        vec2 viewReflectUV = des2pol(viewReflect);\n        vec3 envMapFactor = texture2D(uEnvMapTexture, viewReflectUV).xyz;\n        specularColorSource *= envMapFactor;\n    }\n\n    for(int i = 0; i < LIGHT_MAX_COUNT; i++){\n        int type = uLightType[i];\n        if(type == LIGHT_TYPE_DIRECTIONAL){\n\n            vec3 nLightDir = normalize(uLightPosition[i]);\n\n            float factorLambert = max(dot(nNormal, nLightDir), 0.0);\n            vec3 diffuseIncrement = factorLambert * uLightColor1[i] * uLightIntensity[i] * diffuseColorSource;\n            colorLighted += diffuseIncrement;\n\n            float factorPhong = pow(max(dot(reflect(-nLightDir, nNormal), nViewDirection), 0.0), uGlossiness);\n            vec3 specularIncrement = factorPhong * uLightColor1[i] * uLightIntensity[i] * specularColorSource;\n            colorLighted += specularIncrement;\n\n        }else if(type ==  LIGHT_TYPE_POINT){\n\n            vec3 ray = uLightPosition[i] - vPosition;\n            float rayLen = length(ray);\n            float decayedIntensity = 1.0 / (rayLen * rayLen) * uLightIntensity[i];\n\n            vec3 nLightDir = normalize(ray);\n\n            float factorLambert = abs(dot(normalize(vNormal), nLightDir));\n            vec3 diffuseIncrement = factorLambert * uLightColor1[i] * decayedIntensity * diffuseColorSource;\n            colorLighted += diffuseIncrement;\n\n            float factorPhong = pow(max(dot(reflect(-nLightDir, nNormal), nViewDirection), 0.0), uGlossiness);\n            vec3 specularIncrement = factorPhong * uLightColor1[i] * decayedIntensity * specularColorSource;\n            colorLighted += specularIncrement;\n\n        }else if(type == LIGHT_TYPE_AMBIENT){\n\n            vec3 increment = uLightColor1[i] * uLightIntensity[i] * ambientColorSource;\n            colorLighted += increment;\n\n        }else if(type == LIGHT_TYPE_HEMISPHERE){\n\n            float factor = dot(normalize(vNormal), normalize(uLightPosition[i]));\n            vec3 increment = mix(uLightColor2[i], uLightColor1[i], factor * 0.5 + 0.5) * uLightIntensity[i] * diffuseColorSource;\n            colorLighted += increment;\n\n        }\n    }\n\n    return colorLighted;\n}\n\nvoid main() {\n\n    vec2 offsetedUV = vUV;\n    offsetedUV = fract(offsetedUV + uMaterialOffset);\n    if(manuallyFlipY){\n        offsetedUV.y = 1.0 - offsetedUV.y;\n    }\n\n    vec4 diffuseColorSource = uMaterialDiffuseTextureFlag ? texture2D(uDiffuseTexture, offsetedUV) : vec4(uDiffuseColor, 1.0);\n\n    if(uMaterialType == MATERIAL_TYPE_STANDARD){\n        vec4 ambientColorSource = uMaterialAmbientTextureFlag ? texture2D(uAmbientTexture, offsetedUV) : vec4(uAmbientColor, 1.0);\n        vec4 specularColorSource = uMaterialSpecularTextureFlag ? texture2D(uSpecularTexture, offsetedUV) : vec4(uSpecularColor, 1.0);\n        gl_FragColor = vec4(applyLights(ambientColorSource.xyz, diffuseColorSource.xyz, specularColorSource.xyz), uMaterialOpacity);\n    }else if(uMaterialType == MATERIAL_TYPE_RAW){\n        gl_FragColor = vec4(diffuseColorSource.xyz, uMaterialOpacity);\n    }\n}";
  }, function (e, t) {
    e.exports = "attribute vec3 aPosition;\nattribute vec2 aUV;\nattribute vec3 aNormal;\n\nuniform mat4 uPMatrix;\nuniform mat4 uVMatrix;\nuniform mat4 uMMatrix;\n\nuniform bool uMorphTargetFlag;\nuniform float uMorphPhase;\nattribute vec3 aPosition2;\nattribute vec2 aUV2;\nattribute vec3 aNormal2;\n\nvarying vec2 vUV;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\nvoid main() {\n\n    vec3 aPositionRes = aPosition;\n    vec2 aUVRes = aUV;\n    vec3 aNormalRes = aNormal;\n\n    if(uMorphTargetFlag){\n        aPositionRes = mix(aPosition, aPosition2, uMorphPhase);\n        aUVRes = mix(aUV, aUV2, uMorphPhase);\n        aNormalRes = mix(aNormal, aNormal2, uMorphPhase);\n    }\n\n    gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aPositionRes, 1.0);\n\n    vUV = aUVRes;\n    vNormal = normalize((uMMatrix * vec4( aNormalRes, 0.0)).xyz);\n    vPosition = (uMMatrix * vec4(aPositionRes, 1.0)).xyz;\n}";
  }, function (e, t) {
    e.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform int meshId;\nvoid main() {\n    float n = float(meshId);\n    float n1 = fract(n / 16.0);\n    n = n / 16.0 - n1;\n    float n2 = fract(n / 16.0);\n    n = n / 16.0 - n2;\n    float n3 = fract(n / 16.0);\n    n = n / 16.0 - n3;\n    float n4 = fract(n / 16.0);\n    gl_FragColor = vec4(n1, n2, n3, n4);\n}";
  }, function (e, t) {
    e.exports = "attribute vec3 aPosition;\n\nuniform mat4 uPMatrix;\nuniform mat4 uVMatrix;\nuniform mat4 uMMatrix;\n\nuniform bool uMorphTargetFlag;\nuniform float uMorphPhase;\nattribute vec3 aPosition2;\n\nvoid main() {\n\n    vec3 aPositionRes = aPosition;\n\n    if(uMorphTargetFlag){\n        aPositionRes = mix(aPosition, aPosition2, uMorphPhase);\n    }\n\n    gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aPositionRes, 1.0);\n}";
  }, function (e, t, r) {
    "use strict";
    (function (r, n) {
      function o(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }return r;
        }return Array.from(e);
      }function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          u = function () {
        function e(t) {
          a(this, e), this.clearColor = { r: 200, g: 200, b: 200 }, this.engine = null, this.activeCamera = null, this.meshes = [], this.lights = [], this.renderManager = new r(this), this.engine = t;
        }return i(e, [{ key: "render", value: function value() {
            this.renderManager.render();
          } }, { key: "pick", value: function value(e, t) {
            var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];return n.framebufferNotReady ? null : (r && (t = this.engine.height - t), [].concat(o(this.engine.readFramebufferPixel("picker", e, t))).map(function (e) {
              return Math.round(e / 16);
            }).reduceRight(function (e, t) {
              return 16 * e + t;
            }, 0));
          } }]), e;
      }();t.default = u, e.exports = t.default;
    }).call(t, r(38), r(2));
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o, a, i, u, s, c, f, l, h) {
      function p(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }return r;
        }return Array.from(e);
      }function v(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var m = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          d = function () {
        function e(t) {
          v(this, e), this.scene = null, this.renderData = {}, this.needUpdateRenderData = !0, this.scene = t;
        }return m(e, [{ key: "composeLight", value: function value() {
            var e = this.scene,
                t = e.lights;if (t.length > 16) throw new Error("[G3D] Scene could not have more than 16 lights.");for (var i = { type: [], color1: [], color2: [], intensity: [], position: [] }, u = 0; u < 16; u++) {
              var s = t[u];if (s instanceof r) {
                var c, f;i.type.push(3), (c = i.color1).push.apply(c, p(s.getColor())), i.color2.push(0, 0, 0), i.intensity.push(s.getIntensity()), (f = i.position).push.apply(f, p(s.getDirection()));
              } else if (s instanceof n) {
                var l, h, v;i.type.push(5), (l = i.color1).push.apply(l, p(s.getSky())), (h = i.color2).push.apply(h, p(s.getGround())), i.intensity.push(s.getIntensity()), (v = i.position).push.apply(v, p(s.getUp()));
              } else if (s instanceof o) {
                var m;i.type.push(2), (m = i.color1).push.apply(m, p(s.getColor())), i.color2.push(0, 0, 0), i.intensity.push(s.getIntensity()), i.position.push(0, 0, 0);
              } else if (s instanceof a) {
                var d, y;i.type.push(4), (d = i.color1).push.apply(d, p(s.getColor())), i.color2.push(0, 0, 0), i.intensity.push(s.getIntensity()), (y = i.position).push.apply(y, p(s.getPosition()));
              } else i.type.push(1), i.color1.push(0, 0, 0), i.color2.push(0, 0, 0), i.intensity.push(0), i.position.push(0, 0, 0);
            }return { type: new Int32Array(i.type), color1: new Float32Array(i.color1.map(function (e) {
                return e / 255;
              })), color2: new Float32Array(i.color2.map(function (e) {
                return e / 255;
              })), intensity: new Float32Array(i.intensity), position: new Float32Array(i.position) };
          } }, { key: "groupMeshLayers", value: function value() {
            var e = this.scene,
                t = e.meshes,
                r = [];return t.forEach(function (e) {
              var t = e.getRenderLayerIndex();r[t] || (r[t] = []), r[t].push(e);
            }), r.filter(Boolean);
          } }, { key: "render", value: function value() {
            if (this.scene.activeCamera) {
              var e = this.groupMeshLayers();this.renderMainLayer(e), i.framebufferNotReady || this.renderPickingLayer(e);
            }
          } }, { key: "renderMainLayer", value: function value(e) {
            var t = this,
                r = this.scene,
                n = r.engine;n.useProgram("default"), n.uniform("manuallyFlipY", [Number(i.manuallyFlipY)]), r.engine.uniform("uVMatrix", r.activeCamera.getVMatrix()), r.engine.uniform("uPMatrix", r.activeCamera.getPMatrix()), r.engine.uniform("uCameraPosition", r.activeCamera.getPosition());var o = this.composeLight();n.uniform("uLightType", o.type), n.uniform("uLightColor1", o.color1), n.uniform("uLightColor2", o.color2), n.uniform("uLightIntensity", o.intensity), n.uniform("uLightPosition", o.position), n.clearColorBuffer(r.clearColor), e.forEach(function (e) {
              n.clearDepthBuffer(), e.filter(function (e) {
                return e.getGlobalVisibility();
              }).forEach(function (e) {
                t.renderMeshMainLayer(e);
              });
            });
          } }, { key: "renderMeshMainLayer", value: function value(e) {
            var t = this.scene,
                r = t.engine;if (r.uniform("uMMatrix", e.getWorldMatrix()), e instanceof u) {
              var n = e.getMorphPhaseInfo(),
                  o = n.before,
                  a = n.after,
                  i = n.phase,
                  p = e.morphTargetsGeometries[o].getBuffers(),
                  v = e.morphTargetsGeometries[a].getBuffers();r.uniform("uMorphTargetFlag", [!0]), r.attribute("aPosition", p.vertices), r.attribute("aUV", p.uvs), r.attribute("aNormal", p.normals), r.attribute("aPosition2", v.vertices), r.attribute("aUV2", v.uvs), r.attribute("aNormal2", v.normals), r.uniform("uMorphPhase", [i]);
            } else if (e instanceof s || e instanceof c) {
              var m = e.geometry.getBuffers();r.uniform("uMorphTargetFlag", [!1]), r.attribute("aPosition", m.vertices), r.attribute("aPosition2", m.vertices), r.attribute("aUV", m.uvs), r.attribute("aUV2", m.uvs), r.attribute("aNormal", m.normals), r.attribute("aNormal2", m.normals);
            }var d = e.materials;for (var y in d) {
              var b = y,
                  g = d[b];g instanceof f ? (r.uniform("uMaterialType", [2]), r.uniform("uMaterialAmbientTextureFlag", [Number(g.getAmbientSource() === l.TEXTURE)]), r.uniform("uMaterialDiffuseTextureFlag", [Number(g.getDiffuseSource() === l.TEXTURE)]), r.uniform("uMaterialSpecularTextureFlag", [Number(g.getSpecularSource() === l.TEXTURE)]), g.getUseEnvMap() ? (r.uniform("uEnvMapFlag", [Number(!0)]), r.uniform("uEnvMapTexture", g.envMapTexture.getTexture())) : r.uniform("uEnvMapFlag", [Number(!1)]), r.uniform("uAmbientColor", g.getAmbientColor()), r.uniform("uAmbientTexture", g.ambientTexture.getTexture()), r.uniform("uDiffuseColor", g.getDiffuseColor()), r.uniform("uDiffuseTexture", g.diffuseTexture.getTexture()), r.uniform("uSpecularColor", g.getSpecularColor()), r.uniform("uSpecularTexture", g.specularTexture.getTexture()), r.uniform("uGlossiness", [g.getGlossiness()])) : g instanceof h && (r.uniform("uMaterialType", [1]), g.getSource() === l.COLOR ? r.uniform("uMaterialDiffuseTextureFlag", [Number(!1)]) : r.uniform("uMaterialDiffuseTextureFlag", [Number(!0)]), r.uniform("uDiffuseColor", g.getColor()), r.uniform("uDiffuseTexture", g.texture.getTexture())), r.uniform("uMaterialOpacity", [g.getOpacity()]), r.uniform("uMaterialOffset", g.getOffset()), g.getOpacity() < 1 ? (r.enableBlend(), r.disableDepthMask()) : (r.enableDepthMask(), r.disableBlend());var M = e.geometry.getBuffers();r.elements(M.indices[b]), e instanceof c ? (r.lineWidth(e.lineWidth), r.draw(M.indicesLength[b], { lines: !0 })) : r.draw(M.indicesLength[b]);
            }
          } }, { key: "renderPickingLayer", value: function value(e) {
            var t = this,
                r = this.scene,
                n = r.engine;n.useProgram("picker"), n.bindFramebuffer("picker"), n.uniform("uVMatrix", r.activeCamera.getVMatrix()), n.uniform("uPMatrix", r.activeCamera.getPMatrix()), n.clearColorBuffer({ r: 0, g: 0, b: 0, a: 1 }), e.forEach(function (e) {
              n.clearDepthBuffer(), e.filter(function (e) {
                return e.getPickable();
              }).forEach(function (e) {
                t.renderMeshPickingLayer(e);
              });
            }), n.bindFramebuffer(null);
          } }, { key: "renderMeshPickingLayer", value: function value(e) {
            var t = this.scene,
                r = t.engine;if (r.uniform("uMMatrix", e.getWorldMatrix()), e instanceof u) {
              var n = e.getMorphPhaseInfo(),
                  o = n.before,
                  a = n.after,
                  i = n.phase,
                  f = e.morphTargetsGeometries[o].getBuffers(),
                  l = e.morphTargetsGeometries[a].getBuffers();r.uniform("uMorphTargetFlag", [!0]), r.attribute("aPosition", f.vertices), r.attribute("aPosition2", l.vertices), r.uniform("uMorphPhase", [i]);
            } else if (e instanceof s || e instanceof c) {
              var h = e.geometry.getBuffers();r.uniform("uMorphTargetFlag", [!1]), r.attribute("aPosition", h.vertices), r.attribute("aPosition2", h.vertices), r.uniform("uMorphPhase", [0]);
            }r.uniform("meshId", [e.id]);var p = e.materials;for (var v in p) {
              var m = (p[v], e.geometry.getBuffers());r.elements(m.indices[v]), e instanceof c ? (r.lineWidth(e.lineWidth), r.draw(m.indicesLength[v], { lines: !0 })) : r.draw(m.indicesLength[v]);
            }
          } }]), e;
      }();t.default = d, e.exports = t.default;
    }).call(t, r(12), r(13), r(14), r(15), r(2), r(16), r(4), r(10), r(6), r(5), r(11));
  }, function (e, t, r) {
    "use strict";
    function n() {
      var e = new Float32Array(16);return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
    }function o(e) {
      var t = new Float32Array(16);return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
    }function a(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
    }function i(e, t, r, n, o, a, i, u, s, c, f, l, h, p, v, m) {
      var d = new Float32Array(16);return d[0] = e, d[1] = t, d[2] = r, d[3] = n, d[4] = o, d[5] = a, d[6] = i, d[7] = u, d[8] = s, d[9] = c, d[10] = f, d[11] = l, d[12] = h, d[13] = p, d[14] = v, d[15] = m, d;
    }function u(e, t, r, n, o, a, i, u, s, c, f, l, h, p, v, m, d) {
      return e[0] = t, e[1] = r, e[2] = n, e[3] = o, e[4] = a, e[5] = i, e[6] = u, e[7] = s, e[8] = c, e[9] = f, e[10] = l, e[11] = h, e[12] = p, e[13] = v, e[14] = m, e[15] = d, e;
    }function s(e) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
    }function c(e, t) {
      if (e === t) {
        var r = t[1],
            n = t[2],
            o = t[3],
            a = t[6],
            i = t[7],
            u = t[11];e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = r, e[6] = t[9], e[7] = t[13], e[8] = n, e[9] = a, e[11] = t[14], e[12] = o, e[13] = i, e[14] = u;
      } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];return e;
    }function f(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = t[4],
          u = t[5],
          s = t[6],
          c = t[7],
          f = t[8],
          l = t[9],
          h = t[10],
          p = t[11],
          v = t[12],
          m = t[13],
          d = t[14],
          y = t[15],
          b = r * u - n * i,
          g = r * s - o * i,
          M = r * c - a * i,
          _ = n * s - o * u,
          x = n * c - a * u,
          T = o * c - a * s,
          E = f * m - l * v,
          w = f * d - h * v,
          P = f * y - p * v,
          O = l * d - h * m,
          A = l * y - p * m,
          R = h * y - p * d,
          C = b * R - g * A + M * O + _ * P - x * w + T * E;return C ? (C = 1 / C, e[0] = (u * R - s * A + c * O) * C, e[1] = (o * A - n * R - a * O) * C, e[2] = (m * T - d * x + y * _) * C, e[3] = (h * x - l * T - p * _) * C, e[4] = (s * P - i * R - c * w) * C, e[5] = (r * R - o * P + a * w) * C, e[6] = (d * M - v * T - y * g) * C, e[7] = (f * T - h * M + p * g) * C, e[8] = (i * A - u * P + c * E) * C, e[9] = (n * P - r * A - a * E) * C, e[10] = (v * x - m * M + y * b) * C, e[11] = (l * M - f * x - p * b) * C, e[12] = (u * w - i * O - s * E) * C, e[13] = (r * O - n * w + o * E) * C, e[14] = (m * g - v * _ - d * b) * C, e[15] = (f * _ - l * g + h * b) * C, e) : null;
    }function l(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = t[4],
          u = t[5],
          s = t[6],
          c = t[7],
          f = t[8],
          l = t[9],
          h = t[10],
          p = t[11],
          v = t[12],
          m = t[13],
          d = t[14],
          y = t[15];return e[0] = u * (h * y - p * d) - l * (s * y - c * d) + m * (s * p - c * h), e[1] = -(n * (h * y - p * d) - l * (o * y - a * d) + m * (o * p - a * h)), e[2] = n * (s * y - c * d) - u * (o * y - a * d) + m * (o * c - a * s), e[3] = -(n * (s * p - c * h) - u * (o * p - a * h) + l * (o * c - a * s)), e[4] = -(i * (h * y - p * d) - f * (s * y - c * d) + v * (s * p - c * h)), e[5] = r * (h * y - p * d) - f * (o * y - a * d) + v * (o * p - a * h), e[6] = -(r * (s * y - c * d) - i * (o * y - a * d) + v * (o * c - a * s)), e[7] = r * (s * p - c * h) - i * (o * p - a * h) + f * (o * c - a * s), e[8] = i * (l * y - p * m) - f * (u * y - c * m) + v * (u * p - c * l), e[9] = -(r * (l * y - p * m) - f * (n * y - a * m) + v * (n * p - a * l)), e[10] = r * (u * y - c * m) - i * (n * y - a * m) + v * (n * c - a * u), e[11] = -(r * (u * p - c * l) - i * (n * p - a * l) + f * (n * c - a * u)), e[12] = -(i * (l * d - h * m) - f * (u * d - s * m) + v * (u * h - s * l)), e[13] = r * (l * d - h * m) - f * (n * d - o * m) + v * (n * h - o * l), e[14] = -(r * (u * d - s * m) - i * (n * d - o * m) + v * (n * s - o * u)), e[15] = r * (u * h - s * l) - i * (n * h - o * l) + f * (n * s - o * u), e;
    }function h(e) {
      var t = e[0],
          r = e[1],
          n = e[2],
          o = e[3],
          a = e[4],
          i = e[5],
          u = e[6],
          s = e[7],
          c = e[8],
          f = e[9],
          l = e[10],
          h = e[11],
          p = e[12],
          v = e[13],
          m = e[14],
          d = e[15];return (t * i - r * a) * (l * d - h * m) - (t * u - n * a) * (f * d - h * v) + (t * s - o * a) * (f * m - l * v) + (r * u - n * i) * (c * d - h * p) - (r * s - o * i) * (c * m - l * p) + (n * s - o * u) * (c * v - f * p);
    }function p(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = t[4],
          s = t[5],
          c = t[6],
          f = t[7],
          l = t[8],
          h = t[9],
          p = t[10],
          v = t[11],
          m = t[12],
          d = t[13],
          y = t[14],
          b = t[15],
          g = r[0],
          M = r[1],
          _ = r[2],
          x = r[3];return e[0] = g * n + M * u + _ * l + x * m, e[1] = g * o + M * s + _ * h + x * d, e[2] = g * a + M * c + _ * p + x * y, e[3] = g * i + M * f + _ * v + x * b, g = r[4], M = r[5], _ = r[6], x = r[7], e[4] = g * n + M * u + _ * l + x * m, e[5] = g * o + M * s + _ * h + x * d, e[6] = g * a + M * c + _ * p + x * y, e[7] = g * i + M * f + _ * v + x * b, g = r[8], M = r[9], _ = r[10], x = r[11], e[8] = g * n + M * u + _ * l + x * m, e[9] = g * o + M * s + _ * h + x * d, e[10] = g * a + M * c + _ * p + x * y, e[11] = g * i + M * f + _ * v + x * b, g = r[12], M = r[13], _ = r[14], x = r[15], e[12] = g * n + M * u + _ * l + x * m, e[13] = g * o + M * s + _ * h + x * d, e[14] = g * a + M * c + _ * p + x * y, e[15] = g * i + M * f + _ * v + x * b, e;
    }function v(e, t, r) {
      var n = r[0],
          o = r[1],
          a = r[2],
          i = void 0,
          u = void 0,
          s = void 0,
          c = void 0,
          f = void 0,
          l = void 0,
          h = void 0,
          p = void 0,
          v = void 0,
          m = void 0,
          d = void 0,
          y = void 0;return t === e ? (e[12] = t[0] * n + t[4] * o + t[8] * a + t[12], e[13] = t[1] * n + t[5] * o + t[9] * a + t[13], e[14] = t[2] * n + t[6] * o + t[10] * a + t[14], e[15] = t[3] * n + t[7] * o + t[11] * a + t[15]) : (i = t[0], u = t[1], s = t[2], c = t[3], f = t[4], l = t[5], h = t[6], p = t[7], v = t[8], m = t[9], d = t[10], y = t[11], e[0] = i, e[1] = u, e[2] = s, e[3] = c, e[4] = f, e[5] = l, e[6] = h, e[7] = p, e[8] = v, e[9] = m, e[10] = d, e[11] = y, e[12] = i * n + f * o + v * a + t[12], e[13] = u * n + l * o + m * a + t[13], e[14] = s * n + h * o + d * a + t[14], e[15] = c * n + p * o + y * a + t[15]), e;
    }function m(e, t, r) {
      var n = r[0],
          o = r[1],
          a = r[2];return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * o, e[5] = t[5] * o, e[6] = t[6] * o, e[7] = t[7] * o, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = t[11] * a, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
    }function d(e, t, r, n) {
      var o = n[0],
          a = n[1],
          i = n[2],
          u = Math.sqrt(o * o + a * a + i * i),
          s = void 0,
          c = void 0,
          f = void 0,
          l = void 0,
          h = void 0,
          p = void 0,
          v = void 0,
          m = void 0,
          d = void 0,
          y = void 0,
          b = void 0,
          g = void 0,
          M = void 0,
          _ = void 0,
          x = void 0,
          T = void 0,
          E = void 0,
          w = void 0,
          P = void 0,
          O = void 0,
          A = void 0,
          R = void 0,
          C = void 0,
          F = void 0;return Math.abs(u) < H ? null : (u = 1 / u, o *= u, a *= u, i *= u, s = Math.sin(r), c = Math.cos(r), f = 1 - c, l = t[0], h = t[1], p = t[2], v = t[3], m = t[4], d = t[5], y = t[6], b = t[7], g = t[8], M = t[9], _ = t[10], x = t[11], T = o * o * f + c, E = a * o * f + i * s, w = i * o * f - a * s, P = o * a * f - i * s, O = a * a * f + c, A = i * a * f + o * s, R = o * i * f + a * s, C = a * i * f - o * s, F = i * i * f + c, e[0] = l * T + m * E + g * w, e[1] = h * T + d * E + M * w, e[2] = p * T + y * E + _ * w, e[3] = v * T + b * E + x * w, e[4] = l * P + m * O + g * A, e[5] = h * P + d * O + M * A, e[6] = p * P + y * O + _ * A, e[7] = v * P + b * O + x * A, e[8] = l * R + m * C + g * F, e[9] = h * R + d * C + M * F, e[10] = p * R + y * C + _ * F, e[11] = v * R + b * C + x * F, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
    }function y(e, t, r) {
      var n = Math.sin(r),
          o = Math.cos(r),
          a = t[4],
          i = t[5],
          u = t[6],
          s = t[7],
          c = t[8],
          f = t[9],
          l = t[10],
          h = t[11];return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = a * o + c * n, e[5] = i * o + f * n, e[6] = u * o + l * n, e[7] = s * o + h * n, e[8] = c * o - a * n, e[9] = f * o - i * n, e[10] = l * o - u * n, e[11] = h * o - s * n, e;
    }function b(e, t, r) {
      var n = Math.sin(r),
          o = Math.cos(r),
          a = t[0],
          i = t[1],
          u = t[2],
          s = t[3],
          c = t[8],
          f = t[9],
          l = t[10],
          h = t[11];return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * o - c * n, e[1] = i * o - f * n, e[2] = u * o - l * n, e[3] = s * o - h * n, e[8] = a * n + c * o, e[9] = i * n + f * o, e[10] = u * n + l * o, e[11] = s * n + h * o, e;
    }function g(e, t, r) {
      var n = Math.sin(r),
          o = Math.cos(r),
          a = t[0],
          i = t[1],
          u = t[2],
          s = t[3],
          c = t[4],
          f = t[5],
          l = t[6],
          h = t[7];return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * o + c * n, e[1] = i * o + f * n, e[2] = u * o + l * n, e[3] = s * o + h * n, e[4] = c * o - a * n, e[5] = f * o - i * n, e[6] = l * o - u * n, e[7] = h * o - s * n, e;
    }function M(e, t) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
    }function _(e, t) {
      return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
    }function x(e, t, r) {
      var n = r[0],
          o = r[1],
          a = r[2],
          i = Math.sqrt(n * n + o * o + a * a),
          u = void 0,
          s = void 0,
          c = void 0;return Math.abs(i) < H ? null : (i = 1 / i, n *= i, o *= i, a *= i, u = Math.sin(t), s = Math.cos(t), c = 1 - s, e[0] = n * n * c + s, e[1] = o * n * c + a * u, e[2] = a * n * c - o * u, e[3] = 0, e[4] = n * o * c - a * u, e[5] = o * o * c + s, e[6] = a * o * c + n * u, e[7] = 0, e[8] = n * a * c + o * u, e[9] = o * a * c - n * u, e[10] = a * a * c + s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e);
    }function T(e, t) {
      var r = Math.sin(t),
          n = Math.cos(t);return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n, e[6] = r, e[7] = 0, e[8] = 0, e[9] = -r, e[10] = n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
    }function E(e, t) {
      var r = Math.sin(t),
          n = Math.cos(t);return e[0] = n, e[1] = 0, e[2] = -r, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = r, e[9] = 0, e[10] = n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
    }function w(e, t) {
      var r = Math.sin(t),
          n = Math.cos(t);return e[0] = n, e[1] = r, e[2] = 0, e[3] = 0, e[4] = -r, e[5] = n, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
    }function P(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = n + n,
          s = o + o,
          c = a + a,
          f = n * u,
          l = n * s,
          h = n * c,
          p = o * s,
          v = o * c,
          m = a * c,
          d = i * u,
          y = i * s,
          b = i * c;return e[0] = 1 - (p + m), e[1] = l + b, e[2] = h - y, e[3] = 0, e[4] = l - b, e[5] = 1 - (f + m), e[6] = v + d, e[7] = 0, e[8] = h + y, e[9] = v - d, e[10] = 1 - (f + p), e[11] = 0, e[12] = r[0], e[13] = r[1], e[14] = r[2], e[15] = 1, e;
    }function O(e, t) {
      return e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
    }function A(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[4],
          i = t[5],
          u = t[6],
          s = t[8],
          c = t[9],
          f = t[10];return e[0] = Math.sqrt(r * r + n * n + o * o), e[1] = Math.sqrt(a * a + i * i + u * u), e[2] = Math.sqrt(s * s + c * c + f * f), e;
    }function R(e, t) {
      var r = t[0] + t[5] + t[10],
          n = 0;return r > 0 ? (n = 2 * Math.sqrt(r + 1), e[3] = .25 * n, e[0] = (t[6] - t[9]) / n, e[1] = (t[8] - t[2]) / n, e[2] = (t[1] - t[4]) / n) : t[0] > t[5] & t[0] > t[10] ? (n = 2 * Math.sqrt(1 + t[0] - t[5] - t[10]), e[3] = (t[6] - t[9]) / n, e[0] = .25 * n, e[1] = (t[1] + t[4]) / n, e[2] = (t[8] + t[2]) / n) : t[5] > t[10] ? (n = 2 * Math.sqrt(1 + t[5] - t[0] - t[10]), e[3] = (t[8] - t[2]) / n, e[0] = (t[1] + t[4]) / n, e[1] = .25 * n, e[2] = (t[6] + t[9]) / n) : (n = 2 * Math.sqrt(1 + t[10] - t[0] - t[5]), e[3] = (t[1] - t[4]) / n, e[0] = (t[8] + t[2]) / n, e[1] = (t[6] + t[9]) / n, e[2] = .25 * n), e;
    }function C(e, t, r, n) {
      var o = t[0],
          a = t[1],
          i = t[2],
          u = t[3],
          s = o + o,
          c = a + a,
          f = i + i,
          l = o * s,
          h = o * c,
          p = o * f,
          v = a * c,
          m = a * f,
          d = i * f,
          y = u * s,
          b = u * c,
          g = u * f,
          M = n[0],
          _ = n[1],
          x = n[2];return e[0] = (1 - (v + d)) * M, e[1] = (h + g) * M, e[2] = (p - b) * M, e[3] = 0, e[4] = (h - g) * _, e[5] = (1 - (l + d)) * _, e[6] = (m + y) * _, e[7] = 0, e[8] = (p + b) * x, e[9] = (m - y) * x, e[10] = (1 - (l + v)) * x, e[11] = 0, e[12] = r[0], e[13] = r[1], e[14] = r[2], e[15] = 1, e;
    }function F(e, t, r, n, o) {
      var a = t[0],
          i = t[1],
          u = t[2],
          s = t[3],
          c = a + a,
          f = i + i,
          l = u + u,
          h = a * c,
          p = a * f,
          v = a * l,
          m = i * f,
          d = i * l,
          y = u * l,
          b = s * c,
          g = s * f,
          M = s * l,
          _ = n[0],
          x = n[1],
          T = n[2],
          E = o[0],
          w = o[1],
          P = o[2];return e[0] = (1 - (m + y)) * _, e[1] = (p + M) * _, e[2] = (v - g) * _, e[3] = 0, e[4] = (p - M) * x, e[5] = (1 - (h + y)) * x, e[6] = (d + b) * x, e[7] = 0, e[8] = (v + g) * T, e[9] = (d - b) * T, e[10] = (1 - (h + m)) * T, e[11] = 0, e[12] = r[0] + E - (e[0] * E + e[4] * w + e[8] * P), e[13] = r[1] + w - (e[1] * E + e[5] * w + e[9] * P), e[14] = r[2] + P - (e[2] * E + e[6] * w + e[10] * P), e[15] = 1, e;
    }function L(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = r + r,
          u = n + n,
          s = o + o,
          c = r * i,
          f = n * i,
          l = n * u,
          h = o * i,
          p = o * u,
          v = o * s,
          m = a * i,
          d = a * u,
          y = a * s;return e[0] = 1 - l - v, e[1] = f + y, e[2] = h - d, e[3] = 0, e[4] = f - y, e[5] = 1 - c - v, e[6] = p + m, e[7] = 0, e[8] = h + d, e[9] = p - m, e[10] = 1 - c - l, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
    }function j(e, t, r, n, o, a, i) {
      var u = 1 / (r - t),
          s = 1 / (o - n),
          c = 1 / (a - i);return e[0] = 2 * a * u, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * a * s, e[6] = 0, e[7] = 0, e[8] = (r + t) * u, e[9] = (o + n) * s, e[10] = (i + a) * c, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = i * a * 2 * c, e[15] = 0, e;
    }function S(e, t, r, n, o) {
      var a = 1 / Math.tan(t / 2),
          i = 1 / (n - o);return e[0] = a / r, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (o + n) * i, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = 2 * o * n * i, e[15] = 0, e;
    }function k(e, t, r, n) {
      var o = Math.tan(t.upDegrees * Math.PI / 180),
          a = Math.tan(t.downDegrees * Math.PI / 180),
          i = Math.tan(t.leftDegrees * Math.PI / 180),
          u = Math.tan(t.rightDegrees * Math.PI / 180),
          s = 2 / (i + u),
          c = 2 / (o + a);return e[0] = s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = c, e[6] = 0, e[7] = 0, e[8] = -(i - u) * s * .5, e[9] = (o - a) * c * .5, e[10] = n / (r - n), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = n * r / (r - n), e[15] = 0, e;
    }function I(e, t, r, n, o, a, i) {
      var u = 1 / (t - r),
          s = 1 / (n - o),
          c = 1 / (a - i);return e[0] = -2 * u, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * s, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * c, e[11] = 0, e[12] = (t + r) * u, e[13] = (o + n) * s, e[14] = (i + a) * c, e[15] = 1, e;
    }function N(e, t, r, n) {
      var o = void 0,
          a = void 0,
          i = void 0,
          u = void 0,
          c = void 0,
          f = void 0,
          l = void 0,
          h = void 0,
          p = void 0,
          v = void 0,
          m = t[0],
          d = t[1],
          y = t[2],
          b = n[0],
          g = n[1],
          M = n[2],
          _ = r[0],
          x = r[1],
          T = r[2];return Math.abs(m - _) < H && Math.abs(d - x) < H && Math.abs(y - T) < H ? s(e) : (l = m - _, h = d - x, p = y - T, v = 1 / Math.sqrt(l * l + h * h + p * p), l *= v, h *= v, p *= v, o = g * p - M * h, a = M * l - b * p, i = b * h - g * l, v = Math.sqrt(o * o + a * a + i * i), v ? (v = 1 / v, o *= v, a *= v, i *= v) : (o = 0, a = 0, i = 0), u = h * i - p * a, c = p * o - l * i, f = l * a - h * o, v = Math.sqrt(u * u + c * c + f * f), v ? (v = 1 / v, u *= v, c *= v, f *= v) : (u = 0, c = 0, f = 0), e[0] = o, e[1] = u, e[2] = l, e[3] = 0, e[4] = a, e[5] = c, e[6] = h, e[7] = 0, e[8] = i, e[9] = f, e[10] = p, e[11] = 0, e[12] = -(o * m + a * d + i * y), e[13] = -(u * m + c * d + f * y), e[14] = -(l * m + h * d + p * y), e[15] = 1, e);
    }function D(e, t, r, n) {
      var o = t[0],
          a = t[1],
          i = t[2],
          u = n[0],
          s = n[1],
          c = n[2],
          f = o - r[0],
          l = a - r[1],
          h = i - r[2],
          p = f * f + l * l + h * h;p > 0 && (p = 1 / Math.sqrt(p), f *= p, l *= p, h *= p);var v = s * h - c * l,
          m = c * f - u * h,
          d = u * l - s * f;return e[0] = v, e[1] = m, e[2] = d, e[3] = 0, e[4] = l * d - h * m, e[5] = h * v - f * d, e[6] = f * m - l * v, e[7] = 0, e[8] = f, e[9] = l, e[10] = h, e[11] = 0, e[12] = o, e[13] = a, e[14] = i, e[15] = 1, e;
    }function U(e) {
      return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")";
    }function V(e) {
      return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2) + Math.pow(e[9], 2) + Math.pow(e[10], 2) + Math.pow(e[11], 2) + Math.pow(e[12], 2) + Math.pow(e[13], 2) + Math.pow(e[14], 2) + Math.pow(e[15], 2));
    }function B(e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[4] = t[4] + r[4], e[5] = t[5] + r[5], e[6] = t[6] + r[6], e[7] = t[7] + r[7], e[8] = t[8] + r[8], e[9] = t[9] + r[9], e[10] = t[10] + r[10], e[11] = t[11] + r[11], e[12] = t[12] + r[12], e[13] = t[13] + r[13], e[14] = t[14] + r[14], e[15] = t[15] + r[15], e;
    }function z(e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e[4] = t[4] - r[4], e[5] = t[5] - r[5], e[6] = t[6] - r[6], e[7] = t[7] - r[7], e[8] = t[8] - r[8], e[9] = t[9] - r[9], e[10] = t[10] - r[10], e[11] = t[11] - r[11], e[12] = t[12] - r[12], e[13] = t[13] - r[13], e[14] = t[14] - r[14], e[15] = t[15] - r[15], e;
    }function q(e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * r, e[9] = t[9] * r, e[10] = t[10] * r, e[11] = t[11] * r, e[12] = t[12] * r, e[13] = t[13] * r, e[14] = t[14] * r, e[15] = t[15] * r, e;
    }function G(e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e[2] = t[2] + r[2] * n, e[3] = t[3] + r[3] * n, e[4] = t[4] + r[4] * n, e[5] = t[5] + r[5] * n, e[6] = t[6] + r[6] * n, e[7] = t[7] + r[7] * n, e[8] = t[8] + r[8] * n, e[9] = t[9] + r[9] * n, e[10] = t[10] + r[10] * n, e[11] = t[11] + r[11] * n, e[12] = t[12] + r[12] * n, e[13] = t[13] + r[13] * n, e[14] = t[14] + r[14] * n, e[15] = t[15] + r[15] * n, e;
    }function Y(e, t) {
      return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15];
    }function X(e, t) {
      var r = e[0],
          n = e[1],
          o = e[2],
          a = e[3],
          i = e[4],
          u = e[5],
          s = e[6],
          c = e[7],
          f = e[8],
          l = e[9],
          h = e[10],
          p = e[11],
          v = e[12],
          m = e[13],
          d = e[14],
          y = e[15],
          b = t[0],
          g = t[1],
          M = t[2],
          _ = t[3],
          x = t[4],
          T = t[5],
          E = t[6],
          w = t[7],
          P = t[8],
          O = t[9],
          A = t[10],
          R = t[11],
          C = t[12],
          F = t[13],
          L = t[14],
          j = t[15];return Math.abs(r - b) <= H * Math.max(1, Math.abs(r), Math.abs(b)) && Math.abs(n - g) <= H * Math.max(1, Math.abs(n), Math.abs(g)) && Math.abs(o - M) <= H * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(a - _) <= H * Math.max(1, Math.abs(a), Math.abs(_)) && Math.abs(i - x) <= H * Math.max(1, Math.abs(i), Math.abs(x)) && Math.abs(u - T) <= H * Math.max(1, Math.abs(u), Math.abs(T)) && Math.abs(s - E) <= H * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(c - w) <= H * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(f - P) <= H * Math.max(1, Math.abs(f), Math.abs(P)) && Math.abs(l - O) <= H * Math.max(1, Math.abs(l), Math.abs(O)) && Math.abs(h - A) <= H * Math.max(1, Math.abs(h), Math.abs(A)) && Math.abs(p - R) <= H * Math.max(1, Math.abs(p), Math.abs(R)) && Math.abs(v - C) <= H * Math.max(1, Math.abs(v), Math.abs(C)) && Math.abs(m - F) <= H * Math.max(1, Math.abs(m), Math.abs(F)) && Math.abs(d - L) <= H * Math.max(1, Math.abs(d), Math.abs(L)) && Math.abs(y - j) <= H * Math.max(1, Math.abs(y), Math.abs(j));
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.create = n, t.clone = o, t.copy = a, t.fromValues = i, t.set = u, t.identity = s, t.transpose = c, t.invert = f, t.adjoint = l, t.determinant = h, t.multiply = p, t.translate = v, t.scale = m, t.rotate = d, t.rotateX = y, t.rotateY = b, t.rotateZ = g, t.fromTranslation = M, t.fromScaling = _, t.fromRotation = x, t.fromXRotation = T, t.fromYRotation = E, t.fromZRotation = w, t.fromRotationTranslation = P, t.getTranslation = O, t.getScaling = A, t.getRotation = R, t.fromRotationTranslationScale = C, t.fromRotationTranslationScaleOrigin = F, t.fromQuat = L, t.frustum = j, t.perspective = S, t.perspectiveFromFieldOfView = k, t.ortho = I, t.lookAt = N, t.targetTo = D, t.str = U, t.frob = V, t.add = B, t.subtract = z, t.multiplyScalar = q, t.multiplyScalarAndAdd = G, t.exactEquals = Y, t.equals = X;var H = 1e-6;t.mul = p, t.sub = z;
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }function o() {
      var e = new Float32Array(4);return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
    }function a(e) {
      return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
    }function i(e, t, r) {
      r *= .5;var n = Math.sin(r);return e[0] = n * t[0], e[1] = n * t[1], e[2] = n * t[2], e[3] = Math.cos(r), e;
    }function u(e, t) {
      var r = 2 * Math.acos(t[3]),
          n = Math.sin(r / 2);return 0 != n ? (e[0] = t[0] / n, e[1] = t[1] / n, e[2] = t[2] / n) : (e[0] = 1, e[1] = 0, e[2] = 0), r;
    }function s(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = r[0],
          s = r[1],
          c = r[2],
          f = r[3];return e[0] = n * f + i * u + o * c - a * s, e[1] = o * f + i * s + a * u - n * c, e[2] = a * f + i * c + n * s - o * u, e[3] = i * f - n * u - o * s - a * c, e;
    }function c(e, t, r) {
      r *= .5;var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = Math.sin(r),
          s = Math.cos(r);return e[0] = n * s + i * u, e[1] = o * s + a * u, e[2] = a * s - o * u, e[3] = i * s - n * u, e;
    }function f(e, t, r) {
      r *= .5;var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = Math.sin(r),
          s = Math.cos(r);return e[0] = n * s - a * u, e[1] = o * s + i * u, e[2] = a * s + n * u, e[3] = i * s - o * u, e;
    }function l(e, t, r) {
      r *= .5;var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = Math.sin(r),
          s = Math.cos(r);return e[0] = n * s + o * u, e[1] = o * s - n * u, e[2] = a * s + i * u, e[3] = i * s - a * u, e;
    }function h(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2];return e[0] = r, e[1] = n, e[2] = o, e[3] = Math.sqrt(Math.abs(1 - r * r - n * n - o * o)), e;
    }function p(e, t, r, n) {
      var o = t[0],
          a = t[1],
          i = t[2],
          u = t[3],
          s = r[0],
          c = r[1],
          f = r[2],
          l = r[3],
          h = void 0,
          p = void 0,
          v = void 0,
          m = void 0,
          d = void 0;return p = o * s + a * c + i * f + u * l, p < 0 && (p = -p, s = -s, c = -c, f = -f, l = -l), 1 - p > 1e-6 ? (h = Math.acos(p), v = Math.sin(h), m = Math.sin((1 - n) * h) / v, d = Math.sin(n * h) / v) : (m = 1 - n, d = n), e[0] = m * o + d * s, e[1] = m * a + d * c, e[2] = m * i + d * f, e[3] = m * u + d * l, e;
    }function v(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = r * r + n * n + o * o + a * a,
          u = i ? 1 / i : 0;return e[0] = -r * u, e[1] = -n * u, e[2] = -o * u, e[3] = a * u, e;
    }function m(e, t) {
      return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e;
    }function d(e, t) {
      var r = t[0] + t[4] + t[8],
          n = void 0;if (r > 0) n = Math.sqrt(r + 1), e[3] = .5 * n, n = .5 / n, e[0] = (t[5] - t[7]) * n, e[1] = (t[6] - t[2]) * n, e[2] = (t[1] - t[3]) * n;else {
        var o = 0;t[4] > t[0] && (o = 1), t[8] > t[3 * o + o] && (o = 2);var a = (o + 1) % 3,
            i = (o + 2) % 3;n = Math.sqrt(t[3 * o + o] - t[3 * a + a] - t[3 * i + i] + 1), e[o] = .5 * n, n = .5 / n, e[3] = (t[3 * a + i] - t[3 * i + a]) * n, e[a] = (t[3 * a + o] + t[3 * o + a]) * n, e[i] = (t[3 * i + o] + t[3 * o + i]) * n;
      }return e;
    }function y(e, t, r, n) {
      var o = .5 * Math.PI / 180;t *= o, r *= o, n *= o;var a = Math.sin(t),
          i = Math.cos(t),
          u = Math.sin(r),
          s = Math.cos(r),
          c = Math.sin(n),
          f = Math.cos(n);return e[0] = a * s * f - i * u * c, e[1] = i * u * f + a * s * c, e[2] = i * s * c - a * u * f, e[3] = i * s * f + a * u * c, e;
    }function b(e) {
      return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.setAxes = t.sqlerp = t.rotationTo = t.equals = t.exactEquals = t.normalize = t.sqrLen = t.squaredLength = t.len = t.length = t.lerp = t.dot = t.scale = t.mul = t.add = t.set = t.copy = t.fromValues = t.clone = void 0, t.create = o, t.identity = a, t.setAxisAngle = i, t.getAxisAngle = u, t.multiply = s, t.rotateX = c, t.rotateY = f, t.rotateZ = l, t.calculateW = h, t.slerp = p, t.invert = v, t.conjugate = m, t.fromMat3 = d, t.fromEuler = y, t.str = b;var g = r(41),
        M = n(g),
        _ = r(19),
        x = n(_),
        T = r(20),
        E = n(T),
        w = (t.clone = E.clone, t.fromValues = E.fromValues, t.copy = E.copy, t.set = E.set, t.add = E.add, t.mul = s, t.scale = E.scale, t.dot = E.dot, t.lerp = E.lerp, t.length = E.length),
        P = (t.len = w, t.squaredLength = E.squaredLength),
        O = (t.sqrLen = P, t.normalize = E.normalize);t.exactEquals = E.exactEquals, t.equals = E.equals, t.rotationTo = function () {
      var e = x.create(),
          t = x.fromValues(1, 0, 0),
          r = x.fromValues(0, 1, 0);return function (n, o, a) {
        var u = x.dot(o, a);return u < -.999999 ? (x.cross(e, t, o), x.len(e) < 1e-6 && x.cross(e, r, o), x.normalize(e, e), i(n, e, Math.PI), n) : u > .999999 ? (n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n) : (x.cross(e, o, a), n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = 1 + u, O(n, n));
      };
    }(), t.sqlerp = function () {
      var e = o(),
          t = o();return function (r, n, o, a, i, u) {
        return p(e, n, i, u), p(t, o, a, u), p(r, e, t, 2 * u * (1 - u)), r;
      };
    }(), t.setAxes = function () {
      var e = M.create();return function (t, r, n, o) {
        return e[0] = n[0], e[3] = n[1], e[6] = n[2], e[1] = o[0], e[4] = o[1], e[7] = o[2], e[2] = -r[0], e[5] = -r[1], e[8] = -r[2], O(t, d(t, e));
      };
    }();
  }, function (e, t, r) {
    "use strict";
    function n() {
      var e = new Float32Array(9);return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
    }function o(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e;
    }function a(e) {
      var t = new Float32Array(9);return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
    }function i(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
    }function u(e, t, r, n, o, a, i, u, s) {
      var c = new Float32Array(9);return c[0] = e, c[1] = t, c[2] = r, c[3] = n, c[4] = o, c[5] = a, c[6] = i, c[7] = u, c[8] = s, c;
    }function s(e, t, r, n, o, a, i, u, s, c) {
      return e[0] = t, e[1] = r, e[2] = n, e[3] = o, e[4] = a, e[5] = i, e[6] = u, e[7] = s, e[8] = c, e;
    }function c(e) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
    }function f(e, t) {
      if (e === t) {
        var r = t[1],
            n = t[2],
            o = t[5];e[1] = t[3], e[2] = t[6], e[3] = r, e[5] = t[7], e[6] = n, e[7] = o;
      } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8];return e;
    }function l(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = t[4],
          u = t[5],
          s = t[6],
          c = t[7],
          f = t[8],
          l = f * i - u * c,
          h = -f * a + u * s,
          p = c * a - i * s,
          v = r * l + n * h + o * p;return v ? (v = 1 / v, e[0] = l * v, e[1] = (-f * n + o * c) * v, e[2] = (u * n - o * i) * v, e[3] = h * v, e[4] = (f * r - o * s) * v, e[5] = (-u * r + o * a) * v, e[6] = p * v, e[7] = (-c * r + n * s) * v, e[8] = (i * r - n * a) * v, e) : null;
    }function h(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = t[4],
          u = t[5],
          s = t[6],
          c = t[7],
          f = t[8];return e[0] = i * f - u * c, e[1] = o * c - n * f, e[2] = n * u - o * i, e[3] = u * s - a * f, e[4] = r * f - o * s, e[5] = o * a - r * u, e[6] = a * c - i * s, e[7] = n * s - r * c, e[8] = r * i - n * a, e;
    }function p(e) {
      var t = e[0],
          r = e[1],
          n = e[2],
          o = e[3],
          a = e[4],
          i = e[5],
          u = e[6],
          s = e[7],
          c = e[8];return t * (c * a - i * s) + r * (-c * o + i * u) + n * (s * o - a * u);
    }function v(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = t[4],
          s = t[5],
          c = t[6],
          f = t[7],
          l = t[8],
          h = r[0],
          p = r[1],
          v = r[2],
          m = r[3],
          d = r[4],
          y = r[5],
          b = r[6],
          g = r[7],
          M = r[8];return e[0] = h * n + p * i + v * c, e[1] = h * o + p * u + v * f, e[2] = h * a + p * s + v * l, e[3] = m * n + d * i + y * c, e[4] = m * o + d * u + y * f, e[5] = m * a + d * s + y * l, e[6] = b * n + g * i + M * c, e[7] = b * o + g * u + M * f, e[8] = b * a + g * s + M * l, e;
    }function m(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = t[4],
          s = t[5],
          c = t[6],
          f = t[7],
          l = t[8],
          h = r[0],
          p = r[1];return e[0] = n, e[1] = o, e[2] = a, e[3] = i, e[4] = u, e[5] = s, e[6] = h * n + p * i + c, e[7] = h * o + p * u + f, e[8] = h * a + p * s + l, e;
    }function d(e, t, r) {
      var n = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          u = t[4],
          s = t[5],
          c = t[6],
          f = t[7],
          l = t[8],
          h = Math.sin(r),
          p = Math.cos(r);return e[0] = p * n + h * i, e[1] = p * o + h * u, e[2] = p * a + h * s, e[3] = p * i - h * n, e[4] = p * u - h * o, e[5] = p * s - h * a, e[6] = c, e[7] = f, e[8] = l, e;
    }function y(e, t, r) {
      var n = r[0],
          o = r[1];return e[0] = n * t[0], e[1] = n * t[1], e[2] = n * t[2], e[3] = o * t[3], e[4] = o * t[4], e[5] = o * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
    }function b(e, t) {
      return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = t[0], e[7] = t[1], e[8] = 1, e;
    }function g(e, t) {
      var r = Math.sin(t),
          n = Math.cos(t);return e[0] = n, e[1] = r, e[2] = 0, e[3] = -r, e[4] = n, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
    }function M(e, t) {
      return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = t[1], e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
    }function _(e, t) {
      return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], e[7] = t[5], e[8] = 1, e;
    }function x(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = r + r,
          u = n + n,
          s = o + o,
          c = r * i,
          f = n * i,
          l = n * u,
          h = o * i,
          p = o * u,
          v = o * s,
          m = a * i,
          d = a * u,
          y = a * s;return e[0] = 1 - l - v, e[3] = f - y, e[6] = h + d, e[1] = f + y, e[4] = 1 - c - v, e[7] = p - m, e[2] = h - d, e[5] = p + m, e[8] = 1 - c - l, e;
    }function T(e, t) {
      var r = t[0],
          n = t[1],
          o = t[2],
          a = t[3],
          i = t[4],
          u = t[5],
          s = t[6],
          c = t[7],
          f = t[8],
          l = t[9],
          h = t[10],
          p = t[11],
          v = t[12],
          m = t[13],
          d = t[14],
          y = t[15],
          b = r * u - n * i,
          g = r * s - o * i,
          M = r * c - a * i,
          _ = n * s - o * u,
          x = n * c - a * u,
          T = o * c - a * s,
          E = f * m - l * v,
          w = f * d - h * v,
          P = f * y - p * v,
          O = l * d - h * m,
          A = l * y - p * m,
          R = h * y - p * d,
          C = b * R - g * A + M * O + _ * P - x * w + T * E;return C ? (C = 1 / C, e[0] = (u * R - s * A + c * O) * C, e[1] = (s * P - i * R - c * w) * C, e[2] = (i * A - u * P + c * E) * C, e[3] = (o * A - n * R - a * O) * C, e[4] = (r * R - o * P + a * w) * C, e[5] = (n * P - r * A - a * E) * C, e[6] = (m * T - d * x + y * _) * C, e[7] = (d * M - v * T - y * g) * C, e[8] = (v * x - m * M + y * b) * C, e) : null;
    }function E(e, t, r) {
      return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / r, e[5] = 0, e[6] = -1, e[7] = 1, e[8] = 1, e;
    }function w(e) {
      return "mat3(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")";
    }function P(e) {
      return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2));
    }function O(e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[4] = t[4] + r[4], e[5] = t[5] + r[5], e[6] = t[6] + r[6], e[7] = t[7] + r[7], e[8] = t[8] + r[8], e;
    }function A(e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e[4] = t[4] - r[4], e[5] = t[5] - r[5], e[6] = t[6] - r[6], e[7] = t[7] - r[7], e[8] = t[8] - r[8], e;
    }function R(e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * r, e;
    }function C(e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e[2] = t[2] + r[2] * n, e[3] = t[3] + r[3] * n, e[4] = t[4] + r[4] * n, e[5] = t[5] + r[5] * n, e[6] = t[6] + r[6] * n, e[7] = t[7] + r[7] * n, e[8] = t[8] + r[8] * n, e;
    }function F(e, t) {
      return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8];
    }function L(e, t) {
      var r = e[0],
          n = e[1],
          o = e[2],
          a = e[3],
          i = e[4],
          u = e[5],
          s = e[6],
          c = e[7],
          f = e[8],
          l = t[0],
          h = t[1],
          p = t[2],
          v = t[3],
          m = t[4],
          d = t[5],
          y = t[6],
          b = t[7],
          g = t[8];return Math.abs(r - l) <= j * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(n - h) <= j * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(o - p) <= j * Math.max(1, Math.abs(o), Math.abs(p)) && Math.abs(a - v) <= j * Math.max(1, Math.abs(a), Math.abs(v)) && Math.abs(i - m) <= j * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(u - d) <= j * Math.max(1, Math.abs(u), Math.abs(d)) && Math.abs(s - y) <= j * Math.max(1, Math.abs(s), Math.abs(y)) && Math.abs(c - b) <= j * Math.max(1, Math.abs(c), Math.abs(b)) && Math.abs(f - g) <= j * Math.max(1, Math.abs(f), Math.abs(g));
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.create = n, t.fromMat4 = o, t.clone = a, t.copy = i, t.fromValues = u, t.set = s, t.identity = c, t.transpose = f, t.invert = l, t.adjoint = h, t.determinant = p, t.multiply = v, t.translate = m, t.rotate = d, t.scale = y, t.fromTranslation = b, t.fromRotation = g, t.fromScaling = M, t.fromMat2d = _, t.fromQuat = x, t.normalFromMat4 = T, t.projection = E, t.str = w, t.frob = P, t.add = O, t.subtract = A, t.multiplyScalar = R, t.multiplyScalarAndAdd = C, t.exactEquals = F, t.equals = L;var j = 1e-6;t.mul = v, t.sub = A;
  }, function (e, t, r) {
    "use strict";
    (function (r, n) {
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
      }function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }Object.defineProperty(t, "__esModule", { value: !0 });var u = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          s = function e(t, r, n) {
        null === t && (t = Function.prototype);var o = Object.getOwnPropertyDescriptor(t, r);if (void 0 === o) {
          var a = Object.getPrototypeOf(t);return null === a ? void 0 : e(a, r, n);
        }if ("value" in o) return o.value;var i = o.get;if (void 0 !== i) return i.call(n);
      },
          c = function (e) {
        function t(e, r, n, i, u) {
          o(this, t);var s = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, Math.PI / 2, 1, 101));return s.radius = 0, s.alpha = 0, s.beta = 0, s;
        }return i(t, e), u(t, [{ key: "getVMatrix", value: function value() {
            var e = Math.cos(n.deg2rad(this.beta)) * this.radius,
                r = Math.sin(n.deg2rad(this.beta)) * this.radius,
                o = Math.sin(n.deg2rad(this.alpha)) * e,
                a = Math.cos(n.deg2rad(this.alpha)) * e,
                i = this.center;return this.position.x = i.x + o, this.position.y = i.y + r, this.position.z = i.z + a, s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getVMatrix", this).call(this);
          } }]), t;
      }(r);t.default = c, e.exports = t.default;
    }).call(t, r(24), r(25));
  }, function (e, t, r) {
    "use strict";
    (function (r, n, o, a, i, u, s, c, f, l, h) {
      function p(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }return r;
        }return Array.from(e);
      }function v(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(t, "__esModule", { value: !0 });var m = function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      }(),
          d = function () {
        function e() {
          v(this, e);
        }return m(e, null, [{ key: "createGround", value: function value(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                o = t / 2,
                a = n / 2,
                i = new r(e);return i.geometry.vertices = [-o, a, 0, -o, -a, 0, o, -a, 0, o, a, 0], i.geometry.uvs = [0, 1, 0, 0, 1, 0, 1, 1], i.geometry.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], i.geometry.indices.default = [0, 1, 2, 0, 2, 3], i;
          } }, { key: "createCube", value: function value(t, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r,
                a = r / 2,
                i = n / 2,
                u = o / 2;return e.createBox(t, -a, a, i, -i, u, -u);
          } }, { key: "createBox", value: function value(e, t, n, o, a, i, u) {
            var s = new r(e);return s.geometry.vertices = [t, o, i, n, o, i, n, a, i, t, a, i, t, o, u, n, o, u, n, a, u, t, a, u, t, a, i, t, o, i, t, o, u, t, a, u, n, a, i, n, o, i, n, o, u, n, a, u, t, o, i, n, o, i, n, o, u, t, o, u, t, a, i, n, a, i, n, a, u, t, a, u], s.geometry.uvs = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0], s.geometry.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0], s.geometry.indices.default = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23], s;
          } }, { key: "createSphere", value: function value(e, t) {
            for (var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 12, i = 2 * Math.PI, u = Math.PI, s = [], c = [], f = [], l = [], h = [], v = 0, m = 0; m <= a; m++) {
              for (var d = [], y = m / a, b = 0; b <= o; b++) {
                var g = b / o,
                    M = -t * Math.cos(0 + g * i) * Math.sin(0 + y * u),
                    _ = t * Math.cos(0 + y * u),
                    x = t * Math.sin(0 + g * i) * Math.sin(0 + y * u);c.push(M, _, x);var T = n.normalize(n.create(), n.fromValues(M, _, x));f.push.apply(f, p(T)), l.push(g, y), d.push(v++);
              }h.push(d);
            }for (var E = 0; E < a; E++) {
              for (var w = 0; w < o; w++) {
                var P = h[E][w + 1],
                    O = h[E][w],
                    A = h[E + 1][w],
                    R = h[E + 1][w + 1];0 !== E && s.push(P, O, R), (E !== a - 1 || u < Math.PI) && s.push(O, A, R);
              }
            }var C = new r(e);return C.geometry.vertices = c, C.geometry.uvs = l, C.geometry.normals = f, C.geometry.indices.default = s, C;
          } }, { key: "createCylinder", value: function value(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
                a = [],
                i = [],
                u = [],
                s = [],
                c = 2 * Math.PI / o,
                f = n / 2,
                l = function l(e) {
              var r = a.length / 3,
                  n = [0, f * e, 0],
                  l = [0, e, 0],
                  h = [0, 0];a.push.apply(a, n), u.push.apply(u, l), i.push.apply(i, h);for (var p = 0; p < o; p++) {
                var v = p * c,
                    m = [Math.cos(v) * t, f * e, Math.sin(v) * t];a.push.apply(a, m), u.push.apply(u, l), i.push.apply(i, h), p !== o - 1 ? s.push(r, r + p + 1, r + p + 2) : s.push(r, r + p + 1, r + 1);
              }
            };!function () {
              for (var e = a.length / 3, r = 0; r < o; r++) {
                var n = c * r,
                    l = [Math.cos(n) * t, -f, Math.sin(n) * t],
                    h = [Math.cos(n) * t, f, Math.sin(n) * t],
                    p = [l[0], 0, l[2]],
                    v = [h[0], 0, h[2]];a.push.apply(a, l.concat(h)), i.push(0, 0, 0, 0), u.push.apply(u, p.concat(v));var m = 2 * r;r === o - 1 ? s.push(m, m + 1, e + 1, m, e, e + 1) : s.push(m, m + 1, m + 3, m, m + 3, m + 2);
              }
            }(), l(1), l(-1);var h = new r(e);return h.geometry.vertices = a, h.geometry.uvs = i, h.geometry.normals = u, h.geometry.indices.default = s, h;
          } }, { key: "createCone", value: function value(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
                a = [],
                i = [],
                u = [],
                s = [],
                c = n / 2,
                f = 2 * Math.PI / o;!function () {
              for (var e = a.length / 3, r = [0, c, 0], l = Math.atan(t / n), h = Math.cos(l), p = Math.sin(l), v = 0; v < o; v++) {
                var m = f * v,
                    d = [Math.cos(m) * t, -c, Math.sin(m) * t],
                    y = [Math.cos(m) * h, p, Math.sin(m) * h],
                    b = [0, 0];a.push.apply(a, r.concat(d)), u.push.apply(u, y.concat(y)), i.push.apply(i, b.concat(b));var g = e + 2 * v;v !== o - 1 ? s.push(g, g + 1, g + 3) : s.push(g, g + 1, e + 1);
              }
            }(), function (e) {
              var r = a.length / 3,
                  n = [0, c * e, 0],
                  l = [0, e, 0],
                  h = [0, 0];a.push.apply(a, n), u.push.apply(u, l), i.push.apply(i, h);for (var p = 0; p < o; p++) {
                var v = p * f,
                    m = [Math.cos(v) * t, c * e, Math.sin(v) * t];a.push.apply(a, m), u.push.apply(u, l), i.push.apply(i, h), p !== o - 1 ? s.push(r, r + p + 1, r + p + 2) : s.push(r, r + p + 1, r + 1);
              }
            }(-1);var l = new r(e);return l.geometry.vertices = a, l.geometry.uvs = i, l.geometry.normals = u, l.geometry.indices.default = s, l;
          } }, { key: "createCoordinate", value: function value(e, t) {
            var n = new r(e),
                a = new o(e);a.geometry.vertices = [0, 0, 0, t, 0, 0], a.geometry.indices.default = [0, 1], a.materials.default.color.r = 256, a.materials.default.color.g = 0, a.materials.default.color.b = 0, a.parent = n;var i = new o(e);i.geometry.vertices = [0, 0, 0, 0, t, 0], i.geometry.indices.default = [0, 1], i.materials.default.color.r = 0, i.materials.default.color.g = 256, i.materials.default.color.b = 0, i.parent = n;var u = new o(e);return u.geometry.vertices = [0, 0, 0, 0, 0, t], u.geometry.indices.default = [0, 1], u.materials.default.color.r = 0, u.materials.default.color.g = 0, u.materials.default.color.b = 256, u.parent = n, n;
          } }, { key: "createFromObjModel", value: function value(e, t) {
            t = a.parse(t);var n = function n(e) {
              var t = [];return e.forEach(function (e) {
                return t.push.apply(t, p(e));
              }), t;
            },
                o = new r(e);o.geometry.vertices = n(t.positions), o.geometry.uvs = n(t.uvs), o.geometry.normals = n(t.normals);for (var c in t.indices) {
              !function (e) {
                var r = t.indices[e],
                    n = t.mtls[e];if (n) {
                  if (o.geometry.indices[e] = r, o.materials[e] || (o.materials[e] = new i(o)), n.ambientColor && (o.materials[e].ambientColor = { r: 255 * n.ambientColor[0], g: 255 * n.ambientColor[1], b: 255 * n.ambientColor[2] }), n.ambientTexture) {
                    var a = new u.Image();a.crossOrigin = !0, a.onload = function () {
                      o.materials[e].ambientTexture.image = a, o.materials[e].ambientSource = s.TEXTURE;
                    }, a.src = n.ambientTexture;
                  }if (n.diffuseColor && (o.materials[e].diffuseColor = { r: 255 * n.diffuseColor[0], g: 255 * n.diffuseColor[1], b: 255 * n.diffuseColor[2] }), n.diffuseTexture) {
                    var c = new u.Image();c.crossOrigin = !0, c.onload = function () {
                      o.materials[e].diffuseTexture.image = c, o.materials[e].diffuseSource = s.TEXTURE;
                    }, c.src = n.diffuseTexture;
                  }if (n.specularColor && (o.materials[e].specularColor = { r: 255 * n.specularColor[0], g: 255 * n.specularColor[1], b: 255 * n.specularColor[2] }), n.specularTexture) {
                    var f = new u.Image();f.crossOrigin = !0, f.onload = function () {
                      o.materials[e].specularTexture.image = f, o.materials[e].specularSource = s.TEXTURE;
                    }, f.src = n.specularTexture;
                  }
                } else o.geometry.indices.default = r;
              }(c);
            }return o;
          } }, { key: "createFromStlModel", value: function value(e, t) {
            t = c.parse(t);var n = new r(e);return n.geometry.vertices = t.positions, n.geometry.uvs = t.uvs, n.geometry.normals = t.normals, n.geometry.indices.default = t.indices, n;
          } }, { key: "createFromG3DModel", value: function value(e, t) {
            var r = new f(e);r.geometry.vertices = [], r.geometry.uvs = [], r.geometry.normals = [], r.geometry.indices.default = [];for (var o = function o(e, t) {
              for (var r = [], o = [], a = [], i = 0; i < t.length; i += 8) {
                for (var u, s, c, f, l = [t[i + 1], t[i + 2], t[i + 3]], h = l.map(function (t) {
                  return [e[3 * t], e[3 * t + 1], e[3 * t + 2]];
                }), v = n.sub(n.create(), (u = n).fromValues.apply(u, p(h[0])), (s = n).fromValues.apply(s, p(h[1]))), m = n.sub(n.create(), (c = n).fromValues.apply(c, p(h[0])), (f = n).fromValues.apply(f, p(h[2]))), d = n.cross(n.create(), v, m), y = 0; y < 3; y++) {
                  l[y];r.push.apply(r, p(h[y])), o.push(0, 0), a.push.apply(a, p(d));
                }
              }return { vertices: r, uvs: o, normals: a };
            }, a = 0; a < t.faces.length; a += 8) {
              var i = a / 8;r.geometry.indices.default.push(3 * i, 3 * i + 1, 3 * i + 2);
            }var u = o(t.vertices, t.faces),
                s = u.vertices,
                c = u.uvs,
                h = u.normals;return r.geometry.vertices = s, r.geometry.uvs = c, r.geometry.normals = h, r.morphTargetsGeometries = t.morphTargets.map(function (e) {
              var n = o(e.vertices, t.faces),
                  a = n.vertices,
                  i = n.uvs,
                  u = n.normals,
                  s = new l(r);return s.vertices = a, s.uvs = i, s.normals = u, s.indices = r.geometry.indices, s;
            }), r;
          } }, { key: "createWireFrameFromMesh", value: function value(e, t) {
            function r(e, t) {
              var r = e + "-" + t,
                  o = t + "-" + e;a[r] || a[o] || n.geometry.indices.default.push(e, t);
            }var n = new o(e),
                a = {};n.geometry.vertices = [].concat(p(t.geometry.vertices));for (var i in t.geometry.indices) {
              for (var u = t.geometry.indices[i], s = 0; s < u.length; s += 3) {
                r(u[s], u[s + 1]), r(u[s], u[s + 2]), r(u[s + 1], u[s + 2]);
              }
            }return n;
          } }, { key: "createBoundingBoxFromMesh", value: function value(e, t) {
            var r = t.geometry.vertices;if (r.length > 0) {
              var n = void 0,
                  o = void 0,
                  a = void 0,
                  i = void 0,
                  u = void 0,
                  s = void 0;n = o = a = i = u = s = null;for (var c = 0; c < r.length; c += 3) {
                var f = r[c],
                    l = r[c + 1],
                    h = r[c + 2];null === n ? (n = o = f, a = i = l, u = s = h) : (n = Math.min(n, f), o = Math.max(o, f), i = Math.min(i, l), a = Math.max(a, l), s = Math.min(s, h), u = Math.max(u, h));
              }return this.createBox(e, n, o, a, i, u, s);
            }
          } }, { key: "createLineFromPath", value: function value(e, t, r) {
            var n,
                a,
                i = h.parseToLine(t, r),
                u = i.vertices,
                s = i.indices,
                c = new o(e);return (n = c.geometry.vertices).push.apply(n, p(u)), (a = c.geometry.indices.default).push.apply(a, p(s)), c;
          } }, { key: "createMeshFromPath", value: function value(e, t, n, o) {
            var a,
                i = h.parseToGeometry(t, n, o),
                u = i.vertices,
                s = i.indices,
                c = i.uvs,
                f = i.normals,
                l = new r(e);return l.geometry.vertices = u, l.geometry.normals = f, l.geometry.uvs = c, (a = l.geometry.indices.default).push.apply(a, p(s)), l;
          } }]), e;
      }();t.default = d, e.exports = t.default;
    }).call(t, r(4), r(0), r(10), r(27), r(6), r(2), r(5), r(28), r(16), r(9), r(44));
  }, function (e, t, r) {
    "use strict";
    (function (r, n) {
      function o(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }return r;
        }return Array.from(e);
      }function a(e, t, r, n, o, a, i) {
        function u(e, t) {
          var r = 1 - e;return r * r * t;
        }function s(e, t) {
          return 2 * (1 - e) * e * t;
        }function c(e, t) {
          return e * e * t;
        }function f(e, t, r, n) {
          return u(e, t) + s(e, r) + c(e, n);
        }var l = r - e,
            h = n - t,
            p = Math.sqrt(l * l + h * h),
            v = Math.ceil(p / i);v < 3 && (v = 3);for (var m = [], d = 1; d <= v; d++) {
          var y = f(d / v, e, r, o),
              b = f(d / v, t, n, a);m.push(y, b);
        }return m;
      }Object.defineProperty(t, "__esModule", { value: !0 });var i = function () {
        function e(e, t) {
          var r = [],
              n = !0,
              o = !1,
              a = void 0;try {
            for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0) {}
          } catch (e) {
            o = !0, a = e;
          } finally {
            try {
              !n && u.return && u.return();
            } finally {
              if (o) throw a;
            }
          }return r;
        }return function (t, r) {
          if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return e(t, r);throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
          u = { parse: function parse(e, t) {
          function r(e) {
            var t = e.length,
                r = e[0],
                n = e[t - 1];o[2 * r] === o[2 * n] && o[2 * r + 1] === o[2 * n + 1] && 2 * n + 1 == o.length - 1 && (o.pop(), o.pop(), e[t - 1] = r);
          }e = e.split("\n").join("");for (var n = e.split(" ").filter(Boolean), o = [], u = [], s = 0, c = [], f = null; s < n.length;) {
            switch (n[s++]) {case "m":
                var l = Number(n[s++]),
                    h = Number(n[s++]);c.length && (r(c), u.push(c), c = []), o.push(l, h), c.push(o.length / 2 - 1), f = [l, h];break;case "q":
                for (var p = f, v = i(p, 2), m = v[0], d = v[1], y = Number(n[s++]), b = Number(n[s++]), g = Number(n[s++]), M = Number(n[s++]), _ = a(m, d, g, M, y, b, t), x = 0; x < _.length; x += 2) {
                  o.push(_[x], _[x + 1]), c.push(o.length / 2 - 1);
                }f = [y, b];break;case "l":
                var T = Number(n[s++]),
                    E = Number(n[s++]);o.push(T, E), c.push(o.length / 2 - 1), f = [T, E];break;default:
                throw new Error("parse path failed, unhandled item " + n[s]);}
          }return r(c), u.push(c), c = [], { vertices: o, lines: u };
        }, parseToLine: function parseToLine(e, t) {
          var r = this.parse(e, t),
              n = r.vertices,
              o = r.lines,
              a = [];o.forEach(function (e, t) {
            e.forEach(function (t, r) {
              0 !== r && a.push(e[r - 1], t);
            });
          });for (var i = [], u = 0; u < n.length; u += 2) {
            i.push(n[u], n[u + 1], 0);
          }return { vertices: i, indices: a };
        }, parseToTriangles: function parseToTriangles(e, t) {
          function n(e) {
            if (e.length < 3) throw "not valid polygon";if (3 === e.length) {
              if (e[0] === e[2]) return [];throw new Error("invalid polygon");
            }for (var t = 1; t < e.length - 1; t++) {
              var r = t - 1,
                  a = t,
                  i = t + 1,
                  u = [e[r], e[a], e[i]],
                  s = u[0],
                  f = u[1],
                  l = u[2];if (c(s, f, l, e)) return e.splice(t, 1), [s, f, l].concat(o(n(e)));
            }throw new Error("hole not cleaned");
          }function a(e) {
            return [h[2 * e], h[2 * e + 1]];
          }function u(e, t, r, n, o, a) {
            var i = (e - o) * (n - a) - (r - o) * (t - a);return 0 === i ? (e - r) * (e - o) <= 0 && (t - n) * (t - a) <= 0 ? 0 : NaN : i > 0 ? 1 : -1;
          }function s(e, t, r, n, o, a, i, s) {
            var c = u(e, t, r, n, o, a),
                f = u(e, t, o, a, i, s),
                l = u(e, t, i, s, r, n);return !isNaN(c * f * l) && (c * f * l == 0 || c === f && c === l);
          }function c(e, t, n, c) {
            var f = [].concat(o(a(e)), o(a(t)), o(a(n))),
                l = f[0],
                h = f[1],
                p = f[2],
                v = f[3],
                m = f[4],
                d = f[5],
                y = [p - l, v - h],
                b = [m - p, d - v];r.cross([], y, b);if (!(u(m, d, l, h, p, v) <= 0)) return !1;for (var g = 0; g < c.length; g++) {
              var M = c[g];if (M !== e && M !== t && M !== n) {
                var _ = a(M),
                    x = i(_, 2);if (s(x[0], x[1], l, h, p, v, m, d)) return !1;
              }
            }return !0;
          }function f(e, t) {
            function r(e, t, r, n, o, a, i, s) {
              var c = u(e, t, o, a, i, s),
                  f = u(r, n, o, a, i, s),
                  l = u(o, a, e, t, r, n),
                  h = u(i, s, e, t, r, n);return !isNaN(c * f * l * h) && c * f < 0 && l * h < 0;
            }if (0 === t.length) return { polygons: e, holes: t };for (var n = 0; n < t.length; n++) {
              for (var s = t[n], c = 0; c < s.length; c++) {
                for (var l = s[c], h = a(l), p = i(h, 2), v = p[0], m = p[1], d = 0; d < e.length; d++) {
                  for (var y = e[d], b = 0; b < y.length; b++) {
                    var g = y[b],
                        M = a(g),
                        _ = i(M, 2),
                        x = _[0],
                        T = _[1];if (function (n, i, u, s) {
                      for (var c = [].concat(o(e), o(t)), f = 0; f < c.length; f++) {
                        for (var l = c[f], h = 0; h < l.length - 1; h++) {
                          var p = [l[h], l[h + 1]],
                              v = p[0],
                              m = p[1],
                              d = [].concat(o(a(v)), o(a(m))),
                              y = d[0],
                              b = d[1],
                              g = d[2],
                              M = d[3];if (r(n, i, u, s, y, b, g, M)) return !1;
                        }
                      }return !0;
                    }(v, m, x, T)) return e.splice(d, 1), t.splice(n, 1), s.pop(), s = s.splice(c).concat(s), s.push(l), y.splice.apply(y, [b + 1, 0].concat(o(s), [g])), e.push(y), f(e, t);
                  }
                }throw new Error("can not find visible point pair");
              }
            }return { polygons: e, holes: [] };
          }for (var l = this.parse(e, t), h = l.vertices, p = l.lines, v = function (e) {
            return e.map(function (e) {
              return [].concat(o(e));
            });
          }(p), m = function (e) {
            var t = [],
                r = [];return e.forEach(function (e) {
              for (var n = 0, i = 0; i < e.length - 1; i++) {
                var u = i + 1,
                    s = [].concat(o(a(e[i])), o(a(e[u]))),
                    c = s[0],
                    f = s[1];n += (s[2] - c) * (s[3] + f);
              }n >= 0 ? t.push(e) : r.push(e);
            }), { polygons: t, holes: r };
          }(p), d = m.polygons, y = m.holes, b = function (e, t, r) {
            if (t.length > 0) {
              var a = f(e, t);e = a.polygons, t = a.holes;
            }return e.forEach(function (e) {
              r.push.apply(r, o(n(e)));
            }), r;
          }(d, y, []), g = [], M = [], _ = [], x = 0; x < h.length; x += 2) {
            g.push(h[x], h[x + 1], 0), M.push(0, 0, 1), _.push(0, 0);
          }return { vertices: g, indices: b, normals: M, uvs: _, lines: v };
        }, parseToGeometry: function parseToGeometry(e) {
          function t(e, t) {
            return [e[3 * t], e[3 * t + 1], e[3 * t + 2]];
          }function r(e, t, r) {
            var o = n.sub([], e, t),
                a = n.sub([], t, r);return n.cross([], o, a);
          }var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
              u = this.parseToTriangles(e, i),
              s = u.vertices,
              c = u.indices,
              f = u.lines,
              l = [],
              h = [],
              p = [],
              v = [];s.forEach(function (e, t) {
            t % 3 == 2 && (s[t] = a / 2, l.push(0, 0, 1), h.push(0, 0), p.push(0, 0, -1), v.push(0, 0));
          });var m = s.map(function (e, t) {
            return t % 3 == 2 ? -a / 2 : e;
          }),
              d = [].concat(o(c)),
              y = [],
              b = [],
              g = [],
              M = [];return f.forEach(function (e) {
            for (var n = 0; n < e.length - 1; n++) {
              var a = n + 1,
                  i = [t(s, e[n]), t(s, e[a]), t(m, e[n]), t(m, e[a])],
                  u = i[0],
                  c = i[1],
                  f = i[2],
                  l = i[3],
                  h = r(u, c, l),
                  p = y.length / 3;y.push.apply(y, o(u).concat(o(c), o(f), o(l))), g.push.apply(g, o(h).concat(o(h), o(h), o(h))), M.push(0, 0, 0, 0, 0, 0, 0, 0), b.push(p, p + 1, p + 2, p + 1, p + 2, p + 3);
            }
          }), function (e, t, r, n) {
            if (e.length !== t.length) throw new Error("merge vertices not valid");for (var a = [], i = [], u = [], s = [], c = 0; c < e.length; c++) {
              !function (c) {
                var f,
                    l,
                    h = a.length / 3;a = a.concat(e[c]), i = i.concat(t[c].map(function (e) {
                  return e + h;
                })), u = (f = u).concat.apply(f, o(r[c])), s = (l = u).concat.apply(l, o(n[c]));
              }(c);
            }return { vertices: a, indices: i, normals: u, uvs: s };
          }([s, m, y], [c, d, b], [l, p, g], [h, v, M]);
        } };t.default = u, e.exports = t.default;
    }).call(t, r(45), r(0));
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(46),
        o = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(n);t.default = o, e.exports = t.default;
  }, function (e, t, r) {
    "use strict";
    function n() {
      var e = new D.ARRAY_TYPE(2);return e[0] = 0, e[1] = 0, e;
    }function o(e) {
      var t = new D.ARRAY_TYPE(2);return t[0] = e[0], t[1] = e[1], t;
    }function a(e, t) {
      var r = new D.ARRAY_TYPE(2);return r[0] = e, r[1] = t, r;
    }function i(e, t) {
      return e[0] = t[0], e[1] = t[1], e;
    }function u(e, t, r) {
      return e[0] = t, e[1] = r, e;
    }function s(e, t, r) {
      return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e;
    }function c(e, t, r) {
      return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e;
    }function f(e, t, r) {
      return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e;
    }function l(e, t, r) {
      return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e;
    }function h(e, t) {
      return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e;
    }function p(e, t) {
      return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e;
    }function v(e, t, r) {
      return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e;
    }function m(e, t, r) {
      return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e;
    }function d(e, t) {
      return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e;
    }function y(e, t, r) {
      return e[0] = t[0] * r, e[1] = t[1] * r, e;
    }function b(e, t, r, n) {
      return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e;
    }function g(e, t) {
      var r = t[0] - e[0],
          n = t[1] - e[1];return Math.sqrt(r * r + n * n);
    }function M(e, t) {
      var r = t[0] - e[0],
          n = t[1] - e[1];return r * r + n * n;
    }function _(e) {
      var t = e[0],
          r = e[1];return Math.sqrt(t * t + r * r);
    }function x(e) {
      var t = e[0],
          r = e[1];return t * t + r * r;
    }function T(e, t) {
      return e[0] = -t[0], e[1] = -t[1], e;
    }function E(e, t) {
      return e[0] = 1 / t[0], e[1] = 1 / t[1], e;
    }function w(e, t) {
      var r = t[0],
          n = t[1],
          o = r * r + n * n;return o > 0 && (o = 1 / Math.sqrt(o), e[0] = t[0] * o, e[1] = t[1] * o), e;
    }function P(e, t) {
      return e[0] * t[0] + e[1] * t[1];
    }function O(e, t, r) {
      var n = t[0] * r[1] - t[1] * r[0];return e[0] = e[1] = 0, e[2] = n, e;
    }function A(e, t, r, n) {
      var o = t[0],
          a = t[1];return e[0] = o + n * (r[0] - o), e[1] = a + n * (r[1] - a), e;
    }function R(e, t) {
      t = t || 1;var r = 2 * D.RANDOM() * Math.PI;return e[0] = Math.cos(r) * t, e[1] = Math.sin(r) * t, e;
    }function C(e, t, r) {
      var n = t[0],
          o = t[1];return e[0] = r[0] * n + r[2] * o, e[1] = r[1] * n + r[3] * o, e;
    }function F(e, t, r) {
      var n = t[0],
          o = t[1];return e[0] = r[0] * n + r[2] * o + r[4], e[1] = r[1] * n + r[3] * o + r[5], e;
    }function L(e, t, r) {
      var n = t[0],
          o = t[1];return e[0] = r[0] * n + r[3] * o + r[6], e[1] = r[1] * n + r[4] * o + r[7], e;
    }function j(e, t, r) {
      var n = t[0],
          o = t[1];return e[0] = r[0] * n + r[4] * o + r[12], e[1] = r[1] * n + r[5] * o + r[13], e;
    }function S(e) {
      return "vec2(" + e[0] + ", " + e[1] + ")";
    }function k(e, t) {
      return e[0] === t[0] && e[1] === t[1];
    }function I(e, t) {
      var r = e[0],
          n = e[1],
          o = t[0],
          a = t[1];return Math.abs(r - o) <= D.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(n - a) <= D.EPSILON * Math.max(1, Math.abs(n), Math.abs(a));
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.forEach = t.sqrLen = t.sqrDist = t.dist = t.div = t.mul = t.sub = t.len = void 0, t.create = n, t.clone = o, t.fromValues = a, t.copy = i, t.set = u, t.add = s, t.subtract = c, t.multiply = f, t.divide = l, t.ceil = h, t.floor = p, t.min = v, t.max = m, t.round = d, t.scale = y, t.scaleAndAdd = b, t.distance = g, t.squaredDistance = M, t.length = _, t.squaredLength = x, t.negate = T, t.inverse = E, t.normalize = w, t.dot = P, t.cross = O, t.lerp = A, t.random = R, t.transformMat2 = C, t.transformMat2d = F, t.transformMat3 = L, t.transformMat4 = j, t.str = S, t.exactEquals = k, t.equals = I;var N = r(47),
        D = function (e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }return t.default = e, t;
    }(N);t.len = _, t.sub = c, t.mul = f, t.div = l, t.dist = g, t.sqrDist = M, t.sqrLen = x, t.forEach = function () {
      var e = n();return function (t, r, n, o, a, i) {
        var u = void 0,
            s = void 0;for (r || (r = 2), n || (n = 0), s = o ? Math.min(o * r + n, t.length) : t.length, u = n; u < s; u += r) {
          e[0] = t[u], e[1] = t[u + 1], a(e, e, i), t[u] = e[0], t[u + 1] = e[1];
        }return t;
      };
    }();
  }, function (e, t, r) {
    "use strict";
    function n(e) {
      t.ARRAY_TYPE = u = e;
    }function o(e) {
      return e * s;
    }function a(e, t) {
      return Math.abs(e - t) <= i * Math.max(1, Math.abs(e), Math.abs(t));
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.setMatrixArrayType = n, t.toRadian = o, t.equals = a;var i = t.EPSILON = 1e-6,
        u = t.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array,
        s = (t.RANDOM = Math.random, Math.PI / 180);
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/huweijie/Documents/gcanvas_demo/src/g3d-test.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _g3d = __webpack_require__(22);

var _g3d2 = _interopRequireDefault(_g3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

var isWeex = typeof callNative === "function";

var dom = weex.requireModule("dom");
var enable = __webpack_require__(1).enable;
var GImage = __webpack_require__(1).Image;
var WeexBridge = __webpack_require__(1).WeexBridge;

_g3d2.default.Env.Image = isWeex ? GImage : Image;
_g3d2.default.Env.manuallyFlipY = isWeex;
_g3d2.default.Env.framebufferNotReady = isWeex;

function run(canvas, _ref) {
  var requestAnimationFrame = _ref.requestAnimationFrame;


  var engine = new _g3d2.default.Engine(canvas);

  var scene = new _g3d2.default.Scene(engine);

  var camera = new _g3d2.default.ArcRotateCamera(scene);
  camera.alpha = 45;
  camera.beta = 35;
  camera.radius = 6;

  var light1 = new _g3d2.default.DirectionalLight(scene);
  light1.direction.x = 1;
  light1.direction.y = 1;
  light1.direction.z = 1;
  light1.intensity = 1.0;

  var light2 = new _g3d2.default.DirectionalLight(scene);
  light2.direction.x = -1;
  light2.direction.y = 0;
  light2.direction.z = 1;
  light2.intensity = 1.0;

  var colaMesh = _g3d2.default.MeshBuilder.createFromObjModel(scene, getModelData());

  function render() {
    colaMesh.rotation.y += 1;
    camera.beta = Math.sin(Date.now() / 1000) * 20 + 35;
    scene.render();
    requestAnimationFrame(render);
  }
  render();
}

exports.default = {
  data: function data() {
    return {
      isWeex: isWeex,
      width: 750,
      height: 3000
    };
  },


  mounted: function mounted() {
    var _this = this;

    var start = function start() {
      var ref = _this.$refs.canvas_holder;

      var size = isWeex ? {
        width: parseInt(_this.width),
        height: parseInt(_this.height)
      } : {
        width: parseInt(ref.clientWidth),
        height: parseInt(ref.clientHeight)
      };

      if (isWeex) {
        ref = enable(ref, { debug: true, bridge: WeexBridge });
      }

      ref.width = size.width;
      ref.height = size.height;

      run(ref, {
        requestAnimationFrame: isWeex ? setTimeout : requestAnimationFrame
      });
    };

    dom.getComponentRect("viewport", function (e) {
      _this.height = e.size.height;

      _this.isReady = true;

      setTimeout(start, 3000);
    });
  }
};


function getModelData() {
  var objStr = "# Blender v2.70 (sub 0) OBJ File: 'coca-cola.blend'\n# www.blender.org\nmtllib coca-cola.mtl\no coca-cola\nv 0.000000 -1.000000 -1.000000\nv 0.000000 1.000000 -1.000000\nv 0.195090 -1.000000 -0.980785\nv 0.195090 1.000000 -0.980785\nv 0.382683 -1.000000 -0.923880\nv 0.382683 1.000000 -0.923880\nv 0.555570 -1.000000 -0.831470\nv 0.555570 1.000000 -0.831470\nv 0.707107 -1.000000 -0.707107\nv 0.707107 1.000000 -0.707107\nv 0.831470 -1.000000 -0.555570\nv 0.831470 1.000000 -0.555570\nv 0.923880 -1.000000 -0.382683\nv 0.923880 1.000000 -0.382683\nv 0.980785 -1.000000 -0.195090\nv 0.980785 1.000000 -0.195090\nv 1.000000 -1.000000 -0.000000\nv 1.000000 1.000000 -0.000000\nv 0.980785 -1.000000 0.195090\nv 0.980785 1.000000 0.195090\nv 0.923880 -1.000000 0.382683\nv 0.923880 1.000000 0.382683\nv 0.831470 -1.000000 0.555570\nv 0.831470 1.000000 0.555570\nv 0.707107 -1.000000 0.707107\nv 0.707107 1.000000 0.707107\nv 0.555570 -1.000000 0.831470\nv 0.555570 1.000000 0.831470\nv 0.382683 -1.000000 0.923880\nv 0.382683 1.000000 0.923880\nv 0.195090 -1.000000 0.980785\nv 0.195090 1.000000 0.980785\nv -0.000000 -1.000000 1.000000\nv -0.000000 1.000000 1.000000\nv -0.195091 -1.000000 0.980785\nv -0.195091 1.000000 0.980785\nv -0.382684 -1.000000 0.923879\nv -0.382684 1.000000 0.923879\nv -0.555571 -1.000000 0.831469\nv -0.555571 1.000000 0.831469\nv -0.707107 -1.000000 0.707106\nv -0.707107 1.000000 0.707106\nv -0.831470 -1.000000 0.555570\nv -0.831470 1.000000 0.555570\nv -0.923880 -1.000000 0.382683\nv -0.923880 1.000000 0.382683\nv -0.980785 -1.000000 0.195089\nv -0.980785 1.000000 0.195089\nv -1.000000 -1.000000 -0.000001\nv -1.000000 1.000000 -0.000001\nv -0.980785 -1.000000 -0.195091\nv -0.980785 1.000000 -0.195091\nv -0.923879 -1.000000 -0.382684\nv -0.923879 1.000000 -0.382684\nv -0.831469 -1.000000 -0.555571\nv -0.831469 1.000000 -0.555571\nv -0.707106 -1.000000 -0.707108\nv -0.707106 1.000000 -0.707108\nv -0.555569 -1.000000 -0.831470\nv -0.555569 1.000000 -0.831470\nv -0.382682 -1.000000 -0.923880\nv -0.382682 1.000000 -0.923880\nv -0.195089 -1.000000 -0.980786\nv -0.195089 1.000000 -0.980786\nv 0.000000 1.348419 -0.777484\nv 0.151680 1.348419 -0.762545\nv 0.297530 1.348419 -0.718301\nv 0.431947 1.348419 -0.646454\nv 0.549764 1.348419 -0.549764\nv 0.646454 1.348419 -0.431947\nv 0.718301 1.348419 -0.297530\nv 0.762545 1.348419 -0.151680\nv 0.777484 1.348419 -0.000000\nv 0.762545 1.348419 0.151679\nv 0.718302 1.348419 0.297530\nv 0.646454 1.348419 0.431947\nv 0.549764 1.348419 0.549764\nv 0.431947 1.348419 0.646454\nv 0.297530 1.348419 0.718301\nv 0.151679 1.348419 0.762545\nv -0.000000 1.348419 0.777484\nv -0.151680 1.348419 0.762545\nv -0.297531 1.348419 0.718301\nv -0.431947 1.348419 0.646454\nv -0.549764 1.348419 0.549764\nv -0.646455 1.348419 0.431946\nv -0.718302 1.348419 0.297530\nv -0.762545 1.348419 0.151679\nv -0.777484 1.348419 -0.000001\nv -0.762545 1.348419 -0.151680\nv -0.718301 1.348419 -0.297531\nv -0.646454 1.348419 -0.431948\nv -0.549763 1.348419 -0.549765\nv -0.431946 1.348419 -0.646455\nv -0.297529 1.348419 -0.718302\nv -0.151678 1.348419 -0.762545\nv 0.000000 1.348419 -0.725190\nv 0.141478 1.348419 -0.711256\nv 0.277518 1.348419 -0.669988\nv 0.402894 1.348419 -0.602973\nv 0.512787 1.348419 -0.512787\nv 0.602974 1.348419 -0.402894\nv 0.669988 1.348419 -0.277518\nv 0.711256 1.348419 -0.141478\nv 0.725190 1.348419 -0.000000\nv 0.711256 1.348419 0.141477\nv 0.669988 1.348419 0.277518\nv 0.602974 1.348419 0.402894\nv 0.512787 1.348419 0.512787\nv 0.402894 1.348419 0.602973\nv 0.277518 1.348419 0.669988\nv 0.141477 1.348419 0.711256\nv -0.000000 1.348419 0.725190\nv -0.141478 1.348419 0.711255\nv -0.277518 1.348419 0.669988\nv -0.402894 1.348419 0.602973\nv -0.512787 1.348419 0.512786\nv -0.602974 1.348419 0.402893\nv -0.669988 1.348419 0.277518\nv -0.711256 1.348419 0.141477\nv -0.725190 1.348419 -0.000001\nv -0.711255 1.348419 -0.141478\nv -0.669988 1.348419 -0.277519\nv -0.602973 1.348419 -0.402895\nv -0.512786 1.348419 -0.512787\nv -0.402893 1.348419 -0.602974\nv -0.277517 1.348419 -0.669989\nv -0.141476 1.348419 -0.711256\nv 0.000000 1.380813 -0.809968\nv 0.158017 1.380813 -0.794405\nv 0.309961 1.380813 -0.748313\nv 0.449994 1.380813 -0.673464\nv 0.572734 1.380813 -0.572734\nv 0.673464 1.380813 -0.449994\nv 0.748313 1.380813 -0.309961\nv 0.794405 1.380813 -0.158017\nv 0.809968 1.380813 -0.000000\nv 0.794405 1.380813 0.158017\nv 0.748313 1.380813 0.309961\nv 0.673464 1.380813 0.449994\nv 0.572734 1.380813 0.572734\nv 0.449994 1.380813 0.673464\nv 0.309961 1.380813 0.748313\nv 0.158017 1.380813 0.794405\nv -0.000000 1.380813 0.809968\nv -0.158017 1.380813 0.794404\nv -0.309962 1.380813 0.748312\nv -0.449994 1.380813 0.673463\nv -0.572734 1.380813 0.572733\nv -0.673464 1.380813 0.449993\nv -0.748313 1.380813 0.309961\nv -0.794405 1.380813 0.158016\nv -0.809968 1.380813 -0.000001\nv -0.794404 1.380813 -0.158018\nv -0.748312 1.380813 -0.309962\nv -0.673463 1.380813 -0.449995\nv -0.572733 1.380813 -0.572734\nv -0.449993 1.380813 -0.673464\nv -0.309960 1.380813 -0.748313\nv -0.158016 1.380813 -0.794405\nv 0.000000 1.380813 -0.755489\nv 0.147389 1.380813 -0.740973\nv 0.289113 1.380813 -0.697981\nv 0.419727 1.380813 -0.628166\nv 0.534212 1.380813 -0.534212\nv 0.628166 1.380813 -0.419727\nv 0.697981 1.380813 -0.289113\nv 0.740973 1.380813 -0.147389\nv 0.755489 1.380813 -0.000000\nv 0.740973 1.380813 0.147388\nv 0.697981 1.380813 0.289113\nv 0.628166 1.380813 0.419727\nv 0.534212 1.380813 0.534211\nv 0.419727 1.380813 0.628166\nv 0.289113 1.380813 0.697981\nv 0.147388 1.380813 0.740973\nv -0.000000 1.380813 0.755489\nv -0.147389 1.380813 0.740972\nv -0.289113 1.380813 0.697981\nv -0.419728 1.380813 0.628166\nv -0.534212 1.380813 0.534211\nv -0.628166 1.380813 0.419727\nv -0.697981 1.380813 0.289113\nv -0.740973 1.380813 0.147388\nv -0.755489 1.380813 -0.000001\nv -0.740972 1.380813 -0.147389\nv -0.697981 1.380813 -0.289114\nv -0.628166 1.380813 -0.419728\nv -0.534211 1.380813 -0.534212\nv -0.419726 1.380813 -0.628167\nv -0.289112 1.380813 -0.697981\nv -0.147387 1.380813 -0.740973\nv 0.000000 1.434928 -0.809968\nv 0.158017 1.434928 -0.794405\nv 0.309961 1.434928 -0.748313\nv 0.449994 1.434928 -0.673464\nv 0.572734 1.434928 -0.572734\nv 0.673464 1.434928 -0.449994\nv 0.748313 1.434928 -0.309961\nv 0.794405 1.434928 -0.158017\nv 0.809968 1.434928 -0.000000\nv 0.794405 1.434928 0.158017\nv 0.748313 1.434928 0.309961\nv 0.673464 1.434928 0.449994\nv 0.572734 1.434928 0.572734\nv 0.449994 1.434928 0.673464\nv 0.309961 1.434928 0.748313\nv 0.158017 1.434928 0.794405\nv -0.000000 1.434928 0.809968\nv -0.158017 1.434928 0.794404\nv -0.309962 1.434928 0.748312\nv -0.449994 1.434928 0.673463\nv -0.572734 1.434928 0.572733\nv -0.673464 1.434928 0.449993\nv -0.748313 1.434928 0.309961\nv -0.794405 1.434928 0.158016\nv -0.809968 1.434928 -0.000001\nv -0.794404 1.434928 -0.158018\nv -0.748312 1.434928 -0.309962\nv -0.673463 1.434928 -0.449995\nv -0.572733 1.434928 -0.572734\nv -0.449993 1.434928 -0.673464\nv -0.309960 1.434928 -0.748313\nv -0.158016 1.434928 -0.794405\nv 0.000000 1.434928 -0.755489\nv 0.147389 1.434928 -0.740973\nv 0.289113 1.434928 -0.697981\nv 0.419727 1.434928 -0.628166\nv 0.534212 1.434928 -0.534212\nv 0.628166 1.434928 -0.419727\nv 0.697981 1.434928 -0.289113\nv 0.740973 1.434928 -0.147389\nv 0.755489 1.434928 -0.000000\nv 0.740973 1.434928 0.147388\nv 0.697981 1.434928 0.289113\nv 0.628166 1.434928 0.419727\nv 0.534212 1.434928 0.534211\nv 0.419727 1.434928 0.628166\nv 0.289113 1.434928 0.697981\nv 0.147388 1.434928 0.740973\nv -0.000000 1.434928 0.755489\nv -0.147389 1.434928 0.740972\nv -0.289113 1.434928 0.697981\nv -0.419728 1.434928 0.628166\nv -0.534212 1.434928 0.534211\nv -0.628166 1.434928 0.419727\nv -0.697981 1.434928 0.289113\nv -0.740973 1.434928 0.147388\nv -0.755489 1.434928 -0.000001\nv -0.740972 1.434928 -0.147389\nv -0.697981 1.434928 -0.289114\nv -0.628166 1.434928 -0.419728\nv -0.534211 1.434928 -0.534212\nv -0.419726 1.434928 -0.628167\nv -0.289112 1.434928 -0.697981\nv -0.147387 1.434928 -0.740973\nv 0.000000 -1.166913 -0.843166\nv 0.164494 -1.166913 -0.826964\nv 0.322666 -1.166913 -0.778983\nv 0.468438 -1.166913 -0.701067\nv 0.596208 -1.166913 -0.596208\nv 0.701067 -1.166913 -0.468438\nv 0.778983 -1.166913 -0.322666\nv 0.826964 -1.166913 -0.164494\nv 0.843166 -1.166913 -0.000000\nv 0.826964 -1.166913 0.164493\nv 0.778984 -1.166913 0.322665\nv 0.701067 -1.166913 0.468438\nv 0.596208 -1.166913 0.596208\nv 0.468438 -1.166913 0.701067\nv 0.322665 -1.166913 0.778984\nv 0.164493 -1.166913 0.826964\nv -0.000000 -1.166913 0.843166\nv -0.164494 -1.166913 0.826964\nv -0.322666 -1.166913 0.778983\nv -0.468438 -1.166913 0.701066\nv -0.596209 -1.166913 0.596208\nv -0.701067 -1.166913 0.468437\nv -0.778984 -1.166913 0.322665\nv -0.826964 -1.166913 0.164493\nv -0.843166 -1.166913 -0.000001\nv -0.826964 -1.166913 -0.164494\nv -0.778983 -1.166913 -0.322666\nv -0.701066 -1.166913 -0.468439\nv -0.596207 -1.166913 -0.596209\nv -0.468437 -1.166913 -0.701067\nv -0.322664 -1.166913 -0.778984\nv -0.164492 -1.166913 -0.826965\nv 0.000000 -1.166913 -0.790679\nv 0.154254 -1.166913 -0.775486\nv 0.302580 -1.166913 -0.730492\nv 0.439277 -1.166913 -0.657425\nv 0.559094 -1.166913 -0.559094\nv 0.657425 -1.166913 -0.439278\nv 0.730492 -1.166913 -0.302580\nv 0.775486 -1.166913 -0.154254\nv 0.790679 -1.166913 -0.000000\nv 0.775486 -1.166913 0.154254\nv 0.730492 -1.166913 0.302579\nv 0.657425 -1.166913 0.439277\nv 0.559094 -1.166913 0.559094\nv 0.439277 -1.166913 0.657425\nv 0.302580 -1.166913 0.730492\nv 0.154254 -1.166913 0.775486\nv -0.000000 -1.166913 0.790678\nv -0.154254 -1.166913 0.775486\nv -0.302580 -1.166913 0.730492\nv -0.439278 -1.166913 0.657425\nv -0.559095 -1.166913 0.559094\nv -0.657426 -1.166913 0.439277\nv -0.730492 -1.166913 0.302579\nv -0.775486 -1.166913 0.154253\nv -0.790679 -1.166913 -0.000001\nv -0.775486 -1.166913 -0.154255\nv -0.730491 -1.166913 -0.302580\nv -0.657425 -1.166913 -0.439278\nv -0.559093 -1.166913 -0.559095\nv -0.439277 -1.166913 -0.657426\nv -0.302578 -1.166913 -0.730492\nv -0.154252 -1.166913 -0.775486\nv 0.000000 -1.199332 -0.858875\nv 0.167558 -1.199332 -0.842372\nv 0.328677 -1.199332 -0.793497\nv 0.477165 -1.199332 -0.714128\nv 0.607316 -1.199332 -0.607316\nv 0.714128 -1.199332 -0.477165\nv 0.793497 -1.199332 -0.328677\nv 0.842372 -1.199332 -0.167558\nv 0.858875 -1.199332 -0.000000\nv 0.842372 -1.199332 0.167558\nv 0.793497 -1.199332 0.328677\nv 0.714128 -1.199332 0.477165\nv 0.607316 -1.199332 0.607316\nv 0.477165 -1.199332 0.714128\nv 0.328677 -1.199332 0.793497\nv 0.167558 -1.199332 0.842371\nv -0.000000 -1.199332 0.858874\nv -0.167558 -1.199332 0.842371\nv -0.328677 -1.199332 0.793496\nv -0.477166 -1.199332 0.714128\nv -0.607316 -1.199332 0.607316\nv -0.714128 -1.199332 0.477165\nv -0.793497 -1.199332 0.328676\nv -0.842372 -1.199332 0.167557\nv -0.858874 -1.199332 -0.000001\nv -0.842371 -1.199332 -0.167559\nv -0.793496 -1.199332 -0.328678\nv -0.714127 -1.199332 -0.477166\nv -0.607315 -1.199332 -0.607317\nv -0.477164 -1.199332 -0.714129\nv -0.328676 -1.199332 -0.793497\nv -0.167557 -1.199332 -0.842372\nv 0.000000 -1.199332 -0.805410\nv 0.157128 -1.199332 -0.789934\nv 0.308217 -1.199332 -0.744101\nv 0.447462 -1.199332 -0.669674\nv 0.569511 -1.199332 -0.569511\nv 0.669674 -1.199332 -0.447462\nv 0.744101 -1.199332 -0.308217\nv 0.789934 -1.199332 -0.157128\nv 0.805410 -1.199332 -0.000000\nv 0.789934 -1.199332 0.157127\nv 0.744102 -1.199332 0.308217\nv 0.669674 -1.199332 0.447461\nv 0.569511 -1.199332 0.569511\nv 0.447462 -1.199332 0.669674\nv 0.308217 -1.199332 0.744101\nv 0.157127 -1.199332 0.789934\nv -0.000000 -1.199332 0.805409\nv -0.157128 -1.199332 0.789934\nv -0.308217 -1.199332 0.744101\nv -0.447462 -1.199332 0.669673\nv -0.569511 -1.199332 0.569510\nv -0.669674 -1.199332 0.447461\nv -0.744102 -1.199332 0.308216\nv -0.789934 -1.199332 0.157127\nv -0.805410 -1.199332 -0.000001\nv -0.789934 -1.199332 -0.157128\nv -0.744101 -1.199332 -0.308218\nv -0.669673 -1.199332 -0.447462\nv -0.569510 -1.199332 -0.569511\nv -0.447461 -1.199332 -0.669674\nv -0.308216 -1.199332 -0.744102\nv -0.157126 -1.199332 -0.789934\nv 0.000000 -1.232813 -0.858875\nv 0.167558 -1.232813 -0.842372\nv 0.328677 -1.232813 -0.793497\nv 0.477165 -1.232813 -0.714128\nv 0.607316 -1.232813 -0.607316\nv 0.714128 -1.232813 -0.477165\nv 0.793497 -1.232813 -0.328677\nv 0.842372 -1.232813 -0.167558\nv 0.858875 -1.232813 -0.000000\nv 0.842372 -1.232813 0.167558\nv 0.793497 -1.232813 0.328677\nv 0.714128 -1.232813 0.477165\nv 0.607316 -1.232813 0.607316\nv 0.477165 -1.232813 0.714128\nv 0.328677 -1.232813 0.793497\nv 0.167558 -1.232813 0.842371\nv -0.000000 -1.232813 0.858874\nv -0.167558 -1.232813 0.842371\nv -0.328677 -1.232813 0.793496\nv -0.477166 -1.232813 0.714128\nv -0.607316 -1.232813 0.607316\nv -0.714128 -1.232813 0.477165\nv -0.793497 -1.232813 0.328676\nv -0.842372 -1.232813 0.167557\nv -0.858874 -1.232813 -0.000001\nv -0.842371 -1.232813 -0.167559\nv -0.793496 -1.232813 -0.328678\nv -0.714127 -1.232813 -0.477166\nv -0.607315 -1.232813 -0.607317\nv -0.477164 -1.232813 -0.714129\nv -0.328676 -1.232813 -0.793497\nv -0.167557 -1.232813 -0.842372\nv 0.000000 -1.232813 -0.805410\nv 0.157128 -1.232813 -0.789934\nv 0.308217 -1.232813 -0.744101\nv 0.447462 -1.232813 -0.669674\nv 0.569511 -1.232813 -0.569511\nv 0.669674 -1.232813 -0.447462\nv 0.744101 -1.232813 -0.308217\nv 0.789934 -1.232813 -0.157128\nv 0.805410 -1.232813 -0.000000\nv 0.789934 -1.232813 0.157127\nv 0.744102 -1.232813 0.308217\nv 0.669674 -1.232813 0.447461\nv 0.569511 -1.232813 0.569511\nv 0.447462 -1.232813 0.669674\nv 0.308217 -1.232813 0.744101\nv 0.157127 -1.232813 0.789934\nv -0.000000 -1.232813 0.805409\nv -0.157128 -1.232813 0.789934\nv -0.308217 -1.232813 0.744101\nv -0.447462 -1.232813 0.669673\nv -0.569511 -1.232813 0.569510\nv -0.669674 -1.232813 0.447461\nv -0.744102 -1.232813 0.308216\nv -0.789934 -1.232813 0.157127\nv -0.805410 -1.232813 -0.000001\nv -0.789934 -1.232813 -0.157128\nv -0.744101 -1.232813 -0.308218\nv -0.669673 -1.232813 -0.447462\nv -0.569510 -1.232813 -0.569511\nv -0.447461 -1.232813 -0.669674\nv -0.308216 -1.232813 -0.744102\nv -0.157126 -1.232813 -0.789934\nv 0.000000 -1.018165 -0.571654\nv 0.111524 -1.018165 -0.560670\nv 0.218763 -1.018165 -0.528140\nv 0.317594 -1.018165 -0.475313\nv 0.404221 -1.018165 -0.404221\nv 0.475313 -1.018165 -0.317594\nv 0.528140 -1.018165 -0.218763\nv 0.560670 -1.018165 -0.111524\nv 0.571654 -1.018165 -0.000000\nv 0.560670 -1.018165 0.111524\nv 0.528140 -1.018165 0.218762\nv 0.475313 -1.018165 0.317594\nv 0.404221 -1.018165 0.404220\nv 0.317594 -1.018165 0.475313\nv 0.218763 -1.018165 0.528139\nv 0.111524 -1.018165 0.560670\nv -0.000000 -1.018165 0.571654\nv -0.111524 -1.018165 0.560670\nv -0.218763 -1.018165 0.528139\nv -0.317594 -1.018165 0.475313\nv -0.404221 -1.018165 0.404220\nv -0.475313 -1.018165 0.317594\nv -0.528140 -1.018165 0.218762\nv -0.560670 -1.018165 0.111524\nv -0.571654 -1.018165 -0.000001\nv -0.560670 -1.018165 -0.111525\nv -0.528139 -1.018165 -0.218763\nv -0.475313 -1.018165 -0.317595\nv -0.404220 -1.018165 -0.404221\nv -0.317593 -1.018165 -0.475314\nv -0.218762 -1.018165 -0.528140\nv -0.111523 -1.018165 -0.560670\nv 0.000000 1.379073 -0.492315\nv 0.096046 1.379073 -0.482855\nv 0.188401 1.379073 -0.454839\nv 0.273515 1.379073 -0.409345\nv 0.348119 1.379073 -0.348119\nv 0.409345 1.379073 -0.273515\nv 0.454839 1.379073 -0.188401\nv 0.482855 1.379073 -0.096046\nv 0.492314 1.379073 -0.000000\nv 0.482855 1.379073 0.096046\nv 0.454839 1.379073 0.188400\nv 0.409345 1.379073 0.273515\nv 0.348119 1.379073 0.348119\nv 0.273515 1.379073 0.409344\nv 0.188401 1.379073 0.454839\nv 0.096046 1.379073 0.482855\nv -0.000000 1.379073 0.492314\nv -0.096046 1.379073 0.482855\nv -0.188401 1.379073 0.454839\nv -0.273515 1.379073 0.409344\nv -0.348119 1.379073 0.348119\nv -0.409345 1.379073 0.273515\nv -0.454839 1.379073 0.188400\nv -0.482855 1.379073 0.096045\nv -0.492314 1.379073 -0.000001\nv -0.482855 1.379073 -0.096046\nv -0.454839 1.379073 -0.188401\nv -0.409344 1.379073 -0.273516\nv -0.348118 1.379073 -0.348119\nv -0.273515 1.379073 -0.409345\nv -0.188400 1.379073 -0.454840\nv -0.096045 1.379073 -0.482855\nvt 0.000000 0.000000\nvt 0.076682 -0.003151\nvt 0.076683 0.480510\nvt 0.035933 0.480510\nvt 0.035933 -0.003151\nvt 0.001279 0.480510\nvt 0.001279 -0.003151\nvt 0.735685 0.526303\nvt 0.735686 0.995893\nvt 0.690739 0.995893\nvt 0.690738 0.526303\nvt 0.640796 0.995893\nvt 0.640796 0.526303\nvt 0.587778 0.995893\nvt 0.587777 0.526303\nvt 0.533720 0.995894\nvt 0.533720 0.526304\nvt 0.480702 0.995894\nvt 0.480701 0.526304\nvt 0.430759 0.995894\nvt 0.430759 0.526304\nvt 0.385812 0.995894\nvt 0.385812 0.526304\nvt 0.347588 0.995894\nvt 0.347587 0.526304\nvt 0.302641 0.995894\nvt 0.302640 0.526304\nvt 0.252698 0.995894\nvt 0.252698 0.526304\nvt 0.199680 0.995894\nvt 0.199679 0.526304\nvt 0.145622 0.995894\nvt 0.145622 0.526304\nvt 0.092604 0.995894\nvt 0.092603 0.526304\nvt 0.042661 0.995894\nvt 0.042661 0.526304\nvt 0.002714 0.995894\nvt 0.002714 0.526304\nvt 0.730743 -0.002602\nvt 0.730743 0.480571\nvt 0.699311 0.480571\nvt 0.699311 -0.002602\nvt 0.659411 0.480571\nvt 0.659411 -0.002602\nvt 0.615077 0.480571\nvt 0.615077 -0.002602\nvt 0.568012 0.480571\nvt 0.568012 -0.002602\nvt 0.520025 0.480571\nvt 0.520025 -0.002602\nvt 0.472960 0.480571\nvt 0.472960 -0.002602\nvt 0.428625 0.480571\nvt 0.428625 -0.002602\nvt 0.388725 0.480571\nvt 0.388725 -0.002602\nvt 0.387784 -0.003151\nvt 0.387784 0.480509\nvt 0.353130 0.480509\nvt 0.353129 -0.003151\nvt 0.312381 0.480509\nvt 0.312380 -0.003151\nvt 0.267103 0.480509\nvt 0.267102 -0.003151\nvt 0.219036 0.480510\nvt 0.219035 -0.003151\nvt 0.170027 0.480510\nvt 0.170027 -0.003151\nvt 0.881856 0.861055\nvt 0.858132 0.861055\nvt 0.862075 0.816563\nvt 0.877077 0.816637\nvt 0.121960 -0.003151\nvt 0.121960 0.480510\nvt 0.198250 0.515267\nvt 0.244938 0.515267\nvt 0.261145 0.489038\nvt 0.221780 0.489038\nvt 0.484326 0.497246\nvt 0.522727 0.497246\nvt 0.524332 0.506039\nvt 0.484326 0.506039\nvt 0.793226 0.834208\nvt 0.776469 0.817462\nvt 0.810594 0.788820\nvt 0.821136 0.799430\nvt 0.749679 0.752791\nvt 0.749694 0.729193\nvt 0.793867 0.733147\nvt 0.793800 0.747988\nvt 0.776638 0.664702\nvt 0.793431 0.648093\nvt 0.821728 0.682344\nvt 0.811070 0.692715\nvt 0.963557 0.817543\nvt 0.946776 0.834269\nvt 0.918240 0.799995\nvt 0.928910 0.789537\nvt 0.927042 0.847402\nvt 0.905712 0.808180\nvt 0.858230 0.621695\nvt 0.881836 0.621744\nvt 0.877892 0.666132\nvt 0.862864 0.666072\nvt 0.990307 0.729180\nvt 0.990371 0.752808\nvt 0.946128 0.748927\nvt 0.946204 0.734067\nvt 0.946451 0.648245\nvt 0.963225 0.664787\nvt 0.929428 0.693455\nvt 0.918881 0.682993\nvt 0.834862 0.856435\nvt 0.847381 0.813576\nvt 0.763320 0.797784\nvt 0.802335 0.776371\nvt 0.754336 0.706056\nvt 0.796864 0.718619\nvt 0.813156 0.635091\nvt 0.834239 0.674256\nvt 0.976453 0.684300\nvt 0.937690 0.705783\nvt 0.904983 0.626327\nvt 0.892603 0.669087\nvt 0.985788 0.776005\nvt 0.943126 0.763497\nvt 0.905122 0.856444\nvt 0.891811 0.813793\nvt 0.812944 0.847370\nvt 0.833558 0.807790\nvt 0.754278 0.775943\nvt 0.796674 0.762565\nvt 0.763434 0.684276\nvt 0.802674 0.704965\nvt 0.926796 0.635274\nvt 0.906446 0.674806\nvt 0.976732 0.797868\nvt 0.937313 0.777212\nvt 0.835040 0.626186\nvt 0.848125 0.668762\nvt 0.985604 0.706044\nvt 0.943354 0.719497\nvt 0.808701 0.235083\nvt 0.791650 0.221089\nvt 0.817200 0.195539\nvt 0.828776 0.205039\nvt 0.291270 0.497246\nvt 0.287488 0.497246\nvt 0.279264 0.506039\nvt 0.283204 0.506039\nvt 0.338014 0.488109\nvt 0.301539 0.488109\nvt 0.304913 0.496899\nvt 0.342911 0.496899\nvt 0.445925 0.497246\nvt 0.408999 0.497246\nvt 0.405852 0.506039\nvt 0.444320 0.506039\nvt 0.071620 0.510081\nvt 0.103590 0.510081\nvt 0.098693 0.518872\nvt 0.065387 0.518872\nvt 0.374969 0.497246\nvt 0.370400 0.506039\nvt 0.301539 0.510081\nvt 0.338014 0.510081\nvt 0.342911 0.518872\nvt 0.304912 0.518872\nvt 0.623512 0.497246\nvt 0.593683 0.497246\nvt 0.598253 0.506039\nvt 0.629327 0.506039\nvt 0.261962 0.510081\nvt 0.263681 0.518872\nvt 0.409000 0.497246\nvt 0.220802 0.488109\nvt 0.179643 0.488109\nvt 0.177924 0.496899\nvt 0.220802 0.496899\nvt 0.427724 0.510081\nvt 0.431778 0.510081\nvt 0.440593 0.518872\nvt 0.436370 0.518872\nvt 0.677382 0.497246\nvt 0.681164 0.497246\nvt 0.689388 0.506039\nvt 0.685448 0.506039\nvt 0.025886 0.488109\nvt 0.013880 0.488109\nvt 0.005235 0.496899\nvt 0.017742 0.496899\nvt 0.444321 0.506039\nvt 0.559653 0.497246\nvt 0.562800 0.506039\nvt 0.045382 0.488109\nvt 0.038053 0.496899\nvt 0.369985 0.488109\nvt 0.376218 0.496899\nvt 0.045382 0.510081\nvt 0.038053 0.518872\nvt 0.345140 0.497246\nvt 0.339325 0.506039\nvt 0.220802 0.510081\nvt 0.220802 0.518872\nvt 0.415719 0.510081\nvt 0.423862 0.518872\nvt 0.396222 0.510081\nvt 0.403552 0.518872\nvt 0.302471 0.497246\nvt 0.294873 0.506039\nvt 0.396222 0.488109\nvt 0.403552 0.496899\nvt 0.071620 0.488109\nvt 0.065387 0.496899\nvt 0.164080 0.491086\nvt 0.225332 0.491086\nvt 0.225332 0.516463\nvt 0.164080 0.516463\nvt 0.068637 0.492953\nvt 0.085788 0.492953\nvt 0.085788 0.513089\nvt 0.068637 0.513089\nvt 0.708396 0.491086\nvt 0.715204 0.491086\nvt 0.715204 0.516463\nvt 0.708396 0.516463\nvt 0.305437 0.492953\nvt 0.364235 0.492953\nvt 0.364235 0.513089\nvt 0.305437 0.513089\nvt 0.291795 0.491086\nvt 0.291795 0.516463\nvt 0.430032 0.491086\nvt 0.496494 0.491086\nvt 0.496494 0.516463\nvt 0.430032 0.516463\nvt 0.006622 0.491086\nvt 0.013430 0.491086\nvt 0.013430 0.516463\nvt 0.006622 0.516463\nvt 0.557746 0.491086\nvt 0.557746 0.516463\nvt 0.577349 0.492953\nvt 0.614830 0.492953\nvt 0.614830 0.513089\nvt 0.577349 0.513089\nvt 0.164079 0.491086\nvt 0.110391 0.491086\nvt 0.110391 0.516463\nvt 0.164079 0.516463\nvt 0.642682 0.492953\nvt 0.642682 0.513089\nvt 0.196792 0.492953\nvt 0.151121 0.492953\nvt 0.151121 0.513089\nvt 0.196792 0.513089\nvt 0.659833 0.492953\nvt 0.659833 0.513089\nvt 0.423033 0.492953\nvt 0.423033 0.513089\nvt 0.062846 0.492953\nvt 0.062846 0.513089\nvt 0.248898 0.492953\nvt 0.248898 0.513089\nvt 0.360913 0.491086\nvt 0.360913 0.516463\nvt 0.033591 0.491086\nvt 0.033591 0.516463\nvt 0.531677 0.492953\nvt 0.531677 0.513089\nvt 0.611435 0.491086\nvt 0.611435 0.516463\nvt 0.066331 0.491086\nvt 0.066331 0.516463\nvt 0.248899 0.492953\nvt 0.248899 0.513089\nvt 0.665624 0.492953\nvt 0.665624 0.513089\nvt 0.479571 0.492953\nvt 0.479571 0.513089\nvt 0.261962 0.488109\nvt 0.263681 0.496899\nvt 0.009826 0.488109\nvt 0.001012 0.496899\nvt 0.666181 0.497246\nvt 0.673779 0.506039\nvt 0.140066 0.488109\nvt 0.136692 0.496899\nvt 0.345141 0.497246\nvt 0.647991 0.497246\nvt 0.654829 0.506039\nvt 0.103591 0.488109\nvt 0.098693 0.496899\nvt 0.369985 0.510081\nvt 0.376218 0.518872\nvt 0.140065 0.510081\nvt 0.136692 0.518872\nvt 0.179643 0.510081\nvt 0.177923 0.518872\nvt 0.320661 0.497246\nvt 0.313823 0.506039\nvt 0.427724 0.488109\nvt 0.415719 0.488109\nvt 0.423862 0.496899\nvt 0.436370 0.496899\nvt 0.025886 0.510081\nvt 0.017742 0.518872\nvt 0.818414 0.265353\nvt 0.795542 0.253128\nvt 0.797191 0.250659\nvt 0.819550 0.262610\nvt 0.746817 0.193756\nvt 0.739288 0.168939\nvt 0.742200 0.168359\nvt 0.749560 0.192620\nvt 0.746817 0.092503\nvt 0.759042 0.069631\nvt 0.761510 0.071280\nvt 0.749560 0.093639\nvt 0.818413 0.020906\nvt 0.843231 0.013378\nvt 0.843810 0.016290\nvt 0.819550 0.023649\nvt 0.991263 0.092503\nvt 0.998792 0.117320\nvt 0.995880 0.117899\nvt 0.988520 0.093639\nvt 0.991263 0.193756\nvt 0.979038 0.216628\nvt 0.976569 0.214978\nvt 0.988520 0.192620\nvt 0.919667 0.265353\nvt 0.894849 0.272881\nvt 0.894270 0.269969\nvt 0.918530 0.262610\nvt 0.919667 0.020906\nvt 0.942538 0.033131\nvt 0.940889 0.035600\nvt 0.918530 0.023649\nvt 0.843231 0.272881\nvt 0.843810 0.269969\nvt 0.759042 0.216628\nvt 0.761511 0.214978\nvt 0.739288 0.117320\nvt 0.742200 0.117899\nvt 0.795542 0.033131\nvt 0.797191 0.035600\nvt 0.894849 0.013378\nvt 0.894270 0.016290\nvt 0.979038 0.069631\nvt 0.976569 0.071280\nvt 0.998792 0.168938\nvt 0.995880 0.168359\nvt 0.942538 0.253127\nvt 0.940889 0.250659\nvt 0.869040 0.275423\nvt 0.869040 0.272454\nvt 0.775494 0.236675\nvt 0.777594 0.234576\nvt 0.736746 0.143129\nvt 0.739715 0.143129\nvt 0.775494 0.049584\nvt 0.777594 0.051683\nvt 0.869040 0.010836\nvt 0.869040 0.013805\nvt 0.962586 0.049583\nvt 0.960486 0.051683\nvt 1.001334 0.143129\nvt 0.998365 0.143129\nvt 0.962586 0.236675\nvt 0.960486 0.234576\nvt 0.113639 0.492953\nvt 0.113639 0.513089\nvt 0.291794 0.491086\nvt 0.291794 0.516463\nvt 0.688235 0.491086\nvt 0.688235 0.516463\nvt 0.110392 0.491086\nvt 0.110392 0.516463\nvt 0.655495 0.491086\nvt 0.655495 0.516463\nvt 0.151120 0.492953\nvt 0.151120 0.513089\nvt 0.111545 0.511430\nvt 0.136936 0.511430\nvt 0.132680 0.500865\nvt 0.106815 0.500865\nvt 0.083423 0.515267\nvt 0.098790 0.515267\nvt 0.137918 0.489038\nvt 0.124961 0.489038\nvt 0.123744 0.515267\nvt 0.158959 0.489038\nvt 0.295596 0.515267\nvt 0.244937 0.515267\nvt 0.303859 0.489038\nvt 0.572815 0.515267\nvt 0.597770 0.515267\nvt 0.558641 0.489038\nvt 0.537600 0.489038\nvt 0.613137 0.515267\nvt 0.571598 0.489038\nvt 0.400963 0.515267\nvt 0.451622 0.515267\nvt 0.435414 0.489038\nvt 0.392700 0.489038\nvt 0.348280 0.515267\nvt 0.348280 0.489038\nvt 0.498309 0.515267\nvt 0.474779 0.489038\nvt 0.157329 0.515267\nvt 0.187276 0.489038\nvt 0.078234 0.515267\nvt 0.120586 0.489038\nvt 0.157328 0.515267\nvt 0.539231 0.515267\nvt 0.509283 0.489038\nvt 0.618326 0.515267\nvt 0.575973 0.489038\nvt 0.295597 0.515267\nvt 0.123745 0.515267\nvt 0.158960 0.489038\nvt 0.083422 0.515267\nvt 0.758331 0.399886\nvt 0.769174 0.408784\nvt 0.780185 0.392305\nvt 0.772346 0.385872\nvt 0.518052 0.511430\nvt 0.559690 0.511430\nvt 0.563310 0.500865\nvt 0.520896 0.500865\nvt 0.593861 0.511430\nvt 0.598117 0.500865\nvt 0.111544 0.511430\nvt 0.132679 0.500865\nvt 0.419003 0.511430\nvt 0.365398 0.511430\nvt 0.365398 0.500865\nvt 0.420002 0.500865\nvt 0.311793 0.511430\nvt 0.310795 0.500865\nvt 0.619252 0.511430\nvt 0.623982 0.500865\nvt 0.171107 0.511430\nvt 0.167488 0.500865\nvt 0.212745 0.511430\nvt 0.209901 0.500865\nvt 0.095909 0.511430\nvt 0.090888 0.500865\nvt 0.260249 0.511430\nvt 0.258290 0.500865\nvt 0.634888 0.511430\nvt 0.639909 0.500865\nvt 0.085510 0.500865\nvt 0.085510 0.489954\nvt 0.090888 0.489954\nvt 0.472507 0.500865\nvt 0.472507 0.489954\nvt 0.420002 0.489954\nvt 0.209900 0.500865\nvt 0.209900 0.489954\nvt 0.258290 0.489954\nvt 0.520896 0.489954\nvt 0.645287 0.500865\nvt 0.645287 0.489954\nvt 0.639909 0.489954\nvt 0.310795 0.489954\nvt 0.106815 0.489954\nvt 0.167487 0.500865\nvt 0.167487 0.489954\nvt 0.132679 0.489954\nvt 0.365398 0.489954\nvt 0.623982 0.489954\nvt 0.563310 0.489954\nvt 0.132680 0.489954\nvt 0.311794 0.511430\nvt 0.470548 0.511430\nvt 0.640168 0.511430\nvt 0.090629 0.511430\nvt 0.209901 0.489954\nvt 0.598117 0.489954\nvt 0.167488 0.489954\nvt 0.808924 0.401023\nvt 0.819016 0.400029\nvt 0.828720 0.397085\nvt 0.837663 0.392305\nvt 0.845502 0.385872\nvt 0.851935 0.378033\nvt 0.856715 0.369090\nvt 0.859659 0.359386\nvt 0.860653 0.349294\nvt 0.859659 0.339202\nvt 0.856715 0.329498\nvt 0.851935 0.320555\nvt 0.845502 0.312716\nvt 0.837663 0.306282\nvt 0.828720 0.301502\nvt 0.819016 0.298559\nvt 0.808924 0.297565\nvt 0.798832 0.298559\nvt 0.789128 0.301502\nvt 0.780185 0.306283\nvt 0.772346 0.312716\nvt 0.765913 0.320555\nvt 0.761132 0.329498\nvt 0.758189 0.339202\nvt 0.757195 0.349294\nvt 0.758189 0.359386\nvt 0.761132 0.369090\nvt 0.765913 0.378033\nvt 0.789128 0.397085\nvt 0.798832 0.400029\nvt 0.737375 0.349294\nvt 0.738750 0.363252\nvt 0.758331 0.298701\nvt 0.749433 0.309543\nvt 0.808924 0.277745\nvt 0.794966 0.279120\nvt 0.859517 0.298701\nvt 0.848674 0.289803\nvt 0.880473 0.349294\nvt 0.879098 0.335335\nvt 0.859517 0.399886\nvt 0.868415 0.389044\nvt 0.808924 0.420842\nvt 0.822882 0.419468\nvt 0.781544 0.415396\nvt 0.742822 0.376674\nvt 0.742821 0.321913\nvt 0.781543 0.283191\nvt 0.836304 0.283191\nvt 0.875026 0.321913\nvt 0.875026 0.376674\nvt 0.836304 0.415396\nvt 0.794966 0.419468\nvt 0.749433 0.389044\nvt 0.738750 0.335335\nvt 0.769174 0.289803\nvt 0.848674 0.408784\nvt 0.822882 0.279120\nvt 0.868415 0.309543\nvt 0.879098 0.363252\nvt 0.886118 0.216445\nvt 0.871215 0.217913\nvt 0.856313 0.216445\nvt 0.841983 0.212098\nvt 0.807700 0.183963\nvt 0.800641 0.170756\nvt 0.796294 0.156426\nvt 0.794826 0.141523\nvt 0.796294 0.126621\nvt 0.800641 0.112291\nvt 0.807700 0.099084\nvt 0.817200 0.087508\nvt 0.828776 0.078008\nvt 0.841982 0.070949\nvt 0.856313 0.066602\nvt 0.871215 0.065134\nvt 0.886118 0.066602\nvt 0.900448 0.070949\nvt 0.913655 0.078008\nvt 0.925231 0.087508\nvt 0.934730 0.099084\nvt 0.941790 0.112291\nvt 0.946137 0.126621\nvt 0.947604 0.141523\nvt 0.946137 0.156426\nvt 0.941790 0.170756\nvt 0.934730 0.183963\nvt 0.925231 0.195539\nvt 0.913655 0.205039\nvt 0.900448 0.212098\nvt 0.760855 0.163476\nvt 0.758692 0.141523\nvt 0.777656 0.079009\nvt 0.791650 0.061958\nvt 0.849263 0.031163\nvt 0.871215 0.029001\nvt 0.933730 0.047964\nvt 0.950781 0.061958\nvt 0.981576 0.119571\nvt 0.983738 0.141523\nvt 0.964775 0.204038\nvt 0.950781 0.221089\nvt 0.893167 0.251884\nvt 0.871215 0.254046\nvt 0.828155 0.245481\nvt 0.767258 0.184584\nvt 0.767258 0.098463\nvt 0.828155 0.037566\nvt 0.914276 0.245481\nvt 0.914276 0.037566\nvt 0.975173 0.098463\nvt 0.975173 0.184584\nvt 0.849263 0.251884\nvt 0.777656 0.204038\nvt 0.760855 0.119571\nvt 0.808701 0.047964\nvt 0.981576 0.163476\nvt 0.933730 0.235083\nvt 0.893167 0.031163\nvt 0.964775 0.079009\nusemtl coca-cola\ns 1\nf 292/1 291/1 355/1 356/1\nf 315/1 314/1 378/1 379/1\nf 309/1 308/1 372/1 373/1\nf 310/1 309/1 373/1 374/1\nf 304/1 303/1 367/1 368/1\nf 289/1 320/1 384/1 353/1\nf 299/1 298/1 362/1 363/1\nf 293/1 292/1 356/1 357/1\nf 316/1 315/1 379/1 380/1\nf 294/1 293/1 357/1 358/1\nf 311/1 310/1 374/1 375/1\nf 305/1 304/1 368/1 369/1\nf 306/1 305/1 369/1 370/1\nf 300/1 299/1 363/1 364/1\nf 317/1 316/1 380/1 381/1\nf 353/1 384/1 448/1 417/1\nf 363/1 362/1 426/1 427/1\nf 357/1 356/1 420/1 421/1\nf 380/1 379/1 443/1 444/1\nf 358/1 357/1 421/1 422/1\nf 375/1 374/1 438/1 439/1\nf 369/1 368/1 432/1 433/1\nf 370/1 369/1 433/1 434/1\nf 364/1 363/1 427/1 428/1\nf 381/1 380/1 444/1 445/1\nf 359/1 358/1 422/1 423/1\nf 382/1 381/1 445/1 446/1\nf 376/1 375/1 439/1 440/1\nf 354/1 353/1 417/1 418/1\nf 371/1 370/1 434/1 435/1\nf 298/1 297/1 361/1 362/1\nf 320/1 319/1 383/1 384/1\nf 297/1 296/1 360/1 361/1\nf 303/1 302/1 366/1 367/1\nf 308/1 307/1 371/1 372/1\nf 314/1 313/1 377/1 378/1\nf 291/1 290/1 354/1 355/1\nf 313/1 312/1 376/1 377/1\nf 319/1 318/1 382/1 383/1\nf 296/1 295/1 359/1 360/1\nf 302/1 301/1 365/1 366/1\nf 301/1 300/1 364/1 365/1\nf 307/1 306/1 370/1 371/1\nf 290/1 289/1 353/1 354/1\nf 312/1 311/1 375/1 376/1\nf 318/1 317/1 381/1 382/1\nf 295/1 294/1 358/1 359/1\nf 415/1 416/1 448/1 447/1\nf 411/1 412/1 444/1 443/1\nf 407/1 408/1 440/1 439/1\nf 403/1 404/1 436/1 435/1\nf 399/1 400/1 432/1 431/1\nf 395/1 396/1 428/1 427/1\nf 391/1 392/1 424/1 423/1\nf 387/1 388/1 420/1 419/1\nf 416/1 385/1 417/1 448/1\nf 412/1 413/1 445/1 444/1\nf 408/1 409/1 441/1 440/1\nf 404/1 405/1 437/1 436/1\nf 400/1 401/1 433/1 432/1\nf 396/1 397/1 429/1 428/1\nf 392/1 393/1 425/1 424/1\nf 388/1 389/1 421/1 420/1\nf 413/1 414/1 446/1 445/1\nf 409/1 410/1 442/1 441/1\nf 405/1 406/1 438/1 437/1\nf 401/1 402/1 434/1 433/1\nf 389/1 390/1 422/1 421/1\nf 385/1 386/1 418/1 417/1\nf 397/1 398/1 430/1 429/1\nf 393/1 394/1 426/1 425/1\nf 414/1 415/1 447/1 446/1\nf 410/1 411/1 443/1 442/1\nf 406/1 407/1 439/1 438/1\nf 402/1 403/1 435/1 434/1\nf 394/1 395/1 427/1 426/1\nf 390/1 391/1 423/1 422/1\nf 386/1 387/1 419/1 418/1\nf 398/1 399/1 431/1 430/1\nf 368/1 367/1 431/1 432/1\nf 374/1 373/1 437/1 438/1\nf 373/1 372/1 436/1 437/1\nf 379/1 378/1 442/1 443/1\nf 356/1 355/1 419/1 420/1\nf 362/1 361/1 425/1 426/1\nf 384/1 383/1 447/1 448/1\nf 361/1 360/1 424/1 425/1\nf 367/1 366/1 430/1 431/1\nf 372/1 371/1 435/1 436/1\nf 378/1 377/1 441/1 442/1\nf 355/1 354/1 418/1 419/1\nf 377/1 376/1 440/1 441/1\nf 383/1 382/1 446/1 447/1\nf 360/1 359/1 423/1 424/1\nf 366/1 365/1 429/1 430/1\nf 365/1 364/1 428/1 429/1\nusemtl coca-cola_coca-cola-zero\nf 1/2 2/3 4/4 3/5\nf 3/5 4/4 6/6 5/7\nf 5/8 6/9 8/10 7/11\nf 7/11 8/10 10/12 9/13\nf 9/13 10/12 12/14 11/15\nf 11/15 12/14 14/16 13/17\nf 13/17 14/16 16/18 15/19\nf 15/19 16/18 18/20 17/21\nf 17/21 18/20 20/22 19/23\nf 19/23 20/22 22/24 21/25\nf 21/25 22/24 24/26 23/27\nf 23/27 24/26 26/28 25/29\nf 25/29 26/28 28/30 27/31\nf 27/31 28/30 30/32 29/33\nf 29/33 30/32 32/34 31/35\nf 31/35 32/34 34/36 33/37\nf 33/37 34/36 36/38 35/39\nf 35/40 36/41 38/42 37/43\nf 37/43 38/42 40/44 39/45\nf 39/45 40/44 42/46 41/47\nf 41/47 42/46 44/48 43/49\nf 43/49 44/48 46/50 45/51\nf 45/51 46/50 48/52 47/53\nf 47/53 48/52 50/54 49/55\nf 49/55 50/54 52/56 51/57\nf 51/58 52/59 54/60 53/61\nf 53/61 54/60 56/62 55/63\nf 55/63 56/62 58/64 57/65\nf 57/65 58/64 60/66 59/67\nf 59/67 60/66 62/68 61/69\nf 62/70 60/71 94/72 95/73\nf 63/74 64/75 2/3 1/2\nf 61/69 62/68 64/75 63/74\nf 59/76 61/77 287/78 286/79\nf 97/80 98/81 162/82 161/83\nf 54/84 52/85 90/86 91/87\nf 46/88 44/89 86/90 87/91\nf 38/92 36/93 82/94 83/95\nf 6/96 4/97 66/98 67/99\nf 4/97 2/100 65/101 66/98\nf 30/102 28/103 78/104 79/105\nf 14/106 12/107 70/108 71/109\nf 22/110 20/111 74/112 75/113\nf 60/71 58/114 93/115 94/72\nf 52/85 50/116 89/117 90/86\nf 44/89 42/118 85/119 86/90\nf 36/93 34/120 81/121 82/94\nf 20/111 18/122 73/123 74/112\nf 28/103 26/124 77/125 78/104\nf 12/107 10/126 69/127 70/108\nf 2/100 64/128 96/129 65/101\nf 58/114 56/130 92/131 93/115\nf 50/116 48/132 88/133 89/117\nf 42/118 40/134 84/135 85/119\nf 26/124 24/136 76/137 77/125\nf 10/126 8/138 68/139 69/127\nf 34/120 32/140 80/141 81/121\nf 18/122 16/142 72/143 73/123\nf 64/128 62/70 95/73 96/129\nf 56/130 54/84 91/87 92/131\nf 48/132 46/88 87/91 88/133\nf 40/134 38/92 83/95 84/135\nf 16/142 14/106 71/109 72/143\nf 24/136 22/110 75/113 76/137\nf 8/138 6/96 67/99 68/139\nf 32/140 30/102 79/105 80/141\nf 126/144 125/145 509/146 510/147\nf 120/148 121/149 185/150 184/151\nf 68/152 67/153 131/154 132/155\nf 114/156 115/157 179/158 178/159\nf 85/160 84/161 148/162 149/163\nf 115/157 116/164 180/165 179/158\nf 79/166 78/167 142/168 143/169\nf 109/170 110/171 174/172 173/173\nf 80/174 79/166 143/169 144/175\nf 126/164 127/176 191/158 190/165\nf 65/177 96/178 160/179 129/180\nf 74/181 73/182 137/183 138/184\nf 104/185 105/186 169/187 168/188\nf 91/189 90/190 154/191 155/192\nf 127/176 128/156 192/193 191/158\nf 98/81 99/194 163/195 162/82\nf 121/149 122/148 186/151 185/150\nf 92/196 91/189 155/192 156/197\nf 69/198 68/152 132/155 133/199\nf 99/194 100/171 164/172 163/195\nf 86/200 85/160 149/163 150/201\nf 116/164 117/202 181/203 180/165\nf 110/171 111/194 175/195 174/172\nf 81/204 80/174 144/175 145/205\nf 75/206 74/181 138/184 139/207\nf 111/194 112/81 176/82 175/195\nf 105/186 106/185 170/188 169/187\nf 128/156 97/80 161/83 192/193\nf 76/208 75/206 139/207 140/209\nf 122/148 123/210 187/211 186/151\nf 70/212 69/198 133/199 134/213\nf 93/214 92/196 156/197 157/215\nf 190/216 191/217 255/218 254/219\nf 152/220 151/221 215/222 216/223\nf 168/224 169/225 233/226 232/227\nf 146/228 145/229 209/230 210/231\nf 191/217 192/232 256/233 255/218\nf 162/234 163/235 227/236 226/237\nf 185/238 186/239 250/240 249/241\nf 163/235 164/242 228/243 227/236\nf 141/244 140/245 204/246 205/247\nf 180/248 181/249 245/250 244/251\nf 135/252 134/245 198/246 199/253\nf 158/254 157/255 221/256 222/257\nf 174/242 175/235 239/236 238/243\nf 136/258 135/252 199/253 200/259\nf 175/235 176/234 240/237 239/236\nf 130/260 129/229 193/230 194/261\nf 153/262 152/220 216/223 217/263\nf 147/264 146/228 210/231 211/265\nf 169/225 170/224 234/227 233/226\nf 192/232 161/266 225/267 256/233\nf 186/239 187/268 251/269 250/240\nf 148/254 147/264 211/265 212/257\nf 142/270 141/244 205/247 206/271\nf 164/242 165/272 229/273 228/243\nf 187/268 188/274 252/275 251/269\nf 159/276 158/254 222/257 223/277\nf 181/249 182/274 246/275 245/250\nf 137/278 136/258 200/259 201/279\nf 160/228 159/276 223/277 224/231\nf 154/220 153/262 217/263 218/223\nf 176/234 177/266 241/267 240/237\nf 131/280 130/260 194/261 195/281\nf 67/153 66/282 130/283 131/154\nf 90/190 89/284 153/285 154/191\nf 103/286 104/185 168/188 167/287\nf 96/178 95/288 159/289 160/179\nf 73/182 72/181 136/184 137/183\nf 125/290 126/164 190/165 189/203\nf 102/291 103/286 167/287 166/292\nf 95/288 94/293 158/294 159/289\nf 108/291 109/170 173/173 172/292\nf 78/167 77/295 141/296 142/168\nf 84/161 83/297 147/298 148/162\nf 113/80 114/156 178/159 177/83\nf 119/210 120/148 184/151 183/211\nf 83/297 82/299 146/300 147/298\nf 89/284 88/190 152/191 153/285\nf 66/282 65/177 129/180 130/283\nf 118/301 119/210 183/211 182/302\nf 72/303 71/304 135/305 136/306\nf 124/301 125/290 189/203 188/302\nf 101/170 102/291 166/292 165/173\nf 94/293 93/214 157/215 158/294\nf 107/286 108/291 172/292 171/287\nf 71/304 70/212 134/213 135/305\nf 77/295 76/208 140/209 141/296\nf 106/185 107/286 171/287 170/188\nf 112/81 113/80 177/83 176/82\nf 82/299 81/204 145/205 146/300\nf 88/190 87/189 151/192 152/191\nf 117/202 118/301 182/302 181/203\nf 123/210 124/301 188/302 187/211\nf 87/307 86/200 150/201 151/308\nf 100/171 101/170 165/173 164/172\nf 223/309 222/310 254/311 255/312\nf 219/313 218/314 250/315 251/316\nf 215/317 214/318 246/319 247/320\nf 211/321 210/322 242/323 243/324\nf 203/325 202/326 234/327 235/328\nf 199/329 198/330 230/331 231/332\nf 195/333 194/334 226/335 227/336\nf 207/337 206/338 238/339 239/340\nf 224/341 223/309 255/312 256/342\nf 220/343 219/313 251/316 252/344\nf 216/345 215/317 247/320 248/346\nf 212/347 211/321 243/324 244/348\nf 208/349 207/337 239/340 240/350\nf 204/351 203/325 235/328 236/352\nf 200/353 199/329 231/332 232/354\nf 196/355 195/333 227/336 228/356\nf 193/357 224/341 256/342 225/358\nf 221/359 220/343 252/344 253/360\nf 217/361 216/345 248/346 249/362\nf 213/363 212/347 244/348 245/364\nf 209/365 208/349 240/350 241/366\nf 205/367 204/351 236/352 237/368\nf 201/369 200/353 232/354 233/370\nf 197/371 196/355 228/356 229/372\nf 222/310 221/359 253/360 254/311\nf 218/314 217/361 249/362 250/315\nf 214/318 213/363 245/364 246/319\nf 210/322 209/365 241/366 242/323\nf 198/330 197/371 229/372 230/331\nf 194/334 193/357 225/358 226/335\nf 206/338 205/367 237/368 238/339\nf 202/326 201/369 233/370 234/327\nf 151/221 150/373 214/374 215/222\nf 173/272 174/242 238/243 237/273\nf 134/245 133/244 197/247 198/246\nf 179/217 180/248 244/251 243/218\nf 157/255 156/373 220/374 221/256\nf 140/245 139/252 203/253 204/246\nf 178/375 179/217 243/218 242/376\nf 184/239 185/238 249/241 248/240\nf 139/252 138/258 202/259 203/253\nf 161/266 162/234 226/237 225/267\nf 167/377 168/224 232/227 231/378\nf 145/229 144/260 208/261 209/230\nf 189/379 190/216 254/219 253/380\nf 166/381 167/377 231/378 230/382\nf 172/381 173/272 237/273 236/382\nf 150/373 149/383 213/384 214/374\nf 156/373 155/221 219/222 220/374\nf 133/244 132/270 196/271 197/247\nf 177/266 178/375 242/376 241/267\nf 155/221 154/220 218/223 219/222\nf 183/268 184/239 248/240 247/269\nf 129/229 160/228 224/231 193/230\nf 138/258 137/278 201/279 202/259\nf 144/260 143/280 207/281 208/261\nf 182/274 183/268 247/269 246/275\nf 188/274 189/379 253/380 252/275\nf 165/272 166/381 230/382 229/273\nf 143/280 142/270 206/271 207/281\nf 149/383 148/254 212/257 213/384\nf 171/377 172/381 236/382 235/378\nf 132/270 131/280 195/281 196/271\nf 170/224 171/377 235/378 234/227\nf 283/385 284/386 348/387 347/388\nf 51/389 53/390 283/391 282/392\nf 43/393 45/390 279/391 278/394\nf 35/395 37/396 275/78 274/397\nf 11/398 13/399 263/400 262/401\nf 19/402 21/399 267/400 266/403\nf 3/404 5/405 259/406 258/407\nf 1/408 3/404 258/407 257/409\nf 27/410 29/405 271/406 270/411\nf 57/412 59/76 286/79 285/413\nf 49/414 51/389 282/392 281/415\nf 41/416 43/393 278/394 277/413\nf 33/408 35/395 274/397 273/409\nf 25/417 27/410 270/411 269/418\nf 9/417 11/398 262/401 261/418\nf 17/419 19/402 266/403 265/420\nf 63/421 1/408 257/409 288/397\nf 55/422 57/412 285/413 284/423\nf 47/424 49/414 281/415 280/392\nf 39/76 41/416 277/413 276/79\nf 31/404 33/408 273/409 272/407\nf 15/402 17/419 265/420 264/403\nf 23/398 25/417 269/418 268/401\nf 7/410 9/417 261/418 260/411\nf 61/77 63/421 288/397 287/78\nf 53/390 55/422 284/423 283/391\nf 45/390 47/424 280/392 279/391\nf 37/396 39/76 276/79 275/78\nf 21/399 23/398 268/401 267/400\nf 5/405 7/410 260/411 259/406\nf 29/405 31/404 272/407 271/406\nf 13/399 15/402 264/403 263/400\nf 317/425 318/426 478/427 477/428\nf 260/429 261/430 325/431 324/432\nf 261/430 262/433 326/434 325/431\nf 278/386 279/435 343/388 342/436\nf 272/437 273/438 337/439 336/440\nf 273/438 274/441 338/442 337/439\nf 267/443 268/433 332/434 331/444\nf 284/386 285/445 349/446 348/387\nf 285/445 286/447 350/448 349/446\nf 262/433 263/443 327/444 326/434\nf 279/435 280/449 344/450 343/388\nf 257/438 258/437 322/440 321/439\nf 274/441 275/451 339/452 338/442\nf 268/433 269/430 333/431 332/434\nf 269/430 270/429 334/432 333/431\nf 263/443 264/453 328/454 327/444\nf 286/447 287/451 351/452 350/448\nf 344/450 345/455 409/456 408/457\nf 345/455 346/450 410/457 409/456\nf 322/440 323/458 387/459 386/460\nf 339/452 340/461 404/462 403/463\nf 334/432 335/458 399/459 398/464\nf 328/454 329/465 393/466 392/467\nf 351/452 352/442 416/468 415/463\nf 329/465 330/454 394/467 393/466\nf 323/458 324/432 388/464 387/459\nf 346/450 347/388 411/469 410/457\nf 340/461 341/470 405/471 404/462\nf 341/470 342/436 406/472 405/471\nf 335/458 336/440 400/460 399/459\nf 352/442 321/439 385/473 416/468\nf 330/454 331/444 395/474 394/467\nf 324/432 325/431 389/475 388/464\nf 347/388 348/387 412/476 411/469\nf 266/453 267/443 331/444 330/454\nf 288/477 257/438 321/439 352/442\nf 271/478 272/437 336/440 335/458\nf 277/445 278/386 342/436 341/470\nf 276/447 277/445 341/470 340/461\nf 282/449 283/385 347/388 346/450\nf 259/478 260/429 324/432 323/458\nf 265/479 266/453 330/454 329/465\nf 287/451 288/477 352/442 351/452\nf 264/453 265/479 329/465 328/454\nf 270/429 271/478 335/458 334/432\nf 275/451 276/447 340/461 339/452\nf 258/437 259/478 323/458 322/440\nf 281/480 282/449 346/450 345/455\nf 280/449 281/480 345/455 344/450\nf 327/444 328/454 392/467 391/474\nf 350/448 351/452 415/463 414/481\nf 333/431 334/432 398/464 397/475\nf 332/434 333/431 397/475 396/482\nf 338/442 339/452 403/463 402/468\nf 321/439 322/440 386/460 385/473\nf 343/388 344/450 408/457 407/469\nf 349/446 350/448 414/481 413/483\nf 326/434 327/444 391/474 390/482\nf 348/387 349/446 413/483 412/476\nf 331/444 332/434 396/482 395/474\nf 337/439 338/442 402/468 401/473\nf 336/440 337/439 401/473 400/460\nf 342/436 343/388 407/469 406/472\nf 325/431 326/434 390/482 389/475\nf 449/484 450/485 451/486 452/487 453/488 454/489 455/490 456/491 457/492 458/493 459/494 460/495 461/496 462/497 463/498 464/499 465/500 466/501 467/502 468/503 469/504 470/505 471/506 472/507 473/508 474/509 475/510 476/511 477/428 478/427 479/512 480/513\nf 313/514 314/515 474/509 473/508\nf 309/516 310/517 470/505 469/504\nf 305/518 306/519 466/501 465/500\nf 301/520 302/521 462/497 461/496\nf 297/522 298/523 458/493 457/492\nf 293/524 294/525 454/489 453/488\nf 289/526 290/527 450/485 449/484\nf 318/426 319/528 479/512 478/427\nf 314/515 315/529 475/510 474/509\nf 310/517 311/530 471/506 470/505\nf 306/519 307/531 467/502 466/501\nf 302/521 303/532 463/498 462/497\nf 298/523 299/533 459/494 458/493\nf 294/525 295/534 455/490 454/489\nf 290/527 291/535 451/486 450/485\nf 319/528 320/536 480/513 479/512\nf 315/529 316/537 476/511 475/510\nf 311/530 312/538 472/507 471/506\nf 307/531 308/539 468/503 467/502\nf 291/535 292/540 452/487 451/486\nf 303/532 304/541 464/499 463/498\nf 299/533 300/542 460/495 459/494\nf 295/534 296/543 456/491 455/490\nf 320/536 289/526 449/484 480/513\nf 316/537 317/425 477/428 476/511\nf 312/538 313/514 473/508 472/507\nf 308/539 309/516 469/504 468/503\nf 296/543 297/522 457/492 456/491\nf 292/540 293/524 453/488 452/487\nf 304/541 305/518 465/500 464/499\nf 300/542 301/520 461/496 460/495\nf 482/544 481/545 512/546 511/547 510/147 509/146 508/548 507/549 506/550 505/551 504/552 503/553 502/554 501/555 500/556 499/557 498/558 497/559 496/560 495/561 494/562 493/563 492/564 491/565 490/566 489/567 488/568 487/569 486/570 485/571 484/572 483/573\nf 122/574 121/575 505/551 506/550\nf 118/576 117/577 501/555 502/554\nf 114/578 113/579 497/559 498/558\nf 110/580 109/581 493/563 494/562\nf 106/582 105/583 489/567 490/566\nf 102/584 101/585 485/571 486/570\nf 98/586 97/587 481/545 482/544\nf 127/588 126/144 510/147 511/547\nf 123/589 122/574 506/550 507/549\nf 119/590 118/576 502/554 503/553\nf 115/591 114/578 498/558 499/557\nf 99/592 98/586 482/544 483/573\nf 111/593 110/580 494/562 495/561\nf 107/594 106/582 490/566 491/565\nf 103/595 102/584 486/570 487/569\nf 128/596 127/588 511/547 512/546\nf 124/597 123/589 507/549 508/548\nf 120/598 119/590 503/553 504/552\nf 116/599 115/591 499/557 500/556\nf 104/600 103/595 487/569 488/568\nf 100/601 99/592 483/573 484/572\nf 112/602 111/593 495/561 496/560\nf 108/603 107/594 491/565 492/564\nf 97/587 128/596 512/546 481/545\nf 125/145 124/597 508/548 509/146\nf 121/575 120/598 504/552 505/551\nf 117/577 116/599 500/556 501/555\nf 109/581 108/603 492/564 493/563\nf 105/583 104/600 488/568 489/567\nf 101/585 100/601 484/572 485/571\nf 113/579 112/602 496/560 497/559\n";

  var mtlStr = "\n# Blender MTL File: 'coca-cola.blend'\n# Material Count: 2\n\nnewmtl coca-cola\nNs 96.078431\nKa 0.000000 0.000000 0.000000\nKd 0.640000 0.640000 0.640000\nKs 0.000000 0.000000 0.000000\nNi 1.000000\nd 1.000000\nillum 1\nmap_Kd https://img.alicdn.com/tfs/TB1AquIiC_I8KJjy0FoXXaFnVXa-512-512.jpg\n\nnewmtl coca-cola_coca-cola-zero\nNs 96.078431\nKa 0.000000 0.000000 0.000000\nKs 0.000000 0.000000 0.000000\nNi 1.000000\nd 1.000000\nillum 1\nmap_Kd https://img.alicdn.com/tfs/TB1AquIiC_I8KJjy0FoXXaFnVXa-512-512.jpg\n";

  return {
    obj: objStr,
    mtl: mtlStr
  };
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isWeex) ? _c('gcanvas', {
    ref: "canvas_holder",
    style: {
      width: _vm.width,
      height: _vm.height,
      backgroundColor: 'rgba(255,0,0,1)'
    }
  }) : _vm._e(), (!_vm.isWeex) ? _c('canvas', {
    ref: "canvas_holder",
    style: {
      width: _vm.width + 'px',
      height: _vm.height + 'px',
      backgroundColor: 'rgba(255,0,0,1)'
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);