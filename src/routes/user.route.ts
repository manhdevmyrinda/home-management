import express, { Router } from "express";
import userController from "../controllers/user.controller";

const router: Router = express();

router.get("/", userController.getUserList);

export default router;
