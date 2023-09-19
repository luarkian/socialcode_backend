const { Model, DataTypes} = require('sequelize');
const Client = require('./client'); 
const User = require('./user'); 
const Status = require('./status_service'); 

class OrderService extends Model {
 
    static init(sequelize){
        super.init({
            client_id: DataTypes.INTEGER,
            status_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            repair_request: DataTypes.STRING,
            solution: DataTypes.STRING,
            description:DataTypes.STRING

            }, {
            sequelize,
            tableName: 'order_service',
            });

            return this;
        }
        static associate() {
            OrderService.hasOne(Status, { 
                constraint: true,
                foreignKey: 'status_id' });

            OrderService.hasOne(User, { 
                constraint: true,
                foreignKey: 'user_id' });    
                    
            OrderService.hasOne(Client, { 
                constraint: true,
                foreignKey: 'client_id' });

        }
}   
export default OrderService;