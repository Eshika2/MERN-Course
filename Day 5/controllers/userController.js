import User from "../models/user.js";
import bcrypt from "bcrypt";

export function saveUser(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    // console.log(hashedPassword);

    const user = new User({
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        // role : req.body.role,
        password : hashedPassword,
        phone : req.body.phone
    });

    user.save().then(()=>{
        res.status(201).json({
            message: "User saved Successfully"
        })
    }).catch(()=>{
        res.status(500).json({
            message: "User saved Failed"
        })
    })
}

export function userLogin(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        email : email
    }).then((user)=>{
        if (user == null) {
            res.status(404).json({
                message: "Invalid Email"
            })
        } else {
            const isPasswordCorrect = bcrypt.compareSync(password, user.password);
            if (isPasswordCorrect) {
                res.status(200).json({
                    message: "Login Successfull"
                })
            } else {
                res.status(403).json({
                    message: "Invalid Password"
                })
            }
        }   
    })
}