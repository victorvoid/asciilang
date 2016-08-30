'use strict';

var _fs = require('fs');

module.exports = {
  hasUser: function hasUser(user) {
    var obj = JSON.parse((0, _fs.readFileSync)('./user.json', 'utf8'));
    if (obj.mylang != '') {
      return true;
    }
    return false;
  },
  saveUser: function saveUser(usrModel) {
    var userdata = JSON.stringify(usrModel);
    //Data User
    (0, _fs.writeFile)('./user.json', userdata, function (err) {
      if (err) {
        console.log('There has been an error saving your configuration data.');
        console.log(err.message);
        return;
      }
      console.log('User saved successfully.');
    });
  }
};