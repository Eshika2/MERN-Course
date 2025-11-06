import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js';

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


app.get("/", (req, res)=> {
    Student.find().then(
        (students)=>{
            res.json(students)
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error occurred"
            })
        }
    )
})

app.post("/", (req, res)=> {

    const student = new Student(req.body);

    student.save().then(
        ()=>{
            res.json({
                message: "Student saved Successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message: "Student saved Failed"
            })
        }
    )
})



app.listen(3000, ()=> {
    console.log("Server is running.");
})