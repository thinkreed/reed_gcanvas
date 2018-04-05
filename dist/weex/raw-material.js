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
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function clamp(min, max, v) {
    if (v < min) {
        return min;
    } else if (v > max) {
        return max;
    } else {
        return v;
    }
}

var isDragging = false;
var lx = null;
var ly = null;
var r = 0;
var camera = null;
var start = function start() {
    return isDragging = true;
};
var end = function end() {
    isDragging = false;
    lx = ly = null;
};
var move = function move(_ref) {
    var x = _ref.x,
        y = _ref.y;

    if (isDragging && camera) {
        if (lx === null) {
            lx = x;
            ly = y;
        } else {
            camera.alpha += (x - lx) / 5;
            camera.beta = clamp(-90, 90, camera.beta - (y - ly) / 5);
            lx = x;
            ly = y;
        }
    }
};

var controlArcRotateCamera = function controlArcRotateCamera(canvas, c) {
    camera = c;
};

function touchStart(e) {
    start();
}

function touchMove(e) {
    var event = e.changedTouches[0];
    move({ x: event.pageX, y: event.pageY });
}

function touchEnd(e) {
    end();
}

exports.controlArcRotateCamera = controlArcRotateCamera;
exports.touchStart = touchStart;
exports.touchMove = touchMove;
exports.touchEnd = touchEnd;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function main(G3D, _ref) {
    var canvas = _ref.canvas,
        requestAnimationFrame = _ref.requestAnimationFrame,
        controlArcRotateCamera = _ref.controlArcRotateCamera;

    var image = new G3D.Env.Image();
    image.crossOrigin = true;
    image.onload = function () {

        var engine = new G3D.Engine(canvas);

        var scene = new G3D.Scene(engine);

        var camera = new G3D.ArcRotateCamera(scene);
        camera.alpha = -35;
        camera.beta = -5;
        camera.radius = 20;

        controlArcRotateCamera(canvas, camera);

        var m1 = G3D.MeshBuilder.createGround(scene, 6, 6);
        m1.materials.default = new G3D.RawMaterial(m1);
        m1.materials.default.color.r = 100;
        m1.materials.default.color.g = 200;
        m1.materials.default.color.b = 100;
        m1.position.x = 5;
        m1.position.y = 5;

        var m2 = G3D.MeshBuilder.createGround(scene, 6);
        m2.materials.default = new G3D.RawMaterial(m2);
        m2.materials.default.texture.image = image;
        m2.materials.default.source = G3D.Material.TEXTURE;
        m2.position.x = -5;
        m2.position.y = 5;

        var m3 = G3D.MeshBuilder.createCube(scene, 4);
        m3.materials.default = new G3D.RawMaterial(m3);
        m3.materials.default.color.r = 100;
        m3.materials.default.color.g = 200;
        m3.materials.default.color.b = 100;
        m3.position.x = 5;
        m3.position.y = -5;

        var m4 = G3D.MeshBuilder.createCube(scene, 4);
        m4.materials.default = new G3D.RawMaterial(m4);
        m4.materials.default.texture.image = image;
        m4.materials.default.source = G3D.Material.TEXTURE;
        m4.position.x = -5;
        m4.position.y = -5;

        new G3D.MeshBuilder.createCoordinate(scene, 10);

        var last = Date.now();

        function render() {
            var now = Date.now();
            var d = now - last;
            last = now;
            m3.rotation.y += 0.2 * d;
            m4.rotation.y += 0.2 * d;
            scene.render();
            requestAnimationFrame(render);
        }
        render();
    };
    image.src = 'https://img.alicdn.com/tfs/TB1apiEb8HH8KJjy0FbXXcqlpXa-1024-1024.png';
}

exports.default = main;

/***/ }),
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
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(85)

/* template */
var __vue_template__ = __webpack_require__(86)
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
__vue_options__.__file = "/Users/huweijie/Documents/gcanvas_demo/src/weex/raw-material.vue"
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _g3d = __webpack_require__(22);

var _g3d2 = _interopRequireDefault(_g3d);

var _attachControl = __webpack_require__(26);

var _rawMaterialMain = __webpack_require__(27);

var _rawMaterialMain2 = _interopRequireDefault(_rawMaterialMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
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

_g3d2.default.Env.Image = isWeex ? GImage : Image;
_g3d2.default.Env.manuallyFlipY = isWeex;
_g3d2.default.Env.framebufferNotReady = isWeex;

function start(ref, size) {
  if (isWeex) {
    ref.width = size.width;
    ref.height = size.height;
  }

  (0, _rawMaterialMain2.default)(_g3d2.default, {
    canvas: ref,
    requestAnimationFrame: setTimeout,
    controlArcRotateCamera: _attachControl.controlArcRotateCamera
  });
}

exports.default = {
  data: function data() {
    return {
      isWeex: isWeex,
      touchStart: _attachControl.touchStart,
      touchMove: _attachControl.touchMove,
      touchEnd: _attachControl.touchEnd
    };
  },


  mounted: function mounted() {
    var ref = this.$refs.canvas_holder;

    var size = isWeex ? {
      width: 750,
      height: 750
    } : {
      width: parseInt(ref.style.width),
      height: parseInt(ref.style.height)
    };
    if (!isWeex) {
      ref.width = size.width;
      ref.height = size.height;
    }

    if (isWeex) {
      ref = enable(ref, { debug: true, bridge: WeexBridge });
    }

    start(ref, size);
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isWeex) ? _c('gcanvas', {
    ref: "canvas_holder",
    staticStyle: {
      width: "750",
      height: "750"
    },
    on: {
      "touchstart": _vm.touchStart,
      "touchmove": _vm.touchMove,
      "touchend": _vm.touchEnd
    }
  }) : _vm._e(), (!_vm.isWeex) ? _c('canvas', {
    ref: "canvas_holder",
    staticStyle: {
      width: "750px",
      height: "750px"
    },
    on: {
      "touchstart": _vm.touchStart,
      "touchmove": _vm.touchMove,
      "touchend": _vm.touchEnd
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);