import express from "express";
// import { getSecret, addSecret } from '../controllers/secretController.js';
import Secrets from "../models/secret.js";

const router = express.Router()
// const Secret = require("../models/secret.js")
router.get("/", (req, res) => {
    Secrets.find()
        .then(secrets => res.json(secrets))
        .catch(err => res.status(404).json({nosecretfound: 'No Secret Found'}));
});

router.post("/", (req, res) => {
    Secrets.create(req.body)
        .then(secrets => res.json({msg: 'Secret added succesfully!'}))
        .then(console.log(Secrets))
        .catch(err => res.status(400).json({error: 'Unable to add secret!'}))
})

export default router;