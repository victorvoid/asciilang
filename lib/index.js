'use strict';

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _util = require('./util');

var _languages = require('./languages');

var _languages2 = _interopRequireDefault(_languages);

var _app = require('./app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_util.util.clean();
console.log('Welcome to the ' + _chalk2.default.blue('asciilang'));
var langUser = void 0;

var usrModel = {
  mylang: '',
  level: 0
};

var mylang = [{
  type: 'list',
  name: 'mylang',
  message: 'I speak',
  choices: [{
    name: "Português",
    value: "ptbr"
  }, { name: "English",
    value: "eng"
  }]
}];

_inquirer2.default.prompt(mylang).then(function (answers) {

  usrModel.mylang = answers.mylang;
  switch (usrModel.mylang) {
    case "eng":
      langUser = _languages2.default.ENG;
      break;
    case "ptbr":
      langUser = _languages2.default.PTBR;
      break;
    default:
      console.log('/o/ not');
      break;
  }

  start(langUser);
});

var start = function start(langUsr) {
  var questions = [{
    type: 'list',
    name: 'category',
    message: langUsr.messages.messageCategory,
    choices: langUsr.categories,
    default: function _default() {
      return _util.util.clean();
    }
  }];

  _inquirer2.default.prompt(questions).then(function (answers) {
    (0, _app.init)(answers.category, langUsr); //starting
  });
};