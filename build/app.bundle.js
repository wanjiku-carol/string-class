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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stringClass = exports.stringClass = function () {
    function stringClass(name) {
        _classCallCheck(this, stringClass);

        this.name = name;
    }

    _createClass(stringClass, [{
        key: 'wordCheck',
        value: function wordCheck() {
            if (!this.name) {
                return "There must be a string";
            }
        }
    }, {
        key: 'hasVowels',
        value: function hasVowels() {
            var vowels = ['a', 'e', 'i', 'o', 'u'];
            var nameSplit = this.name.split("");

            var _loop = function _loop(i) {
                if (nameSplit.filter(function (letter) {
                    return letter === vowels[i];
                })) {
                    return {
                        v: true
                    };
                }
            };

            for (var i = 0; i < vowels.length; i++) {
                var _ret = _loop(i);

                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
            }
        }
    }, {
        key: 'toUpper',
        value: function toUpper(inputString) {
            this.inputString = inputString;
            var newString = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.inputString.split(" ")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var word = _step.value;

                    var resultVar = "";
                    for (var i = 0; i < word.length; i++) {
                        resultVar += String.fromCharCode(word.charCodeAt(i) & 223);
                    }
                    newString.push(resultVar);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (newString.join(" ") === this.inputString) {
                return "String is already in uppercase";
            } else {
                return newString.join(" ");
            }
        }
    }, {
        key: 'toLower',
        value: function toLower() {
            var newString = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.name.split(" ")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var word = _step2.value;

                    var resultVar = "";
                    for (var i = 0; i < word.length; i++) {
                        var code = word.charCodeAt(i);
                        if (code > 64 && code < 91) {
                            resultVar += String.fromCharCode(code + 32);
                        } else {
                            resultVar += word.charAt(i);
                        }
                    }
                    newString.push(resultVar);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (newString.join(" ") === this.name) {
                return "String already in lowercase";
            } else {
                return newString.join(" ");
            }
        }
    }, {
        key: 'ucFirst',
        value: function ucFirst() {
            var splitName = this.name.charAt(0);

            return this.toUpper(splitName) + this.name.substr(1) + "?";
        }
    }, {
        key: 'isQuestion',
        value: function isQuestion() {
            if (this.name.includes("?")) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'in',
        value: function _in() {
            if (this.name instanceof Array) {
                return "This is already an array";
            } else {
                if (this.name.includes(" ")) {
                    return this.name.split(" ");
                } else {
                    return this.name.split("");
                }
            }
        }
    }, {
        key: 'wordCount',
        value: function wordCount() {
            return this.name.split(" ").length;
        }
    }, {
        key: 'toCurrency',
        value: function toCurrency() {
            var currencyString = Number(this.name);
            if (typeof currencyString === "number" && !isNaN(currencyString)) {
                return currencyString.toLocaleString();
            } else {
                return "This is not a number";
            }
        }
    }, {
        key: 'fromCurrency',
        value: function fromCurrency() {
            var currencyString = this.name.replace(/\,/g, '');
            if (!isNaN(Number(currencyString))) {
                return currencyString;
            } else {
                return "This is not a number";
            }
        }
    }, {
        key: 'inverseCase',
        value: function inverseCase() {
            var regexpUpper = /^[A-Z]/;
            var splitString = this.name.split("");
            var inverseString = splitString.map(function (word) {
                if (regexpUpper.test(word) === true) {
                    return word.toLowerCase();
                } else {
                    return word.toUpperCase();
                }
            });
            return inverseString.join("");
        }
    }, {
        key: 'alternatingCase',
        value: function alternatingCase() {
            var words = this.name.toLowerCase().split("");
            for (var index = 0; index < words.length; index += 2) {
                words[index] = words[index].toUpperCase();
            }
            return words.join("");
        }
    }, {
        key: 'getMiddle',
        value: function getMiddle() {
            var position = void 0;
            var length = void 0;
            if (this.name.length % 2 === 1) {
                position = this.name.length / 2;
                length = 1;
            } else {
                position = this.name.length / 2 - 1;
                length = 2;
            }
            var result = this.name.substring(position, position + length);
            return result;
        }
    }, {
        key: 'numberWords',
        value: function numberWords() {
            var numbers = { 0: "and", 1: "one", 2: "two", 3: "three", 4: "four",
                5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine" };
            var splitNumber = this.name.toLocaleString().split(",");
            var listNums = [];
            for (var i = 0; i < splitNumber.length; i++) {
                var splitSubNums = splitNumber[i].split("");
                for (var ind = 0; ind < splitSubNums.length; ind++) {
                    for (var key in numbers) {
                        if (Number(splitSubNums[ind]) === Number(key)) {
                            var newNum = numbers[key];
                            listNums.push(newNum);
                        }
                    }
                }
            }

            return listNums.join(" ");
        }
    }, {
        key: 'isDigit',
        value: function isDigit() {
            var splitName = this.name.split("");
            if (splitName.length > 1) {
                return false;
            } else {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = splitName[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var digit = _step3.value;

                        if (isNaN(Number(digit))) {
                            return "This is not a number";
                        } else {
                            return true;
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            }
        }
    }, {
        key: 'doubleCheck',
        value: function doubleCheck() {
            if (this.name.match(/[^\w\s]|(.)(?=\1)/gi, "") !== null) {
                return true;
            } else {
                return false;
            }
        }
    }]);

    return stringClass;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map