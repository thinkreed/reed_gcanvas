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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
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
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var isNative = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object';

var isFn = function isFn(fn) {
	return typeof fn === 'function';
};

var isPhone = function isPhone(str) {
	if (typeof str === 'number') {
		str = str.toString();
	} else if (typeof str !== 'string') {
		return false;
	}

	return (/^\+?[\d\-\#\*\.\(\)]+$/.test(str)
	);
};

var isEmail = function isEmail(str) {
	if (typeof str !== 'string') {
		return false;
	}

	return (/^(\w)+([\.\-\_]\w+)*@(\w)+(([\.\-\_]\w+)+)$/.test(str)
	);
};

module.exports = {
	isNative: isNative,
	isFn: isFn,
	isPhone: isPhone,
	isEmail: isEmail
};

/***/ }),
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(48)
)

/* script */
__vue_exports__ = __webpack_require__(49)

/* template */
var __vue_template__ = __webpack_require__(76)
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
__vue_options__.__file = "/Users/huweijie/Documents/gcanvas_demo/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-20f52981"
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
/* 48 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _natjs = __webpack_require__(50);

var _natjs2 = _interopRequireDefault(_natjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

var isWeex = weex.config.env.platform !== 'Web';

var _require = __webpack_require__(1),
    enable = _require.enable,
    WeexBridge = _require.WeexBridge,
    GImage = _require.Image;

var EnvImage = !isWeex ? Image : GImage;
var modal = weex.requireModule('modal');

var lastX = 0;
var lastY = 0;
var dx = 0;
var dy = 0;

exports.default = {
  data: function data() {
    return {
      isWeex: isWeex ? 1 : 0
    };
  },

  methods: {
    touchMove: function touchMove(e) {
      dx = e.changedTouches[0].screenX - lastX + dx;
      dy = e.changedTouches[0].screenY - lastY + dy;
    },
    touchStart: function touchStart(e) {
      lastX = e.changedTouches[0].screenX;
      lastY = e.changedTouches[0].screenY;
    },
    touchEnd: function touchEnd(e) {
      lastX = 0;
      lastY = 0;
    }
  },
  mounted: function mounted() {
    // init
    var ref = this.$refs.canvas_holder;
    if (isWeex) {
      ref = enable(ref, {
        bridge: WeexBridge
      });
    }
    var ctx = ref.getContext('2d');

    var soundLock = false;

    // Background image
    var bgReady = false;
    var bgImage = new EnvImage();
    bgImage.onload = function () {
      bgReady = true;
    };
    bgImage.src = "file:///sdcard/Documents/img/background.png";

    // Hero image
    var heroReady = false;
    var heroImage = new EnvImage();
    heroImage.onload = function () {
      heroReady = true;
    };
    heroImage.src = "file:///sdcard/Documents/img/hero.png";

    // Monster image
    var monsterReady = false;
    var monsterImage = new EnvImage();
    monsterImage.onload = function () {
      monsterReady = true;
    };
    monsterImage.src = "file:///sdcard/Documents/img/monster.png";

    var margin = 64;
    var cylinderRadius = 32;
    var leftBound = margin;
    var rightBound = ref.width - margin;
    var topBound = margin;
    var bottomBound = ref.width - margin;

    // Game objects
    var hero = {
      speed: 10 // movement in pixels per second
    };
    var monster = {
      speed: 200
    };
    var monstersCaught = 0;

    // Reset the game when the player catches a monster
    var reset = function reset() {
      lastX = 0;
      lastY = 0;
      dx = 0;
      dy = 0;
      hero.x = ref.width / 2;
      hero.y = ref.height / 2;

      // Throw the monster somewhere on the screen randomly
      monster.x = cylinderRadius + Math.random() * (ref.width - margin * 2);
      monster.y = cylinderRadius + Math.random() * (ref.height - margin * 2);
      monster.dx = getRandom(-1, 1) * monster.speed / 60;
      monster.dy = getRandom(-1, 1) * monster.speed / 60;
    };

    var getRandom = function getRandom(minimum, maximum) {
      var num;
      var maxEx = maximum + 2;
      do {
        num = Math.random() * (maxEx - minimum) + minimum;
        num -= 1;
      } while (num < minimum || num > maximum);

      return num;
    };

    var renderHero = function renderHero(modifier) {
      if (leftBound < monster.x + monster.dx && rightBound > monster.x + monster.dx) {
        monster.x += monster.dx;
      } else {
        monster.dx = getRandom(-1, 1) * monster.speed / 60;
      }
      if (topBound < monster.y + monster.dy && bottomBound > monster.y + monster.dy) {
        monster.y += monster.dy;
      } else {
        monster.dy = getRandom(-1, 1) * monster.speed / 60;
      }
    };

    var renderMonster = function renderMonster(modifier) {
      var deltaX = dx / hero.speed * modifier;
      if (leftBound < hero.x + deltaX && rightBound > hero.x + deltaX) {
        hero.x += deltaX;
      }
      var deltaY = dy / hero.speed * modifier;
      if (topBound < hero.y + deltaY && bottomBound > hero.y + deltaY) {
        hero.y += deltaY;
      }
    };

    // Update game objects
    var update = function update(modifier) {

      renderMonster(modifier);
      renderHero(modifier);

      dx = 0;
      dy = 0;

      // Are they touching?
      if (hero.x <= monster.x + cylinderRadius && monster.x <= hero.x + cylinderRadius && hero.y <= monster.y + cylinderRadius && monster.y <= hero.y + cylinderRadius) {
        ++monstersCaught;
        reset();
      }
    };

    var music = function music(url, isRepeat) {
      if (soundLock) return;
      _natjs2.default && _natjs2.default.audio.stop();
      _natjs2.default && _natjs2.default.audio.play(url);
      if (isRepeat) {
        soundLock = true;
        setTimeout(function () {
          soundLock = false;
          music(url, isRepeat);
        }, 29000);
      }
    };

    // Draw everything
    var render = function render() {

      ctx.clearRect(0, 0, 750, 750);

      if (bgReady) {
        ctx.drawImage(bgImage, 0, 0, 750, 750);
      }

      if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
      }

      if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
      }

      // Score
      ctx.fillStyle = "rgb(250, 250, 250)";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
    };

    // The main game loop
    var main = function main() {
      var now = new Date().getTime();
      var delta = now - then;

      update(delta / 1000);
      render();

      then = now;
    };

    // Let's play this game!
    var then = new Date().getTime();
    reset();
    music('http://cdn.instapp.io/nat/samples/audio.mp3', true);
    setInterval(main, 16);
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Nat = {};

if (weex && weex.requireModule || typeof __weex_define__ === 'function') {
	var camera = __webpack_require__(51);
	var communication = __webpack_require__(52);
	var geolocation = __webpack_require__(53);
	var media = __webpack_require__(54);
	var modal = __webpack_require__(58);
	var recorder = __webpack_require__(59);
	var network = __webpack_require__(60);
	var sensor = __webpack_require__(63);
	var device = __webpack_require__(66);
	var Navigator = __webpack_require__(73);
	var alipay = __webpack_require__(74);
	var wechat = __webpack_require__(75);

	// camera
	if (camera) {
		Nat.camera = camera;
	}

	// communication
	if (communication) {
		Nat.call = communication.call;
		Nat.sms = communication.sms;
		Nat.mail = communication.mail;
	}

	// geolocation
	if (geolocation) {
		Nat.geolocation = geolocation;
	}

	// media
	if (media) {
		Nat.audio = media.audio;
		Nat.image = media.image;
		Nat.video = media.video;
	}

	// recorder
	if (recorder) {
		Nat.recorder = recorder;
	}

	// modal
	if (modal) {
		Nat.alert = modal.alert;
		Nat.confirm = modal.confirm;
		Nat.prompt = modal.prompt;
		Nat.toast = modal.toast;
		Nat.actionSheet = modal.actionSheet;
	}

	// network
	if (network) {
		Nat.fetch = network.stream.fetch;
		Nat.download = network.transfer.download;
		Nat.upload = network.transfer.upload;
		Nat.websocket = network.websocket;
	}

	// sensor
	if (sensor) {
		Nat.accelerometer = sensor.accelerometer;
		Nat.compass = sensor.compass;
	}

	// device
	if (device) {
		Nat.device = device.info;
		Nat.battery = device.battery;
		Nat.network = device.network;
		Nat.screen = device.screen;
		Nat.vibrate = device.vibration.vibrate;
		Nat.volume = device.volume;
	}

	// navigator
	if (Navigator) {
		Nat.navigator = Navigator;
	}

	// alipay
	if (alipay) {
		Nat.alipay = alipay;
	}

	// wechat
	if (wechat) {
		Nat.wechat = wechat;
	}
}

module.exports = Nat;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camera = void 0;

if (weex && weex.requireModule) {
	camera = weex.requireModule('nat/camera');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		camera = __weex_require__('@weex-module/nat/camera');
	});
}

// launch

var launch = function launch(opts) {
	camera.launch();
};

// captureImage (snap)

var captureImage = function captureImage(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureImage({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// captureVideo (record)

var captureVideo = function captureVideo(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		camera.captureVideo({
			width: opts.width || null,
			height: opts.height || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	launch: launch,
	captureImage: captureImage,
	captureVideo: captureVideo
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(25);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var communication = void 0;

if (weex && weex.requireModule) {
	communication = weex.requireModule('nat/communication');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		communication = __weex_require__('@weex-module/nat/communication');
	});
}

// call

var call = function call(to, cb) {
	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 101040,
				message: 'CALL_MISSING_ARGUMENT'
			});
			return;
		} else if (!_utils2.default.isPhone(to)) {
			reject({
				code: 101050,
				message: 'CALL_INVALID_ARGUMENT',
				details: 'Invalid phone number: ' + to
			});
			return;
		}

		communication.call(to, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// sms

var sms = function sms(to, text, cb) {
	text = text || '';

	if (typeof text === 'function') {
		cb = text;
		text = '';
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 102040,
				message: 'SMS_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isPhone(to[i])) {
				reject({
					code: 102050,
					message: 'SMS_INVALID_ARGUMENT'
				});
				return;
			}
		}

		communication.sms(to, text, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// mail

var mail = function mail(to, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!to) {
			reject({
				code: 103040,
				message: 'MAIL_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof to === 'string') {
			to = [to];
		}

		for (var i = 0; i < to.length; i++) {
			if (!_utils2.default.isEmail(to[i])) {
				reject({
					code: 103050,
					message: 'MAIL_INVALID_ARGUMENT',
					details: 'Invalid emaill address: ' + to[i]
				});
				return;
			}
		}

		communication.mail(to, {
			subject: opts.subject || '',
			body: opts.body || '',
			attachments: opts.attachments || null
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	call: call,
	sms: sms,
	mail: mail
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var geolocation = void 0;

if (weex && weex.requireModule) {
	geolocation = weex.requireModule('nat/geolocation');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		geolocation = __weex_require__('@weex-module/nat/geolocation');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		geolocation.watch({
			maximumAge: opts.maximumAge || 0,
			timeout: opts.timeout || 10000,
			model: opts.model || 'highAccuracy'
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		geolocation.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _audio = __webpack_require__(55);

var _audio2 = _interopRequireDefault(_audio);

var _image = __webpack_require__(56);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(57);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	audio: _audio2.default,
	image: _image2.default,
	video: _video2.default
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var audio = void 0;

if (weex && weex.requireModule) {
	audio = weex.requireModule('nat/media/audio');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		audio = __weex_require__('@weex-module/nat/media/audio');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		audio.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		audio.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		audio.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var image = void 0;

if (weex && weex.requireModule) {
	image = weex.requireModule('nat/media/image');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		image = __weex_require__('@weex-module/nat/media/image');
	});
}

// pick
var pick = function pick(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	opts.limit = opts.limit || 1;
	opts.quality = opts.quality && opts.quality < 100 ? parseInt(opts.quality) : 100;

	return new Promise(function (resolve, reject) {
		image.pick({
			limit: opts.limit,
			quality: opts.quality,
			width: opts.width || null,
			height: opts.height || null,
			showCamera: opts.showCamera || false
		}, function (ret) {
			if (ret === null) {
				return;
			}

			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// preview

var preview = function preview(files, opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		if (!files) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof files === 'string') {
			files = [files];
		}

		// style
		if (['dots', 'label', 'none'].indexOf(opts.style) < 0) {
			opts.style = 'dots';
		}

		if (opts.style === 'dots') {
			if (files.length > 9) {
				opts.style = 'label';
			} else if (files.length === 1) {
				opts.style = 'none';
			}
		}

		image.preview(files, {
			current: opts.current,
			style: opts.style
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// info

var info = function info(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.info(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// exif

var exif = function exif(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		image.exif(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pick: pick,
	preview: preview,
	info: info,
	exif: exif
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var video = void 0;

if (weex && weex.requireModule) {
	video = weex.requireModule('nat/media/video');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		video = __weex_require__('@weex-module/nat/media/video');
	});
}

// play
var play = function play(path, cb) {
	return new Promise(function (resolve, reject) {
		if (!path) {
			reject({
				code: 110040,
				message: 'MEDIA_MISSING_ARGUMENT'
			});
			return;
		}

		video.play(path, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		video.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		video.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

module.exports = {
	play: play,
	pause: pause,
	stop: stop
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _utils = __webpack_require__(25);

var modal = void 0;

if (weex && weex.requireModule) {
	modal = weex.requireModule('nat/modal');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		modal = __weex_require__('@weex-module/nat/modal');
	});
}
// alert

var Alert = function Alert(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.alert({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK'
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		} else {
			window.alert(opts.message);
			resolve();
		}
	});
};

// confirm

var Confirm = function Confirm(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.confirm({
				title: opts.title || '',
				message: opts.message || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				if (typeof ret === 'undefined') {
					ret = {
						error: 'unknow error, please report to natjs team'
					};
				}

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var c = window.confirm(opts.message);
			resolve(c);
		}
	});
};

// prompt

var Prompt = function Prompt(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		if (_utils.isNative) {
			modal.prompt({
				title: opts.title || '',
				message: opts.message || '',
				text: opts.text || '',
				okButton: opts.okButton || 'OK',
				cancelButton: opts.cancelButton || 'Cancel'
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var p = window.prompt(opts.message || '', opts.text || '');

			resolve({
				result: p && p.length,
				data: p
			});
		}
	});
};

// toast

var Toast = function Toast(opts, cb) {
	return new Promise(function (resolve, reject) {
		if (typeof opts === 'string') {
			opts = {
				message: opts
			};
		}

		opts = opts || {};

		// position
		if (['top', 'middle', 'bottom'].indexOf(opts.position) < 0) {
			opts.position = 'bottom';
		}

		if (_utils.isNative) {
			modal.toast({
				message: opts.message || '',
				duration: opts.duration || 3000,
				position: opts.position
			}, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve();
					if (typeof cb === 'function') cb(null);
				}
			});
		} else {
			window.alert(opts.message);
			resolve();
		}
	});
};

var actionSheet = {
	show: function show(opts, cb) {
		return new Promise(function (resolve, reject) {
			opts = opts || {};

			if (!Array.isArray(opts.options) || !opts.options.length) {
				reject({
					code: 145050,
					message: 'ACTIONSHEET_INVALID_ARGUMENT'
				});
				return;
			}

			var options = opts.options.map(function (item) {
				if (['string', 'number'].includes(typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
					return {
						title: item
					};
				}
				return item;
			});

			if (_utils.isNative) {
				modal.showActionSheet({
					title: opts.title,
					options: options
				}, function (ret) {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				});
			} else {
				resolve();
			}
		});
	}
};

module.exports = {
	alert: Alert,
	confirm: Confirm,
	prompt: Prompt,
	toast: Toast,
	actionSheet: actionSheet
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var recorder = void 0;

if (weex && weex.requireModule) {
	recorder = weex.requireModule('nat/recorder');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		recorder = __weex_require__('@weex-module/nat/recorder');
	});
}

// start
var start = function start(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		// channel
		if (['stereo', 'mono'].indexOf(opts.channel) < 0) {
			opts.channel = 'stereo';
		}

		// quality
		if (['low', 'standard', 'high'].indexOf(opts.quality) < 0) {
			opts.quality = 'standard';
		}

		recorder.start({
			channel: opts.channel,
			quality: opts.quality
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// pause

var pause = function pause(cb) {
	return new Promise(function (resolve, reject) {
		recorder.pause(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve();
				if (typeof cb === 'function') cb(null);
			}
		});
	});
};

// stop

var stop = function stop(cb) {
	return new Promise(function (resolve, reject) {
		recorder.stop(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	start: start,
	pause: pause,
	stop: stop
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stream = __webpack_require__(61);

var _stream2 = _interopRequireDefault(_stream);

var _transfer = __webpack_require__(62);

var _transfer2 = _interopRequireDefault(_transfer);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

// import websocket from './websocket'
// import info from './info'

module.exports = {
	stream: _stream2.default,
	transfer: _transfer2.default
	// websocket,
	// info
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _utils = __webpack_require__(25);

var stream = void 0;

if (weex && weex.requireModule) {
	stream = weex.requireModule('nat/stream');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		stream = __weex_require__('@weex-module/nat/stream');
	});
}

// fetch

var Fetch = function Fetch(url, opts, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'FETCH_MISSING_ARGUMENT'
			});
			return;
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			cb = opts;
			opts = url;
		} else if (typeof opts === 'function') {
			cb = opts;
			opts = {
				url: url
			};
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// headers
		opts.headers = opts.headers || {};

		if (opts.headers['Content-Type'] && /application\/json/.test(opts.headers['Content-Type'])) {
			opts.type = 'json';
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'GET';

		if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		// type
		opts.type = opts.type ? opts.type.toLowerCase() : 'json';

		if (['json', 'jsonp', 'text'].indexOf(opts.type) < 0) {
			reject({
				code: 151050,
				message: 'FETCH_INVALID_ARGUMENT',
				details: 'Unsupported request type'
			});
			return;
		}

		// body
		if (_typeof(opts.body) === 'object') {
			if (opts.type === 'json' && opts.method !== 'GET') {
				opts.body = JSON.stringify(opts.body);
			} else {
				reject({
					code: 151050,
					message: 'FETCH_INVALID_ARGUMENT',
					details: 'Request body must be a string'
				});
				return;
			}
		}

		opts = {
			method: opts.method,
			url: opts.url,
			headers: opts.headers,
			type: opts.type,
			body: opts.body
		};

		if (_utils.isNative) {
			stream.fetch(opts, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					if (ret.ok && typeof ret.data === 'string') {
						switch (opts.type) {
							case 'json':
								ret.data = JSON.parse(ret.data);
								break;

							case 'jsonp':
								{
									var matched = ret.data.match(/^\s*?.*\((.*)\)\s*?$/);
									if (matched) {
										ret.data = JSON.parse(matched[1]);
									}
									break;
								}
						}
					}
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		} else {
			var _url = opts.url;
			delete opts.url;

			var _res = {};

			window.fetch(_url, opts).then(function (res) {
				_res = res;

				if (res.ok) {
					if (res.status === 204) {
						return null;
					} else {
						if (opts.type === 'json') {
							return res.json();
						} else {
							return res.text();
						}
					}
				} else {
					throw new Error(res.statusText);
				}
			}).then(function (data) {
				if (opts.type === 'jsonp') {
					var matched = data.match(/^\s*?.*\((.*)\)\s*?$/);
					if (matched) {
						data = JSON.parse(matched[1]);
					}
				}

				resolve({
					data: data,
					headers: _res.headers,
					ok: _res.ok,
					redirected: _res.redirected,
					status: _res.status,
					statusText: _res.statusText
				});
			}).catch(function (e) {
				reject(e);
				if (typeof cb === 'function') cb(e, null);
			});
		}
	});
};

module.exports = {
	fetch: Fetch
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var transfer = void 0;

if (weex && weex.requireModule) {
	transfer = weex.requireModule('nat/transfer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		transfer = __weex_require__('@weex-module/nat/transfer');
	});
}

// download

var download = function download(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'DOWNLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		transfer.download({
			url: opts.url,
			headers: opts.headers || {},
			target: opts.target
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// upload

var upload = function upload(url, opts, hooks, cb) {
	return new Promise(function (resolve, reject) {
		if (!url) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		if (typeof opts === 'function') {
			cb = opts;
		} else if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
			if (typeof hooks === 'function') {
				cb = hooks;
			}
			// todo
			if (typeof opts.onProgress === 'function') {
				hooks = opts;
			}
		}

		if ((typeof url === 'undefined' ? 'undefined' : _typeof(url)) === 'object') {
			opts = url;
		} else {
			opts = opts || {};
			opts.url = url;
		}

		// hooks
		hooks = hooks || {};

		// path
		if (!opts.path) {
			reject({
				code: 151040,
				message: 'UPLOAD_MISSING_ARGUMENT'
			});
			return;
		}

		// method
		opts.method = opts.method ? opts.method.toUpperCase() : 'POST';

		if (['POST', 'PUT', 'PATCH'].indexOf(opts.method) < 0) {
			reject({
				code: 151050,
				message: 'UPLOAD_INVALID_ARGUMENT',
				details: 'Unsupported request method'
			});
			return;
		}

		transfer.upload({
			url: opts.url,
			method: opts.method,
			path: opts.path,
			name: opts.name,
			headers: opts.headers || {},
			formData: opts.formData || {},
			mimeType: opts.mimeType
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else if (ret.progress) {
				if (typeof hooks.onProgress === 'function') {
					hooks.onProgress(ret.progress);
				}
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	download: download,
	upload: upload
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _accelerometer = __webpack_require__(64);

var _accelerometer2 = _interopRequireDefault(_accelerometer);

var _compass = __webpack_require__(65);

var _compass2 = _interopRequireDefault(_compass);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	accelerometer: _accelerometer2.default,
	compass: _compass2.default
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var accelerometer = void 0;

if (weex && weex.requireModule) {
	accelerometer = weex.requireModule('nat/sensor/accelerometer');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		accelerometer = __weex_require__('@weex-module/nat/sensor/accelerometer');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		accelerometer.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		accelerometer.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compass = void 0;

if (weex && weex.requireModule) {
	compass = weex.requireModule('nat/sensor/compass');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		compass = __weex_require__('@weex-module/nat/sensor/compass');
	});
}

// get
var get = function get(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// watch

var watch = function watch(opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	return new Promise(function (resolve, reject) {
		compass.watch({
			interval: opts.interval || 32
		}, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// clear watch

var clearWatch = function clearWatch(cb) {
	return new Promise(function (resolve, reject) {
		compass.clearWatch(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	watch: watch,
	clearWatch: clearWatch
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _info = __webpack_require__(67);

var _info2 = _interopRequireDefault(_info);

var _battery = __webpack_require__(68);

var _battery2 = _interopRequireDefault(_battery);

var _network = __webpack_require__(69);

var _network2 = _interopRequireDefault(_network);

var _screen = __webpack_require__(70);

var _screen2 = _interopRequireDefault(_screen);

var _vibration = __webpack_require__(71);

var _vibration2 = _interopRequireDefault(_vibration);

var _volume = __webpack_require__(72);

var _volume2 = _interopRequireDefault(_volume);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
	info: _info2.default,
	battery: _battery2.default,
	network: _network2.default,
	screen: _screen2.default,
	vibration: _vibration2.default,
	volume: _volume2.default
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var device = void 0;

if (weex && weex.requireModule) {
	device = weex.requireModule('nat/device/info');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		device = __weex_require__('@weex-module/nat/device/info');
	});
}

// info

var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		device.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	info: info
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var battery = void 0;

if (weex && weex.requireModule) {
	battery = weex.requireModule('nat/device/battery');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		battery = __weex_require__('@weex-module/nat/device/battery');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		battery.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var network = void 0;

if (weex && weex.requireModule) {
	network = weex.requireModule('nat/device/network');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		network = __weex_require__('@weex-module/nat/device/network');
	});
}

// status

var status = function status(cb) {
	return new Promise(function (resolve, reject) {
		network.status(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	status: status
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var screen = void 0;

if (weex && weex.requireModule) {
	screen = weex.requireModule('nat/device/screen');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		screen = __weex_require__('@weex-module/nat/device/screen');
	});
}

// brightness

var brightness = {
	get: function get(cb) {
		return new Promise(function (resolve, reject) {
			screen.getBrightness(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	set: function set(brightness, cb) {
		return new Promise(function (resolve, reject) {
			screen.setBrightness(brightness, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// orientation

};var orientation = {
	status: function status(cb) {
		return new Promise(function (resolve, reject) {
			screen.getOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	lock: function lock(orientation, cb) {
		if (typeof orientation === 'function') {
			cb = orientation;
			orientation = {};
		}

		// orientation
		if (['portrait-primary', 'portrait-secondary', 'landscape-primary', 'landscape-secondary', 'portrait', // either portrait-primary or portrait-secondary.
		'landscape', // either landscape-primary or landscape-secondary.
		'any' // All orientations are supported (unlocked orientation)
		].indexOf(orientation) < 0) {
			orientation = 'any';
		}

		return new Promise(function (resolve, reject) {
			screen.lockOrientation(orientation, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	unlock: function unlock(cb) {
		return new Promise(function (resolve, reject) {
			screen.unlockOrientation(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}

	// info

};var info = function info(cb) {
	return new Promise(function (resolve, reject) {
		screen.info(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	brightness: brightness,
	orientation: orientation,
	info: info
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vibration = void 0;

if (weex && weex.requireModule) {
	vibration = weex.requireModule('nat/device/vibration');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		vibration = __weex_require__('@weex-module/nat/device/vibration');
	});
}

// vibrate

var vibrate = function vibrate(time, cb) {
	if (typeof time === 'function') {
		cb = time;
		time = {};
	}

	return new Promise(function (resolve, reject) {
		vibration.vibrate(time || 500, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	vibrate: vibrate
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var volume = void 0;

if (weex && weex.requireModule) {
	volume = weex.requireModule('nat/device/volume');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		volume = __weex_require__('@weex-module/nat/device/volume');
	});
}

// get

var get = function get(cb) {
	return new Promise(function (resolve, reject) {
		volume.get(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// set

var set = function set(vol, cb) {
	return new Promise(function (resolve, reject) {
		volume.set(vol, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	get: get,
	set: set
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navigator = void 0;

if (weex && weex.requireModule) {
	navigator = weex.requireModule('nat/navigator');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		navigator = __weex_require__('@weex-module/nat/navigator');
	});
}

// push

var push = function push(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			url: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.push(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// pop
var pop = function pop(opts, cb) {
	return new Promise(function (resolve, reject) {
		navigator.pop(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// popToRoot
var popToRoot = function popToRoot(opts, cb) {
	opts = opts || {
		animated: true
	};

	if (typeof opts === 'function') {
		cb = opts;
		opts = {
			animated: true
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.popToRoot(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setTitle
var setTitle = function setTitle(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			title: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setTitle(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setColor
var setColor = function setColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			color: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setBackgroundColor
var setBackgroundColor = function setBackgroundColor(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string') {
		opts = {
			backgroundColor: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setBackgroundColor(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// setFontSize
var setFontSize = function setFontSize(opts, cb) {
	opts = opts || {};

	if (typeof opts === 'string' || typeof opts === 'number') {
		opts = {
			fontSize: opts
		};
	}

	return new Promise(function (resolve, reject) {
		navigator.setFontSize(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// init
var init = function init(opts, cb) {
	opts = opts || {};

	return new Promise(function (resolve, reject) {
		navigator.init(opts, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// hide
var hide = function hide(cb) {
	return new Promise(function (resolve, reject) {
		navigator.hide(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// show
var show = function show(cb) {
	return new Promise(function (resolve, reject) {
		navigator.show(function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	push: push,
	pop: pop,
	popToRoot: popToRoot,
	setTitle: setTitle,
	setColor: setColor,
	setBackgroundColor: setBackgroundColor,
	setFontSize: setFontSize,
	init: init,
	hide: hide,
	show: show
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alipay = void 0;

if (weex && weex.requireModule) {
	alipay = weex.requireModule('nat/alipay');
} else if (typeof __weex_define__ === 'function') {
	__weex_define__('@weex-temp/x', function (__weex_require__) {
		alipay = __weex_require__('@weex-module/nat/alipay');
	});
}

// pay

var pay = function pay(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.pay(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				switch (ret.error.code) {
					case '8000':
						ret.error.msg = '正在处理中，支付结果未知';
						break;

					case '4000':
						ret.error.msg = '订单支付失败';
						break;

					case '5000':
						ret.error.msg = '重复请求';
						break;

					case '6001':
						ret.error.msg = '用户中途取消';
						break;

					case '6002':
						ret.error.msg = '网络连接出错';
						break;

					case '6004':
						ret.error.msg = '支付结果未知';
						break;
				}
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

// auth

var auth = function auth(params, cb) {
	return new Promise(function (resolve, reject) {
		if (!params) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT'
			});
			return;
		}

		params = params || {};

		if (!params.info) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.info] is required'
			});
			return;
		}

		if (!params.scheme) {
			reject({
				code: 201040,
				message: 'PAY_MISSING_ARGUMENT',
				details: '[params.scheme] is required'
			});
			return;
		}

		alipay.auth(params, function (ret) {
			ret = ret || {};

			if (ret.error) {
				reject(ret.error);
				if (typeof cb === 'function') cb(ret.error, null);
			} else {
				resolve(ret);
				if (typeof cb === 'function') cb(null, ret);
			}
		});
	});
};

module.exports = {
	pay: pay,
	auth: auth
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SHARE_TYPES = {
	'app': 1,
	'emotion': 2,
	'file': 3,
	'image': 4,
	'music': 5,
	'video': 6,
	'webpage': 7,
	'link': 7,
	'mini-program': 8
};

var SCENE_TYPES = {
	'session': 0,
	'timeline': 1,
	'favorite': 2
};

var __c = void 0;

var wechat = {
	get wechatModule() {
		if (__c) {
			return __c;
		} else if (weex && weex.requireModule) {
			__c = weex.requireModule('nat/wechat');
			return __c;
		}
	},

	// init
	init: function init(appId, cb) {
		var _this = this;

		return new Promise(function (resolve, reject) {
			if (!appId) {
				reject({
					code: 301040,
					message: 'MISSING_ARGUMENT',
					details: 'appId is required'
				});
				return;
			}

			_this.wechatModule.init(appId, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	// checkInstalled
	checkInstalled: function checkInstalled(cb) {
		var _this2 = this;

		return new Promise(function (resolve, reject) {
			_this2.wechatModule.checkInstalled(function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	/**
 	share
 		@params
 	- content
 		- title
 		- description (desc)
 		- type
 		- filePath
 		- thumbUrl
 		- dataUrl
 		- link
 	- scene
  */
	share: function share(params, cb) {
		var _this3 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'SHARE_MISSING_ARGUMENT'
				});
				return;
			}

			params = params || {};

			if (typeof params.scene === 'string') {
				params.scene = SCENE_TYPES[params.scene] || 0;
			} else {
				params.scene = params.scene || 0;
			}

			if (typeof params.content === 'string') {
				params.text = params.content;
				delete params.content;
			} else {
				var type = 0;
				params.content = params.content || {};

				if (!params.content.description && params.content.desc) {
					params.content.description = params.content.desc;
				}

				if (typeof params.content.type === 'string') {
					type = SHARE_TYPES[params.content.type];
					params.content.type = type;

					if (!type) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'unsupported share content type'
						});
						return;
					}
				}

				// app & file
				// filePath: local only
				if ([1, 3].includes(type) && !params.content.filePath) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.filePath is required'
					});
					return;
				}
				// emotion & image & music & video
				else if ([2, 4, 5, 6].includes(type) && !params.content.dataUrl) {
						reject({
							code: 301041,
							message: 'SHARE_ARGUMENT_ERROR',
							details: 'content.dataUrl is required'
						});
						return;
					}

				// add link (music & webpage)
				if ([5, 7].includes(type) && !params.content.link) {
					reject({
						code: 301041,
						message: 'SHARE_ARGUMENT_ERROR',
						details: 'content.link is required'
					});
					return;
				}
			}

			_this3.wechatModule.share(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	// pay
	pay: function pay(params, cb) {
		var _this4 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				});
				return;
			}

			// if (!params.appid) {
			// 	reject({
			// 		code: 301040,
			// 		message: 'PAY_MISSING_ARGUMENT',
			// 		details: '[params.appid] is required'
			// 	})
			// 	return
			// }

			_this4.wechatModule.pay(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	},

	// auth
	auth: function auth(params, cb) {
		var _this5 = this;

		return new Promise(function (resolve, reject) {
			if (!params) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT'
				});
				return;
			}

			params = params || {};

			if (!params.info) {
				reject({
					code: 301040,
					message: 'PAY_MISSING_ARGUMENT',
					details: '[params.info] is required'
				});
				return;
			}

			_this5.wechatModule.auth(params, function (ret) {
				ret = ret || {};

				if (ret.error) {
					reject(ret.error);
					if (typeof cb === 'function') cb(ret.error, null);
				} else {
					delete ret.status;
					resolve(ret);
					if (typeof cb === 'function') cb(null, ret);
				}
			});
		});
	}
};

module.exports = wechat;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "touchstart": _vm.touchStart,
      "touchmove": _vm.touchMove
    }
  }, [(_vm.isWeex) ? _c('gcanvas', {
    ref: "canvas_holder",
    staticClass: ["canvas"],
    staticStyle: {
      width: "750",
      height: "750"
    }
  }) : _vm._e(), (!_vm.isWeex) ? _c('canvas', {
    ref: "canvas_holder",
    staticStyle: {
      width: "750px",
      height: "1000px"
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);