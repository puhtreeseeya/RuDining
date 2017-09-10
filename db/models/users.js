'use strict'; 
var Sequelize = require('sequelize'); 
var db = require('../index.js'); 

module.exports = db.define('user', {
  username: {
    type: Sequelize.STRING, 
    allowNull: false, 
    validate: { notEmpty: true }
  }, 
  password: {
    type: Sequelize.STRING, 
    allowNull: false, 
    validate: { notEmpty: true }
  }, 
  latitude: {
    type: Sequelize.INTEGER, 
    allowNull: true, 
    defaultValue: null, 
    validate: { min: -90, max: 90}
  }, 
  longitude: {
    type: Sequelize.INTEGER, 
    allowNull: true, 
    defaultValue: null, 
    validate: { min: -180, max: 180 }
  }
})