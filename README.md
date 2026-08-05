<div align="center">

# 🛒 One Vendor Ecommerce Backend

### A Modern, Secure, and Scalable RESTful API for One Vendor Ecommerce

Built with **Node.js**, **Express.js**, **PostgreSQL**, and modern backend development best practices.

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5-000000?style=for-the-badge&logo=express)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-4169E1?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Storage-3448C5?style=for-the-badge&logo=cloudinary)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)](https://jwt.io/)

[📚 API Documentation](YOUR_API_DOCS_LINK)
•
[🌐 Frontend Repository](https://github.com/sf61561/One-Vendor-Ecommerce-Frontend)

</div>

---

# 📖 About

One Vendor Ecommerce Backend is a production-ready RESTful API built using **Node.js**, **Express.js**, and **PostgreSQL**. It follows a layered architecture to ensure clean code, maintainability, scalability, and security.

The backend currently includes authentication, image upload with Cloudinary, request validation, and database integration while serving as the foundation for a complete eCommerce platform.

---

# ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration
- 🔑 User Login
- ☁️ Cloudinary Image Upload
- 📷 Multer Memory Storage
- 🔒 Password Hashing (bcrypt)
- ✅ Request Validation
- 🗄 PostgreSQL Database
- 🏗 Layered Architecture
- 🌐 RESTful APIs
- ⚡ Express.js Server
- 🔐 Environment Variable Configuration

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | PostgreSQL |
| Authentication | JWT |
| Password Hashing | bcrypt |
| File Upload | Multer |
| Cloud Storage | Cloudinary |
| Validation | express-validator |
| Environment | dotenv |

---

# 📂 Folder Structure

```text
One-Vendor-Ecommerce-Backend/
│
├── Config/
│   ├── cloudinary.config.js
│   └── db.config.js
│
├── Controllers/
│   └── auth.controller.js
│
├── Middleware/
│   ├── auth.middleware.js
│   ├── upload.middleware.js
│   └── error.middleware.js
│
├── Repositories/
│   └── auth.repository.js
│
├── Routes/
│   └── auth.routes.js
│
├── Services/
│   └── auth.service.js
│
├── Validators/
│   └── auth.validator.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/sf61561/One-Vendor-Ecommerce-Backend.git
```

Move inside project

```bash
cd One-Vendor-Ecommerce-Backend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Run production server

```bash
npm start
```

---

# ⚙ Environment Variables

Create a `.env` file.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_username
DB_PASSWORD=your_password

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

<!-- # 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user | -->

---

# 🏗 Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
PostgreSQL
```

---

# 🎯 Roadmap

- Refresh Token Authentication
- Role-Based Authorization (RBAC)
- Product Management
- Category Management
- Brand Management
- Shopping Cart
- Wishlist
- Orders
- Payment Integration
- Reviews & Ratings
- Inventory Management
- Coupons
- Email Verification
- Password Reset
- Rate Limiting
- Redis Caching
- Logging
- API Documentation (Swagger)

---

# 📈 Performance Goals

- Clean Architecture
- Secure Authentication
- Scalable Codebase
- Database Optimization
- RESTful API Design
- Centralized Error Handling
- High Performance
- Production Ready

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Open Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

### Syed Fahad Mahmud

CSE Graduate | Full Stack Web Developer

GitHub: https://github.com/sf61561

LinkedIn: https://www.linkedin.com/in/syed-fahad-mahmud-33b65b248/

---

<div align="center">

### ⭐ If you like this project, give it a star!

Made with ❤️ by **Syed Fahad Mahmud**

</div>
