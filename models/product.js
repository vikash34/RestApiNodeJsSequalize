const Sequelize = require('sequelize');
const sequelize = require('../sqldb/database');

const Product = sequelize.define('prod',{
    id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNUll:false,
    primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
    },
    price:{
        type:Sequelize.DOUBLE,
    },
    imageUrl:{
        type:Sequelize.STRING,
    },
    description:{
        type:Sequelize.STRING,
    }
});

module.exports = Product;

