module.exports = function(file){	
	const fs = require('fs');
	const util = require('./util');
	const chalk    = require('chalk');

	let category = ['common-expressions', 'greetings', 'travels', 'numbers']; //etc
	let phrases = [];
	let arr = [];
	let newObj = {};

	//comon-expressions
	let readPhrases = fs.readFileSync(file, "utf-8")
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
			if(value === newObj.response){
				console.log(chalk.green('\n 👊 (• ͜ʖ•)'));
				return true;
			}else{
				console.log(chalk.red('\n  Você esqueceu! (╯°□°）╯ a resposta é ' + chalk.yellow(newObj.response)) + '\n');
				return false;
			}
		}
		prev.push(newObj);
		return prev	
	}, []);

	return questions
}