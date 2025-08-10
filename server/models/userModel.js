const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs"); 

class User extends Model {
    async validatePassword(password) {
        return await bcrypt.compare(password, this.password); 
    }
}

module.exports = (sequelize) => {

    User.init({

        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4, 
            primaryKey: true, 
        },
        
        username: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                notNull: { msg: "Merci d'indiquer un nom d'utilisateur valide."}
            }, 
            unique: true, 
        }, 

        password: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true, 
            }
        }

    }, {
        sequelize, 
        modelName: "User", 
        tableName: "users", 
        hooks: {
            beforeSave: async (user) => {
                const salt = await bcrypt.genSalt(10); 
                user.password = await bcrypt.hash(user.password, salt); 
            }
        }
    }); 

    return User; 

}