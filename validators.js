import { ValidationError } from './errors.js';

const VALID_LEVELS = ['100', '200', '300', '400', 500', '600'];

export function validateStudent(student) {
	let { fullName, gender, department, level } = student;
	
	return {
		fullName: validateName(fullName),
		gender: validateGender(gender),
		department: validateDepartment(department),
		level: validateLevel(level)
	}
}

export function validateName(name) {
    if (typeof name !== "string") {
		throw new ValidationError("invalid name");
	}
    const validatedName = name.trim();
    if (!validatedName) {
		throw new ValidationError("name field cannot be empty");
	}
    return validatedName;
}

export function validateDepartment(department) {
    if (typeof department !== "string") {
		throw new ValidationError("invalid departmant name");
	}
    const validatedDepartment = department.trim();
    if (!validatedDepartment) {
		throw new ValidationError("department field cannot be empty");
	}
    return validatedDepartment;
}

export function validatelevel(level) {
    if (typeof level !== "string") {
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
    if (!validatedGender) {
		throw new ValidationError("name field cannot be empty");
	}
    if (!['male', 'female'].includes(normalisedGender)) {
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
