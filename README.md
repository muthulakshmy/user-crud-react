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

3. Start Mock API (JSON Server)
npx json-server --watch db.json --port 3001

4. Start Frontend
npm run dev


Frontend runs on:

http://localhost:5173


API runs on:

http://localhost:3001/users

Adding New Fields to the Form

To add a new field (example: address):

Update user-form-config.js

{
  name: "address",
  label: "Address",
  required: false,
  type: "text"
}


JSON Server automatically accepts new fields

Table will show the new data if column is added in user-table.jsx

---

Design Decisions & Assumptions

JSON Server is used as a mock backend

Axios handles API requests

Ant Design Modal used for Create/Edit

Same form reused for Create & Edit

Form fields are config-driven for scalability

---

Mock API

Mock API is powered by JSON Server using db.json.

Example endpoint:

GET    /users
POST   /users
PUT    /users/:id
DELETE /users/:id


