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
/*
	'Common Expressions', 
	'Greetings', 
	'Making friends', 
	'Travel, directions', 
	'Numbers and money', 
	'Location', 
	'Phone/internet/mail', 
	'Time and dates', 
	'Accommodatinos', 
	'Dining', 
	'Entertainment', 
	'Shopping', 
	'Communiction difficulties', 
	'Emergency and health', 
	'General questions', 
	'Work', 
	'Weather'
*/
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
			/** Making friends (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/making-friends-pt-eng.txt');
			break;
		case lang.categories[3]:
			/** Travel, directions(👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/travel-directions-pt-eng.txt');
			break;
		case lang.categories[4]:
			/** Numbers and money (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/numbers-money-pt-eng.txt');
			break;
		case lang.categories[5]:
			/** Location (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/location-pt-eng.txt');
			break;
		case lang.categories[6]:
			/** Phone/internet/mail (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/phone-internet-pt-eng.txt');
			break;
		case lang.categories[7]:
			/** Time and dates (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/time-dates-pt-eng.txt');
			break;
		case lang.categories[8]:
			/** Accommodatinos (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/accommodations-pt-eng.txt');
			break;
		case lang.categories[9]:
			/** Dining (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/dining-pt-eng.txt');
			break;
		case lang.categories[10]:
			/** Entertainment (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/entertainment-pt-eng.txt');
			break;
		case lang.categories[11]:
			/** Shopping (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/shopping-pt-eng.txt');
			break;
		case lang.categories[12]:
			/** Communiction difficulties (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/communication-difficulties-pt-eng.txt');
			break;
		case lang.categories[13]:
			/** Emergency and health (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/emergency-health-pt-eng.txt');
			break;
		case lang.categories[14]:
			/** General questions (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/general-questions-pt-eng.txt');
			break;
		case lang.categories[15]:
			/** Work (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/work-pt-eng.txt');
			break;
		case lang.categories[16]:
			/** Weather (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = (0, _questions.Questions)('/phrases/weather-pt-eng.txt');
			break;
	}

	_util.util.shuffle(arrQuestions);
	//start levels
	levels['Level1'](arrQuestions, function () {
		return lang.lan === 'ptbr' ? _languages2.default.PTBR : _languages2.default.ENG;
	}());
};