module.exports = { 
  hasUser: function(user){
    let data = fs.readFileSync('./user.json'),
        myObj;
    try {
      myObj = JSON.parse(data);
      return myObj.name === user;
    }
    catch (err) {
      console.log('There has been an error parsing your JSON.')
      console.log(err);
    }
  },
  saveUser: function (usrModel){
    let userdata = JSON.stringify(usrModel);
    console.log('sdsdsds');
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