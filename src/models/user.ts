const { Model, DataTypes} = require ('sequelize');
const bcrypt = require ('bcryptjs');

class users extends Model{
    static init(sequelize){
        super.init({
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            username: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            is_active: DataTypes.BOOLEAN,
            profile_id: DataTypes.INTEGER,

        }, {
            sequelize
        });
        this.addHook('beforeSave', async user => {
            if(user.password){
                user.password = await bcrypt.hash(user.password,8);
            }
        });
        return this;
    }
        checkPassword(password){
            return bcrypt.compare(password, this.password);
        }
}

export default users;