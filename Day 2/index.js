import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());

// app.get("/", ()=> {
//     console.log("Get request received");
// })

app.get("/", (req, res)=> {
    console.log(req.body)
    console.log("Get request received");
    res.json({
        message:"This is a Get request"
    });
})

app.post("/", (req, res)=> {
    console.log(req.body)
    console.log("Post request received");
    res.json({
        message:"This is a Post request"
    });
})

app.delete("/", (req, res)=> {
    console.log(req.body)
    console.log("Delete request received");
    res.json({
        message:"This is a Delete request"
    });
})

app.put("/", (req, res)=> {
    console.log(req.body)
    console.log("Put request received");
    res.json({
        message:"This is a Put request"
    });
})


app.listen(3000, ()=> {
    console.log("Server is running.");
})