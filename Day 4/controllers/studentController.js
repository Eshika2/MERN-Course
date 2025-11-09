import Student from "../models/student.js"

export function getAllStudents(req, res) {
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
}

export function saveStudent(req, res) {
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
}

export function updateStudent(req, res) {
    res.json({
        message: "Student deleted"
    })
}

export function deleteStudent(req, res) {
    res.json({
        message: "Student updated"
    })
}

export function studentData(req, res) {
    // const name = req.body.name;
    const name = req.params.name;

    Student.find (
        {
            name : name
        }
    ).then (
        (students)=>{
            res.json(students)
        }
    ).catch (
        ()=>{
            res.json({
                message: "ERROR"
            })
        }
    )
}
