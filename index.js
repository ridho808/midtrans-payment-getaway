import express from "express";
import DB from "./config/database.js";
import Router from "./routers/Routers.js";


const App =express();
const port = 3000;

try {
    DB.authenticate();
    console.log("Database connect!!")
} catch (error) {
    console.error(error)
}

App.use(express.json());
App.use(Router);
App.listen(port,()=>{
    console.log("connected")
});

