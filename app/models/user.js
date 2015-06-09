var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function() {
    this.hashPassword(function() {
    }.bind(this));
  },

  hashPassword: function(cb) {
    var model = this;
    console.log("Inside initialize on creating: ")
    bcrypt.genSalt(5, function(err, salt) {
      console.log("Inside Salt");
      if (err) console.log(err);
      bcrypt.hash(model.get('password'), salt, null, function(err, hashedPassword) {
        if (err) console.log(err);
        model.set('password', hashedPassword);
        model.set('salt', salt);
        console.log("Password: ", model.get('password'));
        cb();
      });
    });
  },

  authenticate: function(password, callback) {
    bcrypt.compare(password, this.get('password'), function(err, res) {
      callback(res);
    }.bind(this));
  }

});

module.exports = User;
