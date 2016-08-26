'use strict';
const inquirer = require('inquirer');
const chalk    = require('chalk');

const levels = require('./levels');
const util = require('./util');

let app = (category) => {
	console.log('dsadsadas')
	if(category === 'Expressões comuns'){
		console.log('Expressões starting...');
		var arrQuestions = require('./questions')('phrases/common-expressions-pt-eng.txt');
	}

	util.shuffle(arrQuestions);

	let level1 = levels.level1(arrQuestions); //10 questions: PT -> ENG
	
	//is not working..
	let level2 = arrQuestions.slice(10, 20); //10 question: ENG -> PT
	let leveltest = arrQuestions.slice(0, 1);

	/*        Expressões comuns       */
	console.log(chalk.yellow('Traduza para o inglês (╯°□°）╯'));
	inquirer.prompt(level1).then(function (answers) {
		console.log(chalk.green('Parabéns Você conseguiu completar 10 frases ᕙ(`▿´)ᕗ '));
		console.log(chalk.yellow('Vá descansar! Daqui a pouco te chamo de novo (͠≖ ͜ʖ͠≖)👌'));
		setTimeout(function(){
			console.log('Pronto... vamos praticar!')
			levels.level2();
		}, 5000);
	});
}

module.exports = app;