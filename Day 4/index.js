import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routers/studentRouter.js';
import itemRouter from './routers/itemRouter.js';

let app = express();

mongoose.connect("mongodb+srv://admin:123@cluster0.8yy0fkp.mongodb.net/?appName=Cluster0").then(
    ()=>{
        console.log("Connected to the database");
    }
).catch(
    ()=>{
        console.log("Connection failed");
    }
)

app.use(bodyParser.json());


app.use("/student", studentRouter)
app.use("/item", itemRouter)


app.listen(3000, ()=> {
    console.log("Server is running.");
})