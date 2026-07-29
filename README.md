# Student Manager API

A simple REST API built with **Node.js** and **Express.js** for managing student records. The API demonstrates the core CRUD (Create, Read, Update and Delete) operations using an in-memory data store.

This project was built as a learning exercise to practise RESTful API design, request validation, error handling, and Express routing.

---

## Features

- Create a new student
- Retrieve all students
- Retrieve a student by ID
- Update an existing student
- Delete a student
- Request validation
- Consistent JSON responses
- RESTful API design

---

## Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)

---

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/C0deWeather/student-manager-api.git
cd student-manager-api
```

Install dependencies:

```bash
npm install
```

---

## Running the API

Start the production server:

```bash
npm start
```

Start the development server with automatic restarts:

```bash
npm run dev
```

By default, the server runs on:

```text
http://localhost:3000
```

---

## Student Object

Each student contains the following fields:

| Field | Type | Description |
|-------|------|-------------|
| fullName | string | Student's full name |
| gender | string | Student's gender (lowercase) |
| department | string | Department of study |
| level | string | Academic level |

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get a student by ID |
| POST | `/students` | Create a student |
| PUT | `/students/:id` | Replace an existing student |
| DELETE | `/students/:id` | Delete a student |

> **Note:** `PUT` performs a full replacement of the student resource. All fields (`fullName`, `gender`, `department`, and `level`) must be included in the request body. Partial updates are not supported.

---

## Example Request

Create a student:

```http
POST /students
Content-Type: application/json

{
  "fullName": "John Doe",
  "gender": "male",
  "department": "Computer Science",
  "level": "300"
}
```

Example response:

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "fullName": "John Doe",
    "gender": "male",
    "department": "Computer Science",
    "level": "300"
  }
}
```

---

## Validation

All fields are required when creating or updating a student:

- `fullName`
- `gender`
- `department`
- `level`

Requests with missing or invalid data return an error response.

---

## Error Responses

Errors are returned as JSON.

Example:

```json
{
  "status": "error",
  "message": "student not found"
}
```

---

## License

This project is licensed under the ISC License.

---

## Author

**Bright Frank**

GitHub: https://github.com/C0deWeather
