import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';

import {next, nextLevel, rest} from './levelsfuncs';

export default function Level3 (arrQuestions, lang) {
	let level = arrQuestions
		.slice(20, 30)

	console.log(chalk.yellow(lang.messages['translatetoeng'])); //translate to ..[lang]
	inquirer.prompt(level).then(function (answers) {
		util.clean();
		console.log(chalk.green('Parabéns Você conseguiu completar 30 frases ᕙ(`▿´)ᕗ '));
		next(function(response){
			switch(response){
				case "Próximo nível":
					nextLevel(4, arrQuestions, lang);
					break;
				case "Descansar":
					rest(5);
					break
				case "Repetir nível":
					nextLevel(3, arrQuestions, lang);
					break;
			}
		});
	});
}