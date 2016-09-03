'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startCategory = undefined;

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _util = require('./util');

var _app = require('./app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startCategory = exports.startCategory = function startCategory(langUsr) {
  var questions = [{
    type: 'list',
    name: 'category',
    message: langUsr.messages.messageCategory,
    choices: langUsr.categories
  }];

  _inquirer2.default.prompt(questions).then(function (answers) {
    (0, _app.init)(answers.category, langUsr); //starting
  });
};