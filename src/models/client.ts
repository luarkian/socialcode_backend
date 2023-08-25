const { Model, DataTypes} = require ('sequelize');
import Address from './address'; 


class Client extends Model {

    static init(sequelize){
        super.init({
            business_name: DataTypes.STRING,
            fantasy_name: DataTypes.STRING,
            municipal_registration: DataTypes.STRING,
            state_registration: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            celphone: DataTypes.STRING,
            address_id: DataTypes.INTEGER
            }, {
            sequelize,
        modelName: 'client',
        });
        
        return this;
    }
    static associate() {
        Client.hasOne(Address, { 
            constraint: true,
            foreignKey: 'address_id',
            onDelete: 'cascade' });
    }

}
export default Client;
