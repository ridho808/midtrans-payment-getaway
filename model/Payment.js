import { Sequelize } from "sequelize";
import DB from "../config/database.js";
import Product from "./Product.js";
const{DataTypes} = Sequelize;
const Order = DB.define("Order",{
    id :{
        type : DataTypes.STRING,
        primaryKey : true
    },
    nama :{
        type: DataTypes.STRING,
        allowNull : false
    },
    Barang_id :{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    ,
    Res_Midtrans:{
        type : DataTypes.TEXT,
        allowNull : false,
    }
},{
    freezeTableName:true
});
Order.hasMany(Product,{foreignKey:"barang_id"})
export default Order;