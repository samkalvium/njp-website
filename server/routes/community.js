const express = require('express');
const router = express.Router();
const CommunityMember = require('../models/CommunityMember');

// Join community movement endpoint
router.post('/join', async (req, res) => {
  try {
    const { name, email, reason } = req.body;

    if (!name || !email || !reason) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if user has already joined the movement
    const existingMember = await CommunityMember.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ 
        message: 'You have already joined the movement with this email address!' 
      });
    }

    // Save new community member
    const newMember = new CommunityMember({ name, email, reason });
    await newMember.save();

    console.log('Saved new community member:', newMember);

    res.status(201).json({
      message: 'Successfully joined the movement!',
      data: {
        id: newMember._id,
        name: newMember.name,
        email: newMember.email,
        reason: newMember.reason,
      }
    });
  } catch (error) {
    console.error('Community Join Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
