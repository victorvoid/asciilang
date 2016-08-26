'use strict';
const inquirer = require('inquirer');
const chalk    = require('chalk');
const user     = require('./user');
const util     = require('./util');

let usrModel = {
	mylang: '',
	level: 0
};

let questions = [
  {
    type: 'list',
    name: 'mylang',
    message: 'I speak',
    choices: [
      'Português'
      // new inquirer.Separator(),
      // { 
      //   name: 'Inglês',
      //   disabled: 'Wished. Contributors welcome.'
      // },
      // {
      //   name: 'Espanhol',
      //   disabled: 'Wished. Contributors welcome.'
      // }
    ]
  },
  {
    type: 'list',
    name: 'category',
    message: 'Selecione uma categoria para praticar',
    when: function(answers){
      return answers.mylang === 'Português'
    },
    choices:['Expressões comuns', 'Cumprimentos', 'Fazendo amigos', 'Aleatório'],
    default: function(){
      util.clean();
    }
  }
];

//start
util.clean();
console.log('Welcome to the ' + chalk.blue('asciilang'));

inquirer.prompt(questions).then(function (answers) {
  usrModel.mylang = answers.mylang;
  if(user.hasUser(usrModel.mylang)){
    require('./app')(answers.category) //starting
  }
  else{
    user.saveUser(usrModel);
  }
});