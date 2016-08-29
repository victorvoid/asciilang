import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';
import * as levels from './levels';

export const next = (callback) => {
	let questions = [
		{
		    type: 'list',
		    name: 'isnext',
		    message: 'Escolha o que deseja',
		    choices: ['Próximo nível', 'Descansar', 'Repetir nível', 'Escolher outra categoria']
		}
	];
	inquirer.prompt(questions).then(function (answers) {
		util.clean();
		callback(answers.isnext)
	});
}

export const nextLevel = (numLevel, arrQuestions, lang) =>{
	levels['Level'+numLevel](arrQuestions,  lang);
}

export const rest = (seg) => {
	console.log(chalk.yellow('... (̶◉͛‿◉̶) ... ok'));

	setTimeout(function(){
		console.log('Pronto... vamos praticar!')
	}, seg*1000);
}