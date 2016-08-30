'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.init = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _levels = require('./levels');

var levels = _interopRequireWildcard(_levels);

var _util = require('./util');

var _languages = require('./languages');

var _languages2 = _interopRequireDefault(_languages);

var _questions = require('./questions.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrQuestions = void 0;
var init = exports.init = function init(category, lang) {
	_util.util.clean();
	switch (category) {
		case lang.categories[0]:
			/** Common Expression ☜(ˆ▿ˆc) **/
			arrQuestions = (0, _questions.Questions)('/phrases/common-expressions-pt-eng.txt');
			break;
		case lang.categories[1]:
			/** Greetings (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/greetings-pt-eng.txt');
			break;
		case lang.categories[2]:
			/** Greetings (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/making-friends-pt-eng.txt');
			break;
	}

	_util.util.shuffle(arrQuestions);
	//start levels
	levels['Level1'](arrQuestions, function () {
		return lang.lan === 'ptbr' ? _languages2.default.PTBR : _languages2.default.ENG;
	}());
};