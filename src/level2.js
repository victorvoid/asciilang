import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';
import {startCategory} from './categories';
import {next, nextLevel, rest} from './levelsfuncs';

export default function Level2 (arrQuestions, lang) {
	let level = arrQuestions
		.slice(10, 20)
		.map(val => {
			let message = val.message;
			val['message'] = val['response'];
			val['response'] = message;
			return val;
		});	/* reverse message and reply */
	console.log(chalk.yellow(lang.messages['translatetoptbr'])); //translate to ..[lang]
	inquirer.prompt(level).then(answers => {
		util.clean();
		if(level.length === 10){
			console.log(chalk.green('Parabéns Você já conseguiu completar 20 frases ᕙ(`▿´)ᕗ '));
			next(response => {
				switch(response){
					case "Próximo nível":
						nextLevel(3, arrQuestions, lang);
						break;
					case "Descansar":
						rest(600, () => {
							nextLevel(3, arrQuestions, lang);
						});
						break;
					case "Repetir nível":
						nextLevel(2, arrQuestions, lang);
						break;
					case "Escolher outra categoria":
						startCategory(lang)
						break;
				}
			});
		}else{
			console.log(chalk.red('Acabaram as frases dessa categoria, escolha outra.'));
			startCategory(lang);			
		}
	});
}