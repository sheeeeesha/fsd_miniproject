const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);       // POST /api/auth/register
router.post('/login', loginUser);             // POST /api/auth/login

// Example of a protected admin route
router.get('/admin-only', protect, admin, (req, res) => {
  res.status(200).json({ message: 'Welcome, Admin!' });
});

module.exports = router;
