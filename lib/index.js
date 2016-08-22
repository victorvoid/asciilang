'use strict';
const notifier = require('node-notifier');
const inquirer = require('inquirer');
const chalk    = require('chalk');
const path     = require('path');
const http     = require('http');
const fs       = require('fs');
const user     = require('./user');
const app      = require('./app');

let usrModel = {
	name: '',
	learnlang: '',
	level: 0
};

let questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Qual é o seu Nome ? (Seus dados serão salvos pelo seu nome)'
  },
  {
    type: 'list',
    name: 'learnlang',
    message: 'Qual idioma quer praticar ?',
    choices: [
      'Inglês',
      new inquirer.Separator(),
      {
        name: 'Espanhol',
        disabled: 'não está disponível no momento =('
      }
    ]
  }
];

console.log(user);

console.log('Seja bem vindo ao ' + chalk.blue('lean-languages-terminal'));

inquirer.prompt(questions).then(function (answers) {
  usrModel.name = answers.name;
  usrModel.learnlang = answers.learnlang;
  if(user.hasUser(usrModel.name))
    app.start();
  else
    user.saveUser(usrModel);
});