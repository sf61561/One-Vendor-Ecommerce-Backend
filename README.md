````markdown
# 🛒 One Vendor Ecommerce - Backend

<p align="center">
  <strong>A production-ready REST API for the One Vendor Ecommerce platform.</strong>
</p>

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)

</p>

---

# 📖 Overview

The One Vendor Ecommerce Backend provides secure REST APIs for authentication and future eCommerce operations. It follows a layered architecture that separates routing, controllers, services, repositories, middleware, and configuration to ensure scalability and maintainability.

---

# ✨ Current Features

- 🔐 JWT Authentication
- 👤 User Registration
- 🔑 User Login
- ☁️ Cloudinary Image Upload
- 📷 Multer Memory Storage
- 🔒 Password Hashing
- ✅ Request Validation
- 🏗 Layered Architecture
- 🌐 RESTful API Design
- ⚡ Express.js Server

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express.js | Backend Framework |
| PostgreSQL | Database |
| Cloudinary | Image Storage |
| Multer | File Upload |
| JWT | Authentication |
| bcrypt | Password Hashing |
| dotenv | Environment Variables |

---

# 📂 Project Structure

```text
backend/
│
├── Config/
│   ├── cloudinary.js
│   └── db.js
│
├── Controllers/
│   └── auth.controller.js
│
├── Middleware/
│   ├── auth.middleware.js
│   └── upload.middleware.js
│
├── Repositories/
│   └── user.repository.js
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
├── index.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/sf61561/One-Vendor-Ecommerce-Backend.git
```

Move into the project

```bash
cd One-Vendor-Ecommerce-Backend
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Run the production server

```bash
npm start
```

---

# ⚙ Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_username
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

<!-- ---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

--- -->

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

# 🔒 Security

- Password hashing with bcrypt
- JWT-based authentication
- Environment variable protection
- Request validation
- File upload restrictions
- Layered architecture

---

# 📌 Planned Features

- Refresh Tokens
- Role-Based Authorization
- Product Management
- Category Management
- Shopping Cart
- Orders
- Payments
- Coupons
- Reviews
- Wishlist
- Inventory Management
- Email Verification
- Password Reset
- Logging
- Rate Limiting
- Redis Caching
- API Documentation (Swagger)

---

# 🤝 Contributing

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Syed Fahad Mahmud**

- GitHub: https://github.com/sf61561

---

<p align="center">

⭐ If you found this project useful, consider giving it a star!

</p>
````
