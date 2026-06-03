const express = require('express');
const router = express.Router();

// Simple community join endpoint
router.post('/join', async (req, res) => {
  try {
    const { name, email, reason } = req.body;
    
    // In a real app, you would save this to a database
    // For now, we'll just return success
    console.log('New community member:', { name, email, reason });
    
    res.status(201).json({
      message: 'Successfully joined the movement!',
      data: { name, email, reason }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
