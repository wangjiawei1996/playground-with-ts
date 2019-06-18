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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/core/checker.js":
/*!****************************!*\
  !*** ./js/core/checker.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 检查数独

function checkArray(array) {
    var length = array.length;
    var marks = new Array(length);
    marks.fill(true);
    for (var i = 0; i < length - 1; i++) {
        if (!marks[i]) {
            continue;
        }
        var v = array[i];
        // 是否有效 0-无效
        if (!v) {
            marks[i] = false;
            continue;
        }

        // 是否有重复：i+1 ~ 9，是否和i位置重复
        for (var j = i + 1; j < length; j++) {
            if (v === array[j]) {
                marks[i] = marks[j] = false;
            }
        }
    }
    return marks;
}

// console.log(checkArray([1, 2, 3, 4, 4, 5, 7, 4, 9]));


var Toolkit = __webpack_require__(/*! ./toolkit */ "./js/core/toolkit.js");

// 输入：matrix，用户完成数独数据，9X9
// 处理：对matrix 行、列、宫进行检查， 并填写marks
// 输出：检查是否成功、marks

var Checker = function () {
    function Checker(matrix) {
        _classCallCheck(this, Checker);

        this._matrix = matrix;
        this._matrixMarks = Toolkit.matrix.makeMatrix(true);
    }

    _createClass(Checker, [{
        key: 'check',
        value: function check() {
            this.checkRows();
            this.checkCols();
            this.checkBoxes();

            // 检查是否成功
            this._success = this._matrixMarks.every(function (row) {
                return row.every(function (mark) {
                    return mark;
                });
            });
            return this._success;
        }
    }, {
        key: 'checkRows',
        value: function checkRows() {
            for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
                var row = this._matrix[rowIndex];
                var marks = checkArray(row);

                for (var colIndex = 0; colIndex < marks.length; colIndex++) {
                    if (!marks[colIndex]) {
                        this._matrixMarks[rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: 'checkCols',
        value: function checkCols() {
            for (var colIndex = 0; colIndex < 9; colIndex++) {
                var col = [];
                for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
                    col[rowIndex] = this._matrix[rowIndex][colIndex];
                }
                var marks = checkArray(col);
                for (var _rowIndex = 0; _rowIndex < marks.length; _rowIndex++) {
                    if (!marks[_rowIndex]) {
                        this._matrixMarks[_rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: 'checkBoxes',
        value: function checkBoxes() {
            for (var boxIndex = 0; boxIndex < 9; boxIndex++) {
                var box = Toolkit.box.getBoxCells(this._matrix, boxIndex);
                var marks = checkArray(box);

                for (var cellIndex = 0; cellIndex < marks.length; cellIndex++) {
                    if (!marks[cellIndex]) {
                        var _Toolkit$box$convertF = Toolkit.box.convertFromBoxIndex(boxIndex, cellIndex),
                            rowIndex = _Toolkit$box$convertF.rowIndex,
                            colIndex = _Toolkit$box$convertF.colIndex;

                        this._matrixMarks[rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: 'matrixMarks',
        get: function get() {
            return this._matrixMarks;
        }
    }, {
        key: 'isSuccess',
        get: function get() {
            return this._success;
        }
    }]);

    return Checker;
}();

module.exports = Checker;

/***/ }),

/***/ "./js/core/generator.js":
/*!******************************!*\
  !*** ./js/core/generator.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 生成数独解决方案的方法
var Toolkit = __webpack_require__(/*! ./toolkit */ "./js/core/toolkit.js");
module.exports = function () {
  function Generator() {
    _classCallCheck(this, Generator);
  }

  _createClass(Generator, [{
    key: 'generator',
    value: function generator() {
      while (!this.internalGenerator()) {
        // TODO
        // console.warn('try again');
      }
    }
  }, {
    key: 'internalGenerator',
    value: function internalGenerator() {
      this.matrix = Toolkit.matrix.makeMatrix();
      this.orders = Toolkit.matrix.makeMatrix().map(function (row) {
        return row.map(function (v, i) {
          return i;
        });
      }).map(function (row) {
        return Toolkit.matrix.shuffle(row);
      });

      // Toolkit.matrix.makeRow()
      for (var n = 1; n <= 9; n++) {
        if (!this.fillNumber(n)) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'fillNumber',
    value: function fillNumber(n) {
      return this.fillRow(n, 0);
    }
  }, {
    key: 'fillRow',
    value: function fillRow(n, rowIndex) {
      if (rowIndex > 8) {
        return true;
      }

      var row = this.matrix[rowIndex];
      // 随机选择列
      var orders = this.orders[rowIndex];

      for (var i = 0; i < 9; i++) {
        var colIndex = orders[i];

        // 如果该位置已经有值，则跳过
        if (row[colIndex]) {
          continue;
        }

        // 检查此位置是否可以填 n （!列和宫都存在）
        if (!Toolkit.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
          continue;
        }

        row[colIndex] = n;
        // 当前行填写 n 成功，递归调用 fillRow() 在下一行中填写 n
        // 去下一行填写 n，如果没填进去，就继续寻找当前行的下一个位置
        if (!this.fillRow(n, rowIndex + 1)) {
          row[colIndex] = 0;
          continue;
        }

        return true;
      }

      return false;
    }
  }]);

  return Generator;
}();

/***/ }),

/***/ "./js/core/soduko.js":
/*!***************************!*\
  !*** ./js/core/soduko.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 生成数独游戏
var Generator = __webpack_require__(/*! ./generator */ "./js/core/generator.js");
module.exports = function () {
  function Sudoku() {
    _classCallCheck(this, Sudoku);

    var generator = new Generator();
    generator.generator();
    this.solutionMatrix = generator.matrix;
  }

  _createClass(Sudoku, [{
    key: 'make',
    value: function make() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

      this.puzzleMatrix = this.solutionMatrix.map(function (row) {
        return row.map(function (cell) {
          return Math.random() * 9 < level ? 0 : cell;
        });
      });
    }
  }]);

  return Sudoku;
}();

/***/ }),

/***/ "./js/core/toolkit.js":
/*!****************************!*\
  !*** ./js/core/toolkit.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var matrixToolkit = {
  makeRow: function makeRow() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var array = new Array(9);
    array.fill(v);
    return array;
  },
  makeMatrix: function makeMatrix() {
    var _this = this;

    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    return Array.from({ length: 9 }, function () {
      return _this.makeRow(v);
    });
  },


  /**
   * Fisher-Yates 洗牌算法
   * 对传入数组进行随机排序，然后返回新数组
   * @param {*} array
   */
  shuffle: function shuffle(array) {
    var endIndex = array.length - 2;
    for (var i = 0; i <= endIndex; i++) {
      var j = i + Math.floor(Math.random() * (array.length - i));
      var _ref = [array[j], array[i]];
      array[i] = _ref[0];
      array[j] = _ref[1];
    }
    return array;
  },


  /**
   * TODO 检查指定位置可以填写数字 n
  */
  checkFillable: function checkFillable(matrix, n, rowIndex, colIndex) {
    var row = matrix[rowIndex];
    var col = this.makeRow().map(function (v, i) {
      return matrix[i][colIndex];
    });

    var _boxToolkit$convertTo = boxToolkit.convertToBoxIndex(rowIndex, colIndex),
        boxIndex = _boxToolkit$convertTo.boxIndex;

    var box = boxToolkit.getBoxCells(matrix, boxIndex);

    for (var i = 0; i < 9; i++) {
      if (row[i] === n || col[i] === n || box[i] === n) {
        return false;
      }
    }
    return true;
  }
};

/**
 * 宫坐标系工具
*/
var boxToolkit = {
  convertToBoxIndex: function convertToBoxIndex(rowIndex, colIndex) {
    return {
      boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
      cellIndex: rowIndex % 3 * 3 + colIndex % 3
    };
  },
  convertFromBoxIndex: function convertFromBoxIndex(boxIndex, cellIndex) {
    return {
      rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
      colIndex: boxIndex % 3 * 3 + cellIndex % 3
    };
  },
  getBoxCells: function getBoxCells(matrix, boxIndex) {
    var startRowIndex = Math.floor(boxIndex / 3) * 3;
    var startColIndex = boxIndex % 3 * 3;
    var result = [];

    for (var cellIndex = 0; cellIndex < 9; cellIndex++) {
      var rowIndex = startRowIndex + Math.floor(cellIndex / 3);
      var colIndex = startColIndex + cellIndex % 3;
      result.push(matrix[rowIndex][colIndex]);
    }
    return result;
  }
};

// 工具集

module.exports = function () {
  function Toolkit() {
    _classCallCheck(this, Toolkit);
  }

  _createClass(Toolkit, null, [{
    key: "matrix",

    /**
     * 矩阵和数据相关工具
     */
    get: function get() {
      return matrixToolkit;
    }

    /**
     * 宫坐标系相关工具
     */

  }, {
    key: "box",
    get: function get() {
      return boxToolkit;
    }
  }]);

  return Toolkit;
}();

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Grid = __webpack_require__(/*! ./ui/grid */ "./js/ui/grid.js");
var PopupNumbers = __webpack_require__(/*! ./ui/popupnumbers */ "./js/ui/popupnumbers.js");

var grid = new Grid($("#container"));
grid.build();
grid.layout();

var popupNumbers = new PopupNumbers($("#popupNumbers"));
grid.bindPopup(popupNumbers);

$("#check").on("click", function (e) {
  grid.check();
});
$("#reset").on("click", function (e) {
  grid.reset();
});
$("#clear").on("click", function (e) {
  grid.clear();
});
$("#rebuild").on("click", function (e) {
  grid.rebuild();
});

/***/ }),

/***/ "./js/ui/grid.js":
/*!***********************!*\
  !*** ./js/ui/grid.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 生成九宫格
var Toolkit = __webpack_require__(/*! ../core/toolkit */ "./js/core/toolkit.js");
var Sudoku = __webpack_require__(/*! ../core/soduko */ "./js/core/soduko.js");
var Checker = __webpack_require__(/*! ../core/checker */ "./js/core/checker.js");

var Grid = function () {
  function Grid(container) {
    _classCallCheck(this, Grid);

    this._$container = container;
  }

  _createClass(Grid, [{
    key: 'build',
    value: function build() {
      // const generator = new Generator();
      // generator.generator();
      // const matrix = generator.matrix;
      var sudoku = new Sudoku();
      sudoku.make();
      var matrix = sudoku.puzzleMatrix;
      var rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"];
      var colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"];
      var $cells = matrix.map(function (rowValues) {
        return rowValues.map(function (cellValue, colIndex) {
          return $("<span>").addClass(colGroupClasses[colIndex % 3]).addClass(cellValue ? "fixed" : "empty").text(cellValue);
        });
      });
      var $divArray = $cells.map(function ($spanArray, rowIndex) {
        return $("<div>").addClass('row').addClass(rowGroupClasses[rowIndex % 3]).append($spanArray);
      });
      this._$container.append($divArray);
    }
  }, {
    key: 'layout',
    value: function layout() {
      var width = $("span:first", this._$container).width();
      $("span", this._$container).height(width).css({
        "line-height": width + 'px',
        "font-size": width < 32 ? width / 2 + 'px' : ""
      });
    }
  }, {
    key: 'check',
    value: function check() {
      // 获取需要检测的数据
      var data = this._$container.children().map(function (rowIndex, div) {
        return $(div).children().map(function (colIndex, span) {
          return parseInt($(span).text()) || 0;
        });
      }).toArray().map(function ($data) {
        return $data.toArray();
      });
      var checker = new Checker(data);
      if (checker.check()) {
        return true;
      }

      // 检查不成功，进行标记
      var marks = checker.matrixMarks;
      this._$container.children().each(function (rowIndex, div) {
        $(div).children().each(function (colIndex, span) {
          var $span = $(span);
          if ($span.is('.fixed') || marks[rowIndex][colIndex]) {
            $span.removeClass('error');
          } else {
            $span.addClass('error');
          }
        });
      });
    }
  }, {
    key: 'reset',
    value: function reset() {}
  }, {
    key: 'clear',
    value: function clear() {}
  }, {
    key: 'rebuild',
    value: function rebuild() {
      this._$container.empty();
      this.build();
      this.layout();
    }
  }, {
    key: 'bindPopup',
    value: function bindPopup(popupNumbers) {
      this._$container.on("click", "span", function (e) {
        var $cell = $(e.target);
        if ($cell.is('.fixed')) {
          return;
        }
        popupNumbers.popup($cell);
      });
    }
  }]);

  return Grid;
}();

module.exports = Grid;

/***/ }),

/***/ "./js/ui/popupnumbers.js":
/*!*******************************!*\
  !*** ./js/ui/popupnumbers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 处理弹出的操作面板
module.exports = function () {
    function PopupNumbers($panel) {
        var _this = this;

        _classCallCheck(this, PopupNumbers);

        this._$panel = $panel.hide().removeClass('hidden');
        this._$panel.on('click', 'span', function (e) {
            var $span = $(e.target);
            var $cell = _this._$targetCell;

            // mark1，mark2 回填样式
            if ($span.hasClass('mark1')) {
                // 回填样式
                if ($cell.hasClass('mark1')) {
                    $cell.removeClass('mark1');
                } else {
                    $cell.removeClass('mark2').addClass('mark1');
                }
            } else if ($span.hasClass('mark2')) {
                // 回填样式
                if ($cell.hasClass('mark2')) {
                    $cell.removeClass('mark2');
                } else {
                    $cell.removeClass('mark1').addClass('mark2');
                }
            } else if ($span.hasClass('empty')) {
                // 取消数字填写， 取消mark
                $cell.text(0).addClass('empty').removeClass('mark1 mark2');
            } else {
                // 1-9 会填数字
                $cell.removeClass('empty').text($span.text());
            }

            _this.hide();
        });
    }

    _createClass(PopupNumbers, [{
        key: 'popup',
        value: function popup($cell) {
            this._$targetCell = $cell;

            var _$cell$position = $cell.position(),
                left = _$cell$position.left,
                top = _$cell$position.top;

            this._$panel.css({
                left: left + 'px',
                top: top + 'px'
            }).show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this._$panel.hide();
        }
    }]);

    return PopupNumbers;
}();

/***/ })

/******/ });
//# sourceMappingURL=index.js.map