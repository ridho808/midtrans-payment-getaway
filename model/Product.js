import {Sequelize} from "sequelize";
import DB from "../config/database.js";

const {DataTypes} = Sequelize;
const Product = DB.define("Product",{
    Barang : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    Price : {
        type : DataTypes.INTEGER,
        allowNull : false,
    }
},{
    freezeTableName : true
});
export default Product;