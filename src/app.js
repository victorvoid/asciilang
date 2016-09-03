'use strict';
import chalk from 'chalk';
import * as levels from './levels';
import {util} from './util';
import languages from './languages';
import {Questions} from './questions.js';

let arrQuestions;
/*
	'Common Expressions', 
	'Greetings', 
	'Making friends', 
	'Travel, directions', 
	'Numbers and money', 
	'Location', 
	'Phone/internet/mail', 
	'Time and dates', 
	'Accommodatinos', 
	'Dining', 
	'Entertainment', 
	'Shopping', 
	'Communiction difficulties', 
	'Emergency and health', 
	'General questions', 
	'Work', 
	'Weather'
*/
export const init = (category, lang) => {
	util.clean();
	switch(category){
		case lang.categories[0]: /** Common Expression ☜(ˆ▿ˆc) **/
			arrQuestions = Questions('/phrases/common-expressions-pt-eng.txt');
			break;
		case lang.categories[1]: /** Greetings (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/greetings-pt-eng.txt');
			break;
		case lang.categories[2]: /** Making friends (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/making-friends-pt-eng.txt');
			break;
		case lang.categories[3]: /** Travel, directions(👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/travel-directions-pt-eng.txt');
			break;
		case lang.categories[4]: /** Numbers and money (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/numbers-money-pt-eng.txt');
			break;
		case lang.categories[5]: /** Location (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/location-pt-eng.txt');
			break;
		case lang.categories[6]: /** Phone/internet/mail (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/phone-internet-pt-eng.txt');
			break;
		case lang.categories[7]: /** Time and dates (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/time-dates-pt-eng.txt');
			break;
		case lang.categories[8]: /** Accommodatinos (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/accommodations-pt-eng.txt');
			break;
		case lang.categories[9]: /** Dining (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/dining-pt-eng.txt');
			break;
		case lang.categories[10]: /** Entertainment (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/entertainment-pt-eng.txt');
			break;
		case lang.categories[11]: /** Shopping (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/shopping-pt-eng.txt');
			break;
		case lang.categories[12]: /** Communiction difficulties (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/communication-difficulties-pt-eng.txt');
			break;
		case lang.categories[13]: /** Emergency and health (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/emergency-health-pt-eng.txt');
			break;
		case lang.categories[14]: /** General questions (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/general-questions-pt-eng.txt');
			break;
		case lang.categories[15]: /** Work (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/work-pt-eng.txt');
			break;
		case lang.categories[16]: /** Weather (👍≖‿‿≖)👍 \(≖‿‿≖\) **/
			arrQuestions = Questions('/phrases/weather-pt-eng.txt');
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