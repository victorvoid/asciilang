'use strict';
import chalk from 'chalk';
import * as levels from './levels';
import {util} from './util';
import languages from './languages';
import {Questions} from './questions.js';

let arrQuestions;
export const init = (category, lang) => {
	util.clean();
	switch(category){
		case lang.categories[0]: /** Common Expression ☜(ˆ▿ˆc) **/
			arrQuestions = Questions('/phrases/common-expressions-pt-eng.txt');
			break;
		case lang.categories[1]: /** Greetings (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/greetings-pt-eng.txt');
			break;
		case lang.categories[2]: /** Greetings (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/making-friends-pt-eng.txt');
			break;
	}

	util.shuffle(arrQuestions);
	//start levels
	levels['Level1'](arrQuestions, (() => 
		lang.lan === 'ptbr' ? 
		languages.PTBR :
		languages.ENG
	)());
}