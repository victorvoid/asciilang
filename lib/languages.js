'use strict';

function define(name, value) {
	Object.defineProperty(exports, name, {
		value: value,
		enumerable: true
	});
}
define("ENG", {
	lan: 'eng',
	categories: ['Common Expressions', 'Greetings', 'Making friends'],
	messages: {
		translatetoptbr: 'Translate to portuguese (╯°□°）╯',
		translatetoeng: 'Translate to english (╯°□°）╯',
		messageCategory: 'Select a category to practice'
	}
});

define("PTBR", {
	lan: 'ptbr',
	categories: ['Expressões comuns', 'Cumprimentos', 'Fazendo amigos'],
	messages: {
		translatetoptbr: 'Traduza para o português (╯°□°）╯',
		translatetoeng: 'Traduza para o inglês (╯°□°）╯',
		messageCategory: 'Selecione uma categoria para praticar'
	}
});