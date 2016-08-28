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

let nextLevel = (level, arrQuestions, lang) =>{
	levels.level2(arrQuestions,  (() => 
		lang.lan === 'ptbr' ? 
		languages.PTBR.messages['translatetoptbr'] :
		languages.ENG.messages['translatetoptbr']
	)());
}

let rest = (seg) => {
	setTimeout(function(){
		console.log('Pronto... vamos praticar!')
	}, min*1000);
}
