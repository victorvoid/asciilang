import {readFileSync} from 'fs';
import {util} from './util';
import chalk from 'chalk';

export const Questions = (file) => {	
	let category = ['common-expressions', 'greetings', 'travels', 'numbers']; //etc
	let phrases = [];
	let arr = [];
	let newObj = {};

	// comon-expressions
	let readPhrases = readFileSync(__dirname+file, 'utf8')
		.split('\n')
		.filter((n) => n != '')
		.map((line) => line.trim());

	let countPhrases = readPhrases.length;
	for(var i = 0; i < countPhrases; i++){
		if(i % 2 == 0)
			newObj['question'] = readPhrases[i];
		else{
			newObj['answers'] = readPhrases[i];
			arr.push({question: newObj.question, answers: newObj.answers});
		}
	}
	
	let questions = arr.reduce((prev, curr, i) => {
		let newObj = {
			type: 'input',
			name: 'q' + i, 
			message: util.removeDot(curr.question),
			response: util.removeDot(curr.answers)
		}
		//validate:
		newObj['validate'] = function(value){
			if(value.toLowerCase() === newObj.response.toLowerCase()){
				util.clean();
				console.log(chalk.green('\n 👊 (• ͜ʖ•)'));
				return true;
			}else{
				util.clean();
				console.log(chalk.red('\n  Você esqueceu! (╯°□°）╯ a resposta é ' + chalk.yellow(newObj.response)) + '\n');
				return false;
			}
		}
		prev.push(newObj);
		return prev	
	}, []);

	return questions
}