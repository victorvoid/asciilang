module.exports = {
	leveltest: function(){
		const arrQuestions = require('./questions')('phrases/common-expressions-pt-eng.txt');
		return arrQuestions.slice(0, 1);
	},
	level1: function(arrQuestions){
		return arrQuestions.slice(0, 10);
	},
	level2: function(){
		console.log('uow level2');
	}
}