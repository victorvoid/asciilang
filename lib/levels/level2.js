// function(arrQuestions, lang){
// 	let level = arrQuestions
// 		.slice(10, 20)
// 		.map(function(val) {
// 			let message = val.message;
// 			val['message'] = val['response'];
// 			val['response'] = message;
// 			return val;
// 		});	/* reverse message and reply */
// 	console.log(chalk.yellow(lang)); //translate to ..[lang]
// 	inquirer.prompt(level).then(function (answers) {
// 		console.log(chalk.green('Parabéns Você conseguiu completar 10 frases ᕙ(`▿´)ᕗ '));
// 		console.log(chalk.yellow('Vá descansar! Daqui a pouco te chamo de novo (͠≖ ͜ʖ͠≖)👌'));
// 		setTimeout(function(){
// 			console.log('Pronto... vamos praticar!')
// 		}, 5000);
// 	});
// }
"use strict";