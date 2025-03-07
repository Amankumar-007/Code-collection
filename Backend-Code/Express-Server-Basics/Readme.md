# 🚀 Express + MongoDB Backend

This is a simple **Express.js backend** with **MongoDB**, CORS, and basic API routes. It provides a minimal setup for building REST APIs.

---

## 📂 Folder Structure

backend/ │── server.js # Main server file │── db.js # Database connection │── userRoutes.js # User API routes │── .env # Environment variables │── package.json # Node dependencies


---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/your-repo.git
cd Express-Server-Basic
npm init -y
npm install express mongoose dotenv cors
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydatabase
node server.js
//or
nodemon server.js
