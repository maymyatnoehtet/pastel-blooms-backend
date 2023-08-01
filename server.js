const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// const mongoURI = "YOUR_MONGODB_CONNECTION_STRING";
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

// // Your API routes will go here (e.g., CRUD operations for the User model)

// // Start the server
// const port = 5000; // You can change the port as needed
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
