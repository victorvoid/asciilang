import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';
import * as levels from './levels';

export const next = callback => {
	let questions = [
		{
		    type: 'list',
		    name: 'isnext',
		    message: 'Escolha o que deseja',
		    choices: ['Próximo nível', 'Descansar', 'Repetir nível', 'Escolher outra categoria']
		}
	];
	inquirer.prompt(questions).then(answers => {
		util.clean();
		callback(answers.isnext)
	});
}

export const nextLevel = (numLevel, arrQuestions, lang) =>{
	levels['Level'+numLevel](arrQuestions,  lang);
}

export const rest = seg => {
	console.log(chalk.yellow('... (̶◉͛‿◉̶) ... ok'));
	util.timeout(seg * 1000).then(()=>{
		console.log('back!!!');
		throw new Error("hmm");
	})
}