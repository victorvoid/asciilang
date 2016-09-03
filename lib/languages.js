'use strict';

function define(name, value) {
	Object.defineProperty(exports, name, {
		value: value,
		enumerable: true
	});
}
define("ENG", {
	lan: 'eng',
	categories: ['Common Expressions', 'Greetings', 'Making friends', 'Travel, directions', 'Numbers and money', 'Location', 'Phone/internet/mail', 'Time and dates', 'Accommodatinos', 'Dining', 'Entertainment', 'Shopping', 'Communiction difficulties', 'Emergency and health', 'General questions', 'Work', 'Weather'],
	messages: {
		translatetoptbr: 'Translate to portuguese (╯°□°）╯',
		translatetoeng: 'Translate to english (╯°□°）╯',
		messageCategory: 'Select a category to practice'
	}
});

define("PTBR", {
	lan: 'ptbr',
	categories: ['Expressões comuns', 'Cumprimentos', 'Fazendo amigos', 'Viagens, direções', 'Números e dinheiro', 'Localização', 'Telefone/internet/correio', 'Hora e data', 'No hotel', 'Hora da refeição', 'Se divertindo', 'Nas compras', 'Dificuldades na comunicação', 'Emergência e saúde', 'Questões gerais', 'No trabalho', 'O tempo'],
	messages: {
		translatetoptbr: 'Traduza para o português (╯°□°）╯',
		translatetoeng: 'Traduza para o inglês (╯°□°）╯',
		messageCategory: 'Selecione uma categoria para praticar'
	}
});