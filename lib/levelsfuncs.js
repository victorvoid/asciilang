'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.rest = exports.nextLevel = exports.next = undefined;

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _util = require('./util');

var _levels = require('./levels');

var levels = _interopRequireWildcard(_levels);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var next = exports.next = function next(callback) {
	var questions = [{
		type: 'list',
		name: 'isnext',
		message: 'Escolha o que deseja',
		choices: ['Próximo nível', 'Descansar', 'Repetir nível', 'Escolher outra categoria']
	}];
	_inquirer2.default.prompt(questions).then(function (answers) {
		_util.util.clean();
		callback(answers.isnext);
	});
};

var nextLevel = exports.nextLevel = function nextLevel(numLevel, arrQuestions, lang) {
	levels['Level' + numLevel](arrQuestions, lang);
};

var rest = exports.rest = function rest(seg) {
	console.log(_chalk2.default.yellow('... (̶◉͛‿◉̶) ... ok'));
	_util.util.timeout(seg * 1000).then(function () {
		console.log('back!!!');
		throw new Error("hmm");
	});
};