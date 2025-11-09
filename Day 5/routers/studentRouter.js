import express from 'express';
import { deleteStudent, getAllStudents, saveStudent, studentData, updateStudent } from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/", saveStudent);
studentRouter.put("/", updateStudent);
studentRouter.delete("/", deleteStudent);

// studentRouter.get("/data", studentData);
studentRouter.get("/:name", studentData);


export default studentRouter;