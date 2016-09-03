#!/usr/bin/env node

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

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _cli = require('./cli');

var _categories = require('./categories');

var _nodeNotifier = require('node-notifier');

var _nodeNotifier2 = _interopRequireDefault(_nodeNotifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ((0, _cli.cliStart)()) {
  (function () {
    _util.util.clean();
    _nodeNotifier2.default.notify({
      'title': 'Asciilang',
      'message': 'Hello, there! Welcome to the asciilang (˘◡˘)۶'
    });
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
      _util.util.clean();
      (0, _categories.startCategory)(langUser);
    });
  })();
}