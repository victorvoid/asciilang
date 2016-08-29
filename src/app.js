'use strict';
const chalk    = require('chalk');
const levels = require('./levels/index').levels;
const util = require('./util');
const languages = require('./languages');
let arrQuestions;
let app = (category, lang) => {
	util.clean();
	switch(category){
		case lang.categories[0]: /** Common Expression ☜(ˆ▿ˆc) **/
			arrQuestions = require('./questions')('phrases/common-expressions-pt-eng.txt');
			break;
		case lang.categories[1]: /** Greetings (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = require('./questions')('phrases/greetings-pt-eng.txt');
			break;
	}

	util.shuffle(arrQuestions);
	let level1 = levels.level1(arrQuestions, (() => 
		lang.lan === 'ptbr' ? 
		languages.PTBR.messages['translatetoeng'] :
		languages.ENG.messages['translatetoeng']
	)());
	// let level2 = levels.level2(arrQuestions, (() => 
	// 	lang.lan === 'ptbr' ? 
	// 	languages.PTBR.messages['translatetoptbr'] :
	// 	languages.ENG.messages['translatetoptbr']
	// )());
}

module.exports = app;