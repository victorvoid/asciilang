# asciilang ᕙ(`▿´)ᕗ

[![NPM version][npm-image]][npm-url] 

[npm-image]: https://badge.fury.io/js/asciilang.svg
[npm-url]: https://npmjs.org/package/asciilang

> Pratique idiomas pelo terminal.

*:uk: [Jump to the English version](README-eng.md)* (¬‿¬)

Você precisa abrir o terminal diariamente ? Se você tem como rotina usar o terminal, seja pra compilar algo ou pra fazer tarefas, que tal aproveitar o nosso amigo para praticar um idioma ? Com asciilang fica mais fácil e totalmente offline.

## Instalação

Instale o `asciilang` usando [npm](https://www.npmjs.com/) (vamos supor que você tenha pré-instalado [node.js](https://nodejs.org/)).

```bash
npm install -g asciilang
```

Idiomas que vem por padrão:

- Inglês
- Português

Categorias disponíveis para praticar:

- `Common Expressions`
- `Greetings`
- `Making friends`
- `Travel, directions`
- `Numbers and money`
- `Location`
- `Phone/internet/mail`
- `Time and dates`
- `Accommodatinos`
- `Dining`
- `Entertainment`
- `Shopping`
- `Communiction difficulties`
- `Emergency and health`
- `General questions`
- `Work`
- `Weather`

## Uso

```bash
$ asciilang --help
```

```bash
$ asciilang start
```

## Contribua ( ◡́.◡̀)\(^◡^ )

O `asciilang` está aberto para receber qualquer contribuição, seja ela com um novo nível, com mais frases, links de textos com áudio, módulos para outros idiomas ou qualquer outras sugestões. (✿◠‿◠) 

### Como criar um nível

```js
import inquirer from 'inquirer';
import chalk from 'chalk';
import {util} from './util';
import {startCategory} from './categories';
import {next, nextLevel, rest} from './levelsfuncs';

export default function LevelX(arrQuestions, lang){
	/* arrQuestions é um array de objetos com perguntas e respostas que foi escolhido, com isso 
	você pode usar sua imaginação e criar suas próprias questões a partir dela. Nesse exemplo pra 
	facilitar	peguei apenas 10 perguntas e usei sem fazer manipulações (como por exemplo 
	criar questões para a pessoa completar a frase, inverter palavras, inverter respostas, etc). */
	let level = arrQuestions.slice(0, 10); 
	inquirer.prompt(level).then( answers => {
		util.clean(); //limpa o terminal
		/*next(call) -> lista opções que podem ser escolhidas depois de acabar o nível,
		se deseja ir pro próximo, descansar, repetir ou ir para outra categoria*/
		next(response => { 
			switch(response){
				case "Próximo nível":
				 //passe o número do próximo nível, array das questões e aa lang
					nextLevel(2, arrQuestions, lang);
					break;
				case "Descansar para o próximo nível":
					rest(600, () => { //quantidade de segundos para descansar
						nextLevel(2, arrQuestions, lang);
					});
					break;
				case "Repetir nível":
					nextLevel(1, arrQuestions, lang);
					break;
				case "Escolher outra categoria":
					startCategory(lang) //pede a categoria novamente do usuário
					break;
			}
		});
	});
}
```

### Execute

|NPM scripts| Description
|---|---|
| `npm run build` | to build an optimized version of your application in /dist
| `npm run dev` | build with watch
| `npm run test` | to launch your tests with mocha

## License

MIT © [Victor Igor](https://github.com/VictorVoid/)

