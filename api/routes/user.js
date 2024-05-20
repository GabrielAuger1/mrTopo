"use strict";

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth'); // Import the authMiddleware
const User = require('../models/user');

// Protected route to get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from the result
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

