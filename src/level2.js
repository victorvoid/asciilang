import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';

import {next, nextLevel, rest} from './levelsfuncs';

export default function Level2 (arrQuestions, lang) {
	let level = arrQuestions
		.slice(10, 20)
		.map(function(val) {
			let message = val.message;
			val['message'] = val['response'];
			val['response'] = message;
			return val;
		});	/* reverse message and reply */
	console.log(chalk.yellow(lang.messages['translatetoptbr'])); //translate to ..[lang]
	inquirer.prompt(level).then(function (answers) {
		util.clean();
		console.log(chalk.green('Parabéns Você já conseguiu completar 20 frases ᕙ(`▿´)ᕗ '));
		next(function(response){
			switch(response){
				case "Próximo nível":
					nextLevel(3, arrQuestions, lang);
					break;
				case "Descansar":
					rest(5);
					break
				case "Repetir nível":
					nextLevel(2, arrQuestions, lang);
					break;
			}
		});
	});
}