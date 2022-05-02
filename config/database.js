import {Sequelize} from "sequelize";

const DB = new Sequelize("payment","root","",{
    host : "localhost",
    dialect : "mysql",
});

export default DB;