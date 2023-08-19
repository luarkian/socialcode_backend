const Sequelize = require('sequelize');
const configDB =  require('../config/db');
import users  from '../models/user';
import addressModel  from '../models/address';
import clientModel  from '../models/client';
//import orderServiceModel from "../models/order_service";
//import profileModel from "../models/profile";
//import statusServiceModel from "../models/status_service";

const connection = new Sequelize(configDB);
const models = [users, addressModel, clientModel ];

models.map(model => model.init(connection));



export default connection;