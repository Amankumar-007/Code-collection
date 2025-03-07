const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Parse JSON
app.use(cors()); // Enable CORS

// Routes
app.use("/api/users", require("./userRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
