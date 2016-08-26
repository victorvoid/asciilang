const fs = require('fs');
module.exports = { 
  hasUser: function(user){
   var obj = JSON.parse(fs.readFileSync('./user.json', 'utf8'));
   if(obj.mylang != ''){
    return true;
   }
   return false;
  },
  saveUser: function (usrModel){
    let userdata = JSON.stringify(usrModel);
  	//Data User
    fs.writeFile('./user.json', userdata, function (err) {
        if (err) {
          console.log('There has been an error saving your configuration data.');
          console.log(err.message);
          return;
        }
        console.log('User saved successfully.')
    });
  }
}