const { Model, DataTypes} = require ('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            is_active: DataTypes.BOOLEAN,
            profile: DataTypes.INTERGER,

        }, {
            sequelize
        });
    }
}

module.exports = User;