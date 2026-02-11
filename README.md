CMS Backend

A Node.js & Express-based backend for a Content Management System (CMS) with authentication, file uploads, and user interactions (likes & comments). The project uses MongoDB as the database and Cloudinary for media storage.

🚀 Features

🔐 User Authentication

Register & Login

JWT-based authentication

OTP verification

🖼 Artifact Management

Create, update, delete artifacts

Image upload via Cloudinary

💬 Comments & Likes

Users can comment on artifacts

Like/unlike functionality

🛡 Role-based Access

Middleware for authentication & authorization

🗄 Database

MongoDB with Mongoose models

🏗 Project Structure
cms-backend/
│── app.js
│── .env
│
├── config/
│   ├── db.js
│   └── cloudinary.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── artifact.controller.js
│   ├── comment.controller.js
│   └── likes.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── role.middleware.js
│   └── uploads.middleware.js
│
├── models/
│   ├── users.js
│   ├── otp.js
│   ├── artifact.js
│   ├── comment.js
│   └── likes.js

🛠 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Cloudinary (for images)

Multer (file uploads)

Bcrypt (password hashing)

⚙️ Environment Variables (.env)

Create a .env file in the root and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

▶️ How to Run the Project
1️⃣ Install dependencies
npm install

2️⃣ Start the server
npm start


or (if using nodemon)

npm run dev


Server will run at:

http://localhost:5000

📌 API Endpoints (Basic)
🔹 Auth
POST /api/auth/register
POST /api/auth/login
POST /api/auth/verify-otp

🔹 Artifacts
GET    /api/artifacts
POST   /api/artifacts
PUT    /api/artifacts/:id
DELETE /api/artifacts/:id

🔹 Comments
POST   /api/comments
GET    /api/comments/:artifactId

🔹 Likes
POST /api/likes/:artifactId

👨‍💻 Author

Saurabh Yadav
