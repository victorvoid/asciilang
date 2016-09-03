import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';
import {startCategory} from './categories';
import {next, nextLevel, rest} from './levelsfuncs';

export default function Level1(arrQuestions, lang){
	let level = arrQuestions.slice(0, 10);
	console.log(chalk.yellow(lang.messages['translatetoeng'])); //translate to ..[lang]
	inquirer.prompt(level).then( answers => {
		util.clean();
		if(level.length === 10){
			console.log(chalk.green('Parabéns Você conseguiu completar 10 frases ᕙ(`▿´)ᕗ '));
			next(response => {
				switch(response){
					case "Próximo nível":
						nextLevel(2, arrQuestions, lang);
						break;
					case "Descansar para o próximo nível":
						rest(600, () => {
							nextLevel(2, arrQuestions, lang);
						});
						break;
					case "Repetir nível":
						nextLevel(1, arrQuestions, lang);
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