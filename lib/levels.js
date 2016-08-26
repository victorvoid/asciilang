const inquirer = require('inquirer');
const chalk    = require('chalk');
const util     = require('./util');

let next = (callback) => {
	let questions = [
		{
		    type: 'list',
		    name: 'isnext',
		    message: 'Escolha o que deseja',
		    choices: ['Próximo nível', 'Descansar', 'Repetir nível']
		}
	];
	inquirer.prompt(questions).then(function (answers) {
		callback(answers.isnext)
	});
}

let nextLevel = (level) =>{
	levels.level1();
}

let rest = (seg) => {
	setTimeout(function(){
		console.log('Pronto... vamos praticar!')
	}, min*1000);
}

let levels = {
	leveltest: function(arrQuestions){
		let teste = arrQuestions.slice(0, 1);
		inquirer.prompt(teste).then(function(answers) {
			util.clean();
			console.log(chalk.green('Parabéns Você conseguiu completar 10 frases ᕙ(`▿´)ᕗ '));
			let isnext = next(function(response){
				switch(response){
					case "Próximo nível":
						nextLevel(1);
						break;
					case "Descansar":
						rest();
						break
					case "Repetir nível":
						console.log('Repetir !!!!');
						break;
				}
			});
		});
	},
	level1: function(arrQuestions){
		let level = arrQuestions.slice(0, 10);
		inquirer.prompt(level).then(function (answers) {
			console.log(chalk.green('Parabéns Você conseguiu completar 10 frases ᕙ(`▿´)ᕗ '));
			console.log(chalk.yellow('Vá descansar! Daqui a pouco te chamo de novo (͠≖ ͜ʖ͠≖)👌'));
			setTimeout(function(){
				console.log('Pronto... vamos praticar!')
			}, 5000);
		});
	},
	level2: function(){
		console.log('uow level2');
	}
}

module.exports = levels;