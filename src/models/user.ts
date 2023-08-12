const { Model, DataTypes} = require ('sequelize');

class users extends Model{
    static init(sequelize){
        super.init({
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            is_active: DataTypes.BOOLEAN,
            profile_id: DataTypes.INTEGER,

        }, {
            sequelize
        });
    }
}

module.exports = users;