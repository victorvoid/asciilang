import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';

import {next, nextLevel, rest} from './levelsfuncs';

export default function Level1(arrQuestions, lang){
	let level = arrQuestions.slice(0, 10);
	console.log(chalk.yellow(lang.messages['translatetoeng'])); //translate to ..[lang]
	inquirer.prompt(level).then( answers => {
		util.clean();
		console.log(chalk.green('Parabéns Você conseguiu completar 10 frases ᕙ(`▿´)ᕗ '));
		
		next(response => {
			switch(response){
				case "Próximo nível":
					nextLevel(2, arrQuestions, lang);
					break;
				case "Descansar":
					rest(60);
					break
				case "Repetir nível":
					nextLevel(1, arrQuestions, lang);
					break;
			}
		});
	});
}