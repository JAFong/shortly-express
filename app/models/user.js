var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      console.log("Inside initialize on creating: ")
      bcrypt.genSalt(5, function(err, salt) {
        console.log("Inside Salt");
        if (err) console.log(err);
        bcrypt.hash(this.password, salt, null, function(err, hashedPassword) {
          if (err) console.log(err);
          console.log("Setting model.password and model.salt");
          console.log(model.get('username'));
          model.set('password', hashedPassword);
          model.set('salt', salt);
        });
      });
    });
  }
  // hashPassword: function() {
  //   console.log("Inside User.hashPassword with argument: " + this.password);
  //   bcrypt.genSalt(16, function(err, salt) {
  //     bcrypt.hash(this.password, salt, null, function(err, hashedPassword) {
  //       console.log("bcrypt.hash with: \nSalt: " + salt + "\nPassword: " + hashedPassword);
  //       return hashedPass
  //     });
  //   });
  // }
});

module.exports = User;
