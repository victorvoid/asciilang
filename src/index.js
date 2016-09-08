#!/usr/bin/env node
'use strict';
import inquirer from 'inquirer';
import chalk from 'chalk';
import user from './user';
import {util} from './util';
import languages from './languages';
import {init} from './app';
import meow  from 'meow';
import {m, cliStart} from './cli';
import {startCategory} from './categories';
import notifier from 'node-notifier';
if(cliStart()){
  util.clean();
  notifier.notify({
    'title': 'Asciilang',
    'message': 'Hello, there! Welcome to the asciilang (˘◡˘)۶'
  });
  console.log(`Welcome to the ${chalk.blue('asciilang')}`);
  let langUser;
  let usrModel = {
  	mylang: '',
  	level: 0
  };

  let mylang = [
    {
      type: 'list',
      name: 'mylang',
      message: 'What do you wanna practice ?',
      choices: [
        {
          name: "Português",
          value: "pt"
        },
        { name: "English",
          value: "eng"
        }
      ]
    }
  ];
    if(!!m.flags.pt || !!m.flags.eng){
        langUser = m.flags.pt ? languages.PTBR: m.flags.eng ? languages.ENG: null;
        util.clean();
        startCategory(langUser);
    }else{
        inquirer.prompt(mylang).then(answers => {
            usrModel.mylang = answers.mylang;
            switch(usrModel.mylang){
            case "eng":
                langUser = languages.ENG;
                break;
            case "pt":
                langUser = languages.PTBR;
                break;
            default:
                console.log('/o/ not');
                break;
            }
            util.clean();
            startCategory(langUser);
        });
    }
}

