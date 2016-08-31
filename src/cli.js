'use strict';
import meow  from 'meow';
import chalk from 'chalk';

const MessageCLI = `
          ${chalk.blue('Usage')}
            $ asciilang ${chalk.red('<command>')} is one of:
              ${chalk.red('start')}

          ${chalk.blue('Options')}
            -h, --help       show usage information
            -v, --version    print version info and exit
            ${chalk.red('s')} Start application

          ${chalk.blue('Examples')}
            ${chalk.yellow('$ asciilang start')}
              or
            ${chalk.yellow('$ asciilang s')}

      `;

export const m = meow(MessageCLI, {
        alias: { h: 'help', v: 'version'},
        string: ['lang'],
        boolean: ['pager'],
        default: { lang: 'en' },
        '--': true
});

const cli = (action, flags) => action === 'start' || action === 's' ? 'start' : false;

export const cliStart = () => {
  if(cli(m.input[0], m.flags) == 'start'){
    return true;
  }else{
    console.log(`
    ${chalk.black.bgBlue('（っ＾▿＾）asciilang ')}
    ${chalk.green('👊 Foreign languages for developers')}
    ${MessageCLI}
    `);
    return false;
  }
}