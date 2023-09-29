// const mongoose = require('mongoose')
import mongoose from "mongoose";

const Schema = mongoose.Schema

const secretSchema = new Schema({
    hash: {
        type: String,
        required: false,
    },
    secret: { 
        // type: mongoose.Schema.Types.Mixed,
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

const Secrets=mongoose.model("Secret", secretSchema);
export default Secrets