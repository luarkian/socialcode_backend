const Sequelize = require('sequelize');
const configDB =  require('../config/db');
const userModel = require ('../models/user');
const address = require('../models/address');
const client = require('../models/client');
const orderService = require('../models/order_service');
const profile = require('../models/profile');
const statusService = require('../models/status_service');

const connection = new Sequelize(configDB);

userModel.init(connection);

module.exports = connection;