import {readFileSync, writeFile} from 'fs';
module.exports = { 
  hasUser: user => {
    let obj = JSON.parse(readFileSync('./user.json', 'utf8'));
    if(obj.mylang != ''){
      return true;
    }
    return false;
  },
  saveUser: usrModel => {
    let userdata = JSON.stringify(usrModel);
  	//Data User
    writeFile('./user.json', userdata, err => {
        if (err) {
          console.log('There has been an error saving your configuration data.');
          console.log(err.message);
          return;
        }
        console.log('User saved successfully.')
    });
  }
}