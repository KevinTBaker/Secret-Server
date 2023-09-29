import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/secretRouter.js";
// import { errorHandler } from "./middleware/requirements.js";
// import collection from "./models/secret.js";

const app = express()

app.use(express.json({ extended: false }));
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.use("/api/secrets", router);




mongoose.set("strictQuery", false)
mongoose
.connect("mongodb+srv://admin:PTNfKUd1uXae5APM@cluster0.qrimgy8.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(8001))
.then(()=>console.log("connected to database and listening to localhost: 8001"))
.catch((err) => console.log(err));
