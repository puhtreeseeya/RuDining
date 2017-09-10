'use strict'; 

const User = require('./users.js'); 

User.belongsToMany(User, {as: 'friend', through: 'userToUser'}); 

module.exports = {User}; 