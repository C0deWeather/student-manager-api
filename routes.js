import express from 'express';
import { validateStudent, validateId } from './validators.js';
import {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from './data.js';

const router = express.Router();

router.post('/', (req, res) => {
    const newStudent = validateStudent(req.body);
    const student = addStudent(newStudent);
    res.status(201).json({
        status: 'success',
        message: 'student successfully added',
        student
    });
});

router.get('/', (req, res) => {
    const students = getAllStudents();
    res.json({
        status: 'success',
        students
    });
});

router.get('/:id', (req, res) => {
    const studentId = validateId(req.params.id);
    const student = getStudentById(studentId);
    res.json({
        status: 'success',
        student
    });
});

router.put('/:id', (req, res) => {
    const studentId = validateId(req.params.id);
    const updatedStudent = validateStudent(req.body);
    const student = updateStudent(studentId, updatedStudent);
    res.json({
        status: 'success',
        message: 'student data successfully updated',
        student
    });
});

router.delete('/:id', (req, res) => {
    const studentId = validateId(req.params.id);
    deleteStudent(studentId);
    res.sendStatus(204);
});

export default router;
