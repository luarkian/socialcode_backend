const { Model, DataTypes} = require('sequelize');
const client = require('./client'); 

class address extends Model {
 
    static init(sequelize){
        super.init({
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            cep: DataTypes.STRING,
            complement: DataTypes.STRING,
            }, {
            sequelize,
            tableName: 'address'
            });

            return this;
        }
    static associate(models){
            address.belongsTo(models.client, { foreignKey: 'address_id' }); 
        }    
}   
export default address;