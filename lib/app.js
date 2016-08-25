'use stric';
const inquirer = require('inquirer');
const chalk    = require('chalk');
const fs = require('fs');

const levels = require('./levels');

(function(){

	let categories = ['common-expressions', 'greetings', 'travels', 'numbers']; //etc
	let phrases = [];
	//comon-expressions
	let readPhrases = fs.readFileSync('phrases/expressoes-comuns-pt-eng.txt', "utf-8")
		.split('\n')
		.filter((n) => n != '')
		.map((line) => line.trim());

	let arr = [];
	let newObj = {};
	let countPhrases = readPhrases.length;
	for(var i = 0; i < countPhrases; i++){
		if(i % 2 == 0)
			newObj['question'] = readPhrases[i];
		else{
			newObj['answers'] = readPhrases[i];
			arr.push({question: newObj.question, answers: newObj.answers});
		}
	}

	let removeDot = (line) => line.slice(0, line.indexOf(line[line.length-1]));
	let questions = arr.reduce((prev, curr, i) => {
		let newObj = {
			type: 'input',
			name: 'q' + i, 
			message: removeDot(curr.question),
			response: removeDot(curr.answers)
		}
		//validate:
		newObj['validate'] = function(value){
			if(value == newObj.response){
				console.log(chalk.green('\n ✔'));
				return true;
			}
			else{
				console.log(chalk.red('   Você esqueceu! (╯°□°）╯ a resposta é ' + chalk.yellow(newObj.response)) + '\n');
				return false;
			}
		}
		prev.push(newObj);
		return prev	
	}, []);

	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i--) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}

	shuffle(questions);
	
	/*        LEVELS         */
	
	let level1 = questions.slice(0, 10); //10 questions: PT -> ENG
	let level2 = questions.slice(10, 20); //10 question: ENG -> PT
	let leveltest = questions.slice(0, 1);

	/*        LEVEL 1!       */
	console.log(chalk.yellow('Traduza para o inglês (╯°□°）╯'));
	inquirer.prompt(leveltest).then(function (answers) {
		console.log(chalk.green('Você conseguiu completar 10 frases ᕙ(`▿´)ᕗ '));
		console.log(chalk.green('Vá descansar! Daqui a pouco te chamo de novo (͠≖ ͜ʖ͠≖)👌'));
		setTimeout(function(){
			console.log('Pronto... vamos praticar!')
			levels.level2();
		}, 5000);
	});
})();