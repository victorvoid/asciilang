'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Level2;

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _util = require('./util');

var _categories = require('./categories');

var _levelsfuncs = require('./levelsfuncs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Level2(arrQuestions, lang) {
	var level = arrQuestions.slice(10, 20).map(function (val) {
		var message = val.message;
		val['message'] = val['response'];
		val['response'] = message;
		return val;
	}); /* reverse message and reply */
	console.log(_chalk2.default.yellow(lang.messages['translatetoptbr'])); //translate to ..[lang]
	_inquirer2.default.prompt(level).then(function (answers) {
		_util.util.clean();
		if (level.length === 10) {
			console.log(_chalk2.default.green('Parabéns Você já conseguiu completar 20 frases ᕙ(`▿´)ᕗ '));
			(0, _levelsfuncs.next)(function (response) {
				switch (response) {
					case "Próximo nível":
						(0, _levelsfuncs.nextLevel)(3, arrQuestions, lang);
						break;
					case "Descansar":
						(0, _levelsfuncs.rest)(600, function () {
							(0, _levelsfuncs.nextLevel)(3, arrQuestions, lang);
						});
						break;
					case "Repetir nível":
						(0, _levelsfuncs.nextLevel)(2, arrQuestions, lang);
						break;
					case "Escolher outra categoria":
						(0, _categories.startCategory)(lang);
						break;
				}
			});
		} else {
			console.log(_chalk2.default.red('Acabaram as frases dessa categoria, escolha outra.'));
			(0, _categories.startCategory)(lang);
		}
	});
}