import inquirer from 'inquirer';
import {util} from './util';
import {init} from './app';

export const startCategory = langUsr => {
    let questions = [
      {
        type: 'list',
        name: 'category',
        message: langUsr.messages.messageCategory,
        choices: langUsr.categories
      }
    ];

    inquirer.prompt(questions).then(answers => {
      init(answers.category, langUsr);//starting
    });
}