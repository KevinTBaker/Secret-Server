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
        required: true,
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

export default mongoose.model("Secret", secretSchema);