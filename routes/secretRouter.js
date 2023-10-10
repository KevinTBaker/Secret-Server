import express from "express";
// import { getSecret, addSecret } from '../controllers/secretController.js';
// import secrets from "../models/secret.js";
import bcrypt from 'bcryptjs';
import Secrets from "../models/secret.js";

const router = express.Router()
const salt = bcrypt.genSaltSync(10);
// const Secret = require("../models/secret.js")
router.get('/', (req, res) => {
    Secrets.find()
        .then(Secrets => res.json(Secrets))
        // .then(console.log(Secrets.secret))
        .catch(err => res.status(404).json({nosecretfound: 'No Secret Found'}));
});

router.post('/', (req, res) => {
    const { secret /*remainingViews*/} = req.body;

    Secrets.create({
        secret: req.body.secret,
        remainingViews: req.body.remainingViews,
        hash: bcrypt.hashSync(secret),
     })
    .then(secret => res.json({msg: 'Secret added succesfully!'}))
    .catch(err => res.status(400).json({error: 'Unable to add secret!'}))
    /*
    Secrets.create(req.body)
        // .then(
        
        // Secrets.hash = bcrypt.hash(req.body.secret, 10)
        .then(secret => res.json({msg: 'Secret added succesfully!'}))
        .catch(err => res.status(400).json({error: 'Unable to add secret!'}))
    // .then(Secrets.hash = bcrypt.hash(Secrets.secret, (salt)))
    */
    // console.log(Object.keys(mongooseObject.toJSON()))
    // console.log(req.body.secret)
})

export default router;