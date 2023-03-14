import express from "express";
import mongoose from "mongoose";
import secretRouter from "./routes/secretRouter.js";

const app = express()

app.use(express.json());
app.use("/api/secret", secretRouter);

mongoose
.connect("mongodb+srv://admin:PTNfKUd1uXae5APM@cluster0.qrimgy8.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(8001))
.then(()=>console.log("connected to database and listening to localhost: 8001"))
.catch((err) => console.log(err));
