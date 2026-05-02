📚 Faculty Library Management System (FLMS)

📖 Project Description

The Faculty Library Management System (FLMS) is a full-stack web application designed to manage the daily operations of an academic library.
It allows students and faculty members to browse and borrow books, while librarians and administrators can manage the catalog and monitor all loans.

---

🎯 Features

👤 Authentication & Users

- User registration and login (JWT-based authentication)
- Password hashing using bcrypt
- Role-based access control (Student, Faculty, Librarian, Admin)

📚 Book Catalog

- Browse and search books
- View book details and availability
- Add, edit, and delete resources (Librarian/Admin)

🔁 Borrowing System

- Borrow available books
- Return borrowed books
- Renew loans (up to 2 times)
- Borrowing limits:
  - Students: max 5 books
  - Faculty: max 10 books

📊 Loans Management

- View personal loans
- Track due dates and overdue items
- Librarians can view all loans

---

🛠️ Tech Stack

Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (password hashing)

Frontend

- React (Vite)
- Axios
- React Router

---

🏗️ Project Structure

flms/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx

---

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/flms.git
cd flms

2. Backend setup

cd backend
npm install

Create a ".env" file:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret

Run backend:

npm run dev

---

3. Frontend setup

cd frontend
npm install
npm run dev

---

🔐 API Endpoints (Examples)

Method| Endpoint| Description
POST| /api/auth/register| Register user
POST| /api/auth/login| Login user
GET| /api/resources| Get all books
POST| /api/loans/borrow| Borrow a book
PUT| /api/loans/return/:id| Return a book
GET| /api/loans/my| Get user loans

---

🧪 Testing

Basic test scenarios include:

- User authentication
- Borrowing rules enforcement
- Loan limits and availability
- Return and renew logic

---

📌 Notes

- Passwords are securely hashed
- Role-based access is enforced
- Available copies are updated automatically during borrow/return

---

👥 Team

- chouguiat adim rami
- seghir abdellah mouin 
- boudjlida Abderrahim 

---

📎 License

This project is for academic purposes only.
