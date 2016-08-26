'use strict';
const chalk    = require('chalk');
const levels = require('./levels');
const util = require('./util');

let app = (category) => {
	util.clean();
	if(category === 'Expressões comuns'){
		var arrQuestions = require('./questions')('phrases/common-expressions-pt-eng.txt');
	}

	util.shuffle(arrQuestions);

	console.log(chalk.yellow('Traduza para o inglês (╯°□°）╯'));
	let level1 = levels.leveltest(arrQuestions); //10 questions: PT -> ENG	
}

module.exports = app;