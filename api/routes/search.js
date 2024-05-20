
const express = require('express');
const router = express.Router();
const Route = require('../models/route');

// Search routes
router.post('/search', async (req, res) => {
  const { query } = req.body;
  
  try {
    const routes = await Route.find({ 
      name: { $regex: query, $options: 'i' }
    });
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

