'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
        }
    }
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: true
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: true
        },
        signup_token: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_activated: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'user',
        timestamps: false
    });

    return User;
}