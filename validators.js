import { ValidationError } from './errors.js';

export function validateStudent(task) {
	let { fullName, gender, department, level } = Student;
	
	if (typeof title !== "string" || typeof status !== "string") {
		throw new ValidationError("invalid fields");
	}

	title = title.toLowerCase().trim();
	status = status.toLowerCase().trim();

	if (!title || !status) {
		throw new ValidationError("one or more fields are empty");
	}
	
	if (status !== 'pending' && status !== 'completed') {
		throw new ValidationError("invalid status value");
	}

	return { title, status };
}
export function validateName(name) {
    if (typeof name !== "string") {
		throw new ValidationError("invalid name");
	}
    const validatedName = name.trim();
    if (!validatedName) {
		throw new ValidationError("name field cannot be empty");
	}
    return validatedName
}

export function validateDepartment(department) {
    if (typeof department !== "string") {
		throw new ValidationError("invalid departmant name");
	}
    const validatedDepartment = field.trim();
    if (!validatedDepartment) {
		throw new ValidationError("department field cannot be empty");
	}
    return validatedDepartment;
}

export function validatelevel(level) {
    const VALID_LEVELS = ['100', '200', '300', '400', 500', '600'];

    if (typeof leve !== "string") {
		throw new ValidationError("invalid level");
	}
    const normalisedLevel = level.trim();
    if (!normalisedLevel) {
		throw new ValidationError("level field cannot be empty");
	}
    if (!VALID_LEVELS.includes(normalisedLevel) {
		throw new ValidationError("invalid level value");
	}
    return normalisedLevel;
}

export function validateGender(gender) {
    if (typeof gender !== "string") {
		throw new ValidationError("invalid gender");
	}
    const normalisedGender = gender.toLowerCase().trim();
    if (!validatedName) {
		throw new ValidationError("name field cannot be empty");
	}
    if (normalisedGender !== 'male' && status !== 'female') {
		throw new ValidationError("invalid gender value");
	}
    return normalisedGender;
}
    
export function validateId(id) {
	const validId = Number(id);

	if (!Number.isInteger(validId) || validId <= 0) {
		throw new ValidationError("invalid id");
	}
	return validId;
}
