# User CRUD Dashboard

A simple User Management dashboard built with React, Vite, Ant Design, and JSON Server.  
It supports creating, editing, deleting, and listing users with form validation.

---

## Tech Stack
- React + Vite
- Ant Design
- Axios
- JSON Server (Mock API)

---

### Vercel Deployment link
https://user-crud-react-ten.vercel.app/

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/muthulakshmy/user-crud-react
cd user-crud-dashboard

2. Install dependencies
npm install

3. Start Frontend
npm run dev
No local backend setup required — API is hosted on mockapi.io


Frontend runs on:

http://localhost:5173


MOCKAPI :

https://6988be03780e8375a6890e82.mockapi.io/api/v1/users


Adding New Fields to the Form

To add a new field (example: address) need to add in mockapi

Update user-form-config.js

{
  name: "address",
  label: "Address",
  required: false,
  type: "text"
}


Add the same field in mockapi.io → Users resource.

Table will show the new data if column is added in user-table.jsx

---

Mock API

Example endpoint:

GET    /users
POST   /users
PUT    /users/:id
DELETE /users/:id


