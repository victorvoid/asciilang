'use strict';

const inquirer = require('inquirer');
const chalk = require('chalk');
const user = require('./user');
const util = require('./util');
const languages = require('./languages');
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
  console.log('test', usrModel);;
    switch(usrModel.mylang){
      case "eng":
        langUser = languages.ENG;
        break;
      case "ptbr":
        console.log('ptbrrrr!');
        langUser = languages.PTBR;
        console.log('lanuser: ',languages);
        break;
      default:
        console.log('nenhum..');
        break
    }

    start(langUser);
});

let start = (langUsr) => {
  console.log('teste');
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

