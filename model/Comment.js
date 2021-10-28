// the required dependencies for the file
const {Model,DataTypes} = require('sequelize')
const sequelize = require('..//config/connection')

class Comment extends Model {}
Comment.init({
        // the column ID
        id: {
            // Integer
            type: DataTypes.INTEGER,
            // Doesn't allow null values
            allowNull: false,
            // Set as primary key
            primaryKey: true,
            // Uses auto increment
            initialAutoIncrement: true
          },
        //   user_id int not null,
        // foreign key (user_id) references user_(id)
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'user_',
                key:'id'
            }
        },
        // comment varchar(30),
        comment:{
            type: DataTypes.STRING
        }
    })

module.exports = Comment
