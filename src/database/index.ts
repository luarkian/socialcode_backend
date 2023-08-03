const Sequelize = require('sequelize');
const configDB =  require('../config/database');
const user = require ('../models/user');

const connection = new Sequelize(configDB);

user.init(connection);

module.exports = connection;