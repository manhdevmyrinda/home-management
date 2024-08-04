import express, { Application } from "express";
import { Routes } from "./interface/routes.interface";
import { PORT } from "./configs/getEnv";
import { errorMiddleware, errorNotFoundRouteMiddleware } from "./middlewares/error.middleware";

class App {
    public app: Application;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.port = PORT || 8000;

        this.initRoutes(routes);
        this.initErrorHandling();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        })
    }

    public getServer() {
        return this.app;
    }

    private initRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.use(route.router);
        });

        this.app.use(errorNotFoundRouteMiddleware);
    }

    private initErrorHandling() {
        this.app.use(errorMiddleware);
    }
}

export default App;