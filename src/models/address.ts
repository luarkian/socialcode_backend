const { Model, DataTypes} = require('sequelize');
import Client from './client';

class Address extends Model {
 
    static init(sequelize){
        super.init({
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            cep: DataTypes.STRING,
            complement: DataTypes.STRING,
            }, {
                sequelize,
                modelName: 'Address',
                tableName: 'address'
            });
           // this.hasOne(Client, { foreignKey: 'address_id' });
            return this;
        }
    static associate(){
           Address.belongsTo(Client, { foreignKey: 'address_id' });
       }    
}   
export default Address;