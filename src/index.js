'use strict';

import inquirer from 'inquirer';
import chalk from 'chalk';
import user from './user';
import {util} from './util';
import languages from './languages';
//start
util.clean();
console.log('Welcome to the ' + chalk.blue('asciilang'));
let langUser;

let usrModel = {
	mylang: '',
	level: 0
};

let mylang = [
  {
    type: 'list',
    name: 'mylang',
    message: 'I speak',
    choices: [
      { 
        name: "Português",
        value: "ptbr"
      },
      { name: "English", 
        value: "eng"
      }
    ]
  }
];

inquirer.prompt(mylang).then(function (answers) {

  usrModel.mylang = answers.mylang;
    switch(usrModel.mylang){
      case "eng":
        langUser = languages.ENG;
        break;
      case "ptbr":
        langUser = languages.PTBR;
        break;
      default:
        console.log('/o/ not');
        break;
    }

    start(langUser);
});

let start = (langUsr) => {
  let questions = [
    {
      type: 'list',
      name: 'category',
      message: langUsr.messages.messageCategory,
      choices: langUsr.categories,
      default: function(){
        util.clean();
      }
    }
  ];

  inquirer.prompt(questions).then(function (answers) {
    require('./app')(answers.category, langUsr)//starting
  });
}

