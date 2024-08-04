import { Router } from "express";
import { Routes } from "../interface/routes.interface";
import IndexController from "../controllers/index.controler";


export default class IndexRoute implements Routes {
    public path: string;
    public router: Router;
    public indexController: IndexController; 
    
    constructor() {
        this.path = '/';
        this.router = Router();
        this.indexController = new IndexController();

        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}`, this.indexController.index);
    }
}