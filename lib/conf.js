'use strict';

var next = function next(callback) {
	var questions = [{
		type: 'list',
		name: 'isnext',
		message: 'Escolha o que deseja',
		choices: ['Próximo nível', 'Descansar', 'Repetir nível']
	}];
	inquirer.prompt(questions).then(function (answers) {
		callback(answers.isnext);
	});
};

var nextLevel = function nextLevel(level, arrQuestions, lang) {
	levels.level2(arrQuestions, function () {
		return lang.lan === 'ptbr' ? languages.PTBR.messages['translatetoptbr'] : languages.ENG.messages['translatetoptbr'];
	}());
};

var rest = function rest(seg) {
	setTimeout(function () {
		console.log('Pronto... vamos praticar!');
	}, min * 1000);
};