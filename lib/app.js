'use strict';
const chalk    = require('chalk');
const levels = require('./levels');
const util = require('./util');

let arrQuestions;
let app = (category, lang) => {
	util.clean();
	switch(category){
		case lang.categories[0]: /** Common Expression ☜(ˆ▿ˆc) **/
			arrQuestions = require('./questions')('phrases/common-expressions-pt-eng.txt');
			break;
		case lang.categories[1]: /** Greetings (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = require('./questions')('phrases/greetings-pt-eng.txt');
			break;
	}
	
	util.shuffle(arrQuestions);

	console.log(chalk.yellow(lang.message));
	let level1 = levels.level1(arrQuestions); //10 questions: PT -> ENG
}

module.exports = app;