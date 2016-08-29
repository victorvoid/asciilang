'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _level = require('./level1.js');

Object.defineProperty(exports, 'ThingA', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_level).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }