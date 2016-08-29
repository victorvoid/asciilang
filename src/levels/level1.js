const inquirer = require('inquirer');
const chalk    = require('chalk');
const util     = require('./util');
const languages = require('./languages');

let level1 = {
	index: function(arrQuestions, lang){
		console.log('pegoooooooooou')
		// let level = arrQuestions.slice(0, 10);
		// console.log(chalk.yellow(lang)); //translate to ..[lang]
		// inquirer.prompt(level).then(function (answers) {
		// 	console.log(chalk.green('Parabéns Você conseguiu completar 10 frases ᕙ(`▿´)ᕗ '));
		// 	let isnext = next(function(response){
		// 		switch(response){
		// 			case "Próximo nível":
		// 				nextLevel(2, arrQuestions, lang);
		// 				break;
		// 			case "Descansar":
		// 				rest();
		// 				break
		// 			case "Repetir nível":
		// 				console.log('Repetir !!!!');
		// 				break;
		// 		}
		// 	});
		// });
	}
}
module.exports = level1.index;