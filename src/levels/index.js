const inquirer = require('inquirer');
const chalk    = require('chalk');
const util     = require('../util');
const languages = require('../languages');

let levels = {
	level1: function(arrQuestions, lang){
		console.log('test');
		// require('./levels/level1.js')
	},
	level2: function(arrQuestions, lang){
		
	}
}
exports.levels = levels;