// backend/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Register user with optional admin field
exports.registerUser = async (req, res) => {
  console.log('Request Body:', req.body);
  const { username, email, password, isAdminCode } = req.body;
  
  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Set isAdmin to true if a valid admin code is provided
    const isAdmin = isAdminCode === "7am1n3v"; // Store ADMIN_CODE securely in environment variables

    // Create user
    const user = await User.create({
      username,
      email,
      password, // Password will be hashed via the pre-save hook
      isAdmin,
    });

    res.status(201).json({ message: 'User registered successfully', isAdmin });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Respond with user's admin status
    res.status(200).json({ message: 'Login successful', isAdmin: user.isAdmin });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};
