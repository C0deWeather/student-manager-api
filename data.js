import { NotFoundError } from './errors.js';

const STUDENTS = [];
let nextId = 1;

export function addStudent(student) {
  const newStudent = {
    id: nextId++,
    ...student
  };
  STUDENTS.push(newStudent);
  return newStudent;
}

export function getAllStudents() {
  return structuredClone(STUDENTS);
}

export function getStudentById(id) {
  const student = STUDENTS.find(student => student.id === id);
  if (!student) {
    throw new NotFoundError("student not found");
  }
  return student;
}

export function updateStudent(id, student) {
  const currentStudent = getStudentById(id);
  
  currentStudent.fullName = student.fullName;
  currentStudent.gender = student.gender;
  currentStudent.department = student.department;
  currentStudent.level = student.level;
  return currentStudent;
}

export function deleteStudent(id) {
  const indexInArray = STUDENTS.findIndex(student => student.id === id);
  if (indexInArray === -1) {
    throw new NotFoundError("student not found");
  }
  STUDENTS.splice(indexInArray, 1);
}
