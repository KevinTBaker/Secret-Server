import express from "express";
import { getSecret, addSecret } from '../controllers/secretController.js';

const secretRouter = express.Router()

secretRouter.get("/", getSecret)
secretRouter.post("/addSecret", addSecret)

export default secretRouter;