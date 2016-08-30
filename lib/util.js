"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var util = exports.util = {
	removeDot: function removeDot(line) {
		return line[line.length - 1] === '.' ? line.slice(0, line.indexOf(line[line.length - 1])) //final text
		: /* ;^;  */line;
	},

	shuffle: function shuffle(a) {
		var j = void 0,
		    x = void 0,
		    i = void 0;
		for (i = a.length; i; i--) {
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x;
		}
	},
	clean: function clean() {
		process.stdout.write("\u001b[2J\u001b[0;0H");
	},
	timeout: function timeout() {
		var duration = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		return new Promise(function (resolve, reject) {
			setTimeout(resolve, duration);
		});
	}
};