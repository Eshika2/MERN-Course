import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

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

//middleware
app.use(bodyParser.json());
app.use(
    (req, res, next)=>{
        const header = req.header("Authorization");
        // console.log(header);
        if (header != null) {
            const token = header.replace("Bearer ", "");
            // console.log(token);
            jwt.verify(token, "secretKey", (err, decoded)=>{
                // console.log(decoded);
                if (decoded != null) {
                    req.user = decoded;
                }
            })
        }
        next();
    }
)



app.use("/api/user", userRouter)
app.use("/api/product", productRouter)


app.listen(3000, ()=> {
    console.log("Server is running.");
})