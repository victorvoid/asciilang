'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Questions = undefined;

var _fs = require('fs');

var _util = require('./util');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Questions = exports.Questions = function Questions(file) {
	var category = ['common-expressions', 'greetings', 'travels', 'numbers']; //etc
	var phrases = [];
	var arr = [];
	var newObj = {};

	// comon-expressions
	var readPhrases = (0, _fs.readFileSync)(__dirname + file, 'utf8').split('\n').filter(function (n) {
		return n != '';
	}).map(function (line) {
		return line.trim();
	});

	var countPhrases = readPhrases.length;
	for (var i = 0; i < countPhrases; i++) {
		if (i % 2 == 0) newObj['question'] = readPhrases[i];else {
			newObj['answers'] = readPhrases[i];
			arr.push({ question: newObj.question, answers: newObj.answers });
		}
	}

	var questions = arr.reduce(function (prev, curr, i) {
		var newObj = {
			type: 'input',
			name: 'q' + i,
			message: _util.util.removeDot(curr.question),
			response: _util.util.removeDot(curr.answers)
		};
		//validate:
		newObj['validate'] = function (value) {
			if (value.toLowerCase() === newObj.response.toLowerCase()) {
				_util.util.clean();
				console.log(_chalk2.default.green('\n 👊 (• ͜ʖ•)'));
				return true;
			} else {
				_util.util.clean();
				console.log(_chalk2.default.red('\n  Você esqueceu! (╯°□°）╯ a resposta é ' + _chalk2.default.yellow(newObj.response)) + '\n');
				return false;
			}
		};
		prev.push(newObj);
		return prev;
	}, []);

	return questions;
};