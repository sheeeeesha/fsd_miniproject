const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes"); 
const importEventsFromCSV = require("../backend/scripts/importEventsFromCSV"); // Import the CSV import function
const searchRoutes = require("./routes/searchRoutes");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection function
const startServer = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/newthings2do"
    );
    console.log("MongoDB connected");

   // Import events after MongoDB is connected
    importEventsFromCSV("./data/Events.csv", "Events"); // For all events

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Weekend Planner API!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});
 
// Other routes can be added here
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/search", searchRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server and connect to MongoDB
startServer();
