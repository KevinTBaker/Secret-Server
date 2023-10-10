// const mongoose = require('mongoose')
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);
const Schema = mongoose.Schema

const secretSchema = new Schema({
    hash: {
        type: String,
        required: false,
    },
    secret: { 
        type: String,
        required: false,
    },
    remainingViews: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: new Date()
    },
    expiredDate: {
        type: Date,
        default: new Date()
    }
});

// secretSchema.pre('save', async function(next) {
//     const secret = this;
//     secretSchema.hash = bcrypt.hash(secretSchema.secret, salt);
//     console.log(secretSchema.hash);
// })

const Secrets=mongoose.model("Secret", secretSchema);
export default Secrets