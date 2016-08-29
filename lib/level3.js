'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Level3;

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _util = require('./util');

var _levelsfuncs = require('./levelsfuncs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Level3(arrQuestions, lang) {
	var level = arrQuestions.slice(20, 30);

	console.log(_chalk2.default.yellow(lang.messages['translatetoeng'])); //translate to ..[lang]
	_inquirer2.default.prompt(level).then(function (answers) {
		_util.util.clean();
		console.log(_chalk2.default.green('Parabéns Você conseguiu completar 30 frases ᕙ(`▿´)ᕗ '));
		(0, _levelsfuncs.next)(function (response) {
			switch (response) {
				case "Próximo nível":
					(0, _levelsfuncs.nextLevel)(4, arrQuestions, lang);
					break;
				case "Descansar":
					(0, _levelsfuncs.rest)(5);
					break;
				case "Repetir nível":
					(0, _levelsfuncs.nextLevel)(3, arrQuestions, lang);
					break;
			}
		});
	});
}