import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';
import * as levels from './levels';
import notifier from 'node-notifier';
import opn from 'opn';
import {startCategory} from './categories';

export const next = callback => {
	let questions = [
		{
		    type: 'list',
		    name: 'isnext',
		    message: 'Escolha o que deseja',
		    choices: ['Próximo nível', 'Descansar para o próximo nível', 'Repetir nível', 'Escolher outra categoria']
		}
	];
	inquirer.prompt(questions).then(answers => {
		util.clean();
		callback(answers.isnext)
	});
}

export const nextLevel = (numLevel, arrQuestions, lang) =>{
	if(levels['Level'+numLevel] != undefined)
		levels['Level'+numLevel](arrQuestions,  lang);
	else{
		notifier.notify({
		    'title': 'Asciilang',
		    'message': 'Nível indisponível no momento ಥ_ಥ',
		    'wait': true,
		    'sound': true
		});
		startCategory(lang);
	}
}

export const rest = (seg, nextlevel) => {
	console.log(chalk.yellow('... (̶◉͛‿◉̶) ... ok 10min'));
	util.timeout(seg * 1000).then(()=>{
		opn('http://victorvoid.github.io/asciilang/practice.html');
		notifier.notify({
		    'title': 'Asciilang',
		    'message': 'Come back (˘◡˘)۶ to practice',
		    'wait': true,
		    'sound': true
		});
		nextlevel();
	})
}