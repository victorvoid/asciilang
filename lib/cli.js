'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cliStart = exports.m = undefined;

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageCLI = '\n          ' + _chalk2.default.blue('Usage') + '\n            $ asciilang ' + _chalk2.default.red('<command>') + ' is one of:\n              ' + _chalk2.default.red('start') + '\n\n          ' + _chalk2.default.blue('Options') + '\n            -h, --help       show usage information\n            -v, --version    print version info and exit\n            ' + _chalk2.default.red('s') + ' Start application\n\n          ' + _chalk2.default.blue('Examples') + '\n            ' + _chalk2.default.yellow('$ asciilang start') + '\n              or\n            ' + _chalk2.default.yellow('$ asciilang s') + '\n\n        ';

var m = exports.m = (0, _meow2.default)(MessageCLI, {
  alias: { h: 'help', v: 'version' },
  string: ['lang'],
  boolean: ['pager'],
  default: { lang: 'en' },
  '--': true
});
var cli = function cli(action, flags) {
  return action === 'start' || action === 's' ? 'start' : false;
};

var cliStart = exports.cliStart = function cliStart() {
  if (cli(m.input[0], m.flags) == 'start') {
    console.log('uuuh deu true');
    return true;
  } else {
    console.log('\n    ' + _chalk2.default.black.bgBlue('（っ＾▿＾）asciilang ') + '\n    ' + _chalk2.default.green('👊 Foreign languages for developers') + '\n\n    ' + MessageCLI + '\n    ');
    return false;
  }
};