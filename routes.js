import express from 'express';
import { ValidationError, NotFoundError } from './errors.js';
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
        student: student 
    });
});

router.get('/', (req, res) => {
    const students = getAllStudents();
    res.json(students);
});

router.get('/:id', (req, res) => {
    const studentId = validateId(req.params.id);
    const student = getStudentById(studentId);
    res.json(student);
});

router.put('/:id', (req, res) => {
    const studentId = validateId(req.params.id);
    const student = validateStudent(req.body);
    updateStudent(studentId, student);
    res.json({
        status: 'success',
        message: 'student data successfully updated',
    });
});
router.delete('/:id', (req, res) => {
    const studentId = validateId(req.params.id);
    deleteStudent(studentId);
    res.json({
        status: 'success',
        message: 'student succesfully deleted',
    });
});

export default router;
