'use stric';
const inquirer = require('inquirer');
const chalk    = require('chalk');
const fs = require('fs');

let categories = ['common-expressions', 'greetings', 'travels', 'numbers']; //etc
let phrases = [];

//comon-expressions
let readPhrases = fs.readFileSync('phrases/expressoes-comuns-pt-eng.txt', "utf-8")
	.split('\n')
	.filter((n) => n != '')
	.map((line) => line.trim());

var arr = [];
var newObj = {};
for(var i = 0; i < readPhrases.length; i++){
	if(i % 2 == 0)
		newObj['question'] = readPhrases[i];
	else{
		newObj['answers'] = readPhrases[i];
		arr.push({question: newObj.question, answers: newObj.answers});
	}
}

// console.log(arr);
let questions = arr.reduce((prev, curr, i)=>{
	// if(i % 2 != 0){
		var newObj = {type: 'input', name: 'q'+(i+1), message: curr.question}
		// console.log(newObj)
		prev.push(newObj);
	// }
	return prev	
}, [])

console.log(questions);
/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
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

console.log(chalk.red('Traduza para o inglês: '));

inquirer.prompt(questions).then(function (answers) {
		
});
