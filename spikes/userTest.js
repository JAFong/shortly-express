var db = require('../app/config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var User = require('../app/models/user');

// console.log(User);
// return User.hashPassword('password');
var newUser = new User();
console.log(newUser.hashPassword('password', function(hash) {
  return hash;
}));
