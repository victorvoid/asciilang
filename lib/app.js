'use stric';
const inquirer = require('inquirer');
const chalk    = require('chalk');
const fs = require('fs');

let categories = ['common-expressions', 'greetings', 'travels', 'numbers']; //etc
let phrases = [];

//comon-expressions
let readPhrases = fs.readFileSync('phrases/expressoes-comuns-pt-eng.txt', "utf-8")
	.split('\n')
	.filter((n) => n != '')
	.map((line) => line.trim());

// console.log('readPhrase ', readPhrases);

let questions = [
  {
    type: 'input',
    name: 'q1',
    message: readPhrases[0]
  }
];

console.log(readPhrases);

console.log(chalk.red('Traduza para o inglês: '));

/*
inquirer.prompt(questions).then(function (answers) {
	if(answers.q1 === readPhrases[1]){
		console.log(chalk.blue('Aee, acertou =)'));
	}else
		console.log(chalk.red('aahh, errou =('));
});*/
