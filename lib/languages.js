function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}
define("ENG", {
	categories: ['Common Expressions', 'Greetings', 'Making friends'],
	message: 'Translate to English (╯°□°）╯'
});

define("PTBR", {
	categories: ['Expressões comuns', 'Cumprimentos', 'Fazendo amigos'],
	message: 'Traduza para o inglês (╯°□°）╯'
});