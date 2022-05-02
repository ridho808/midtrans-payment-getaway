import express from "express";
import { DataOrder, GetAllProduct, OrderBarang, PostData } from "../controller/service.js";

const Router = express.Router();

Router.get('/',GetAllProduct);
Router.post('/post',PostData);
Router.get('/dataorder',DataOrder);
Router.post('/payment',OrderBarang);

export default Router;