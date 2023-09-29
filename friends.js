const express = require('express');
const router = express.Router();
const User = require('../models/username');

router.post('/:userId/friends', async (req, res) => {
  try {
    const userId = req.params.userId;
    const friendId = req.body.friendId; 

    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!user || !friend) {
      return res.status(404).json({ error: 'friend not found' });
    }

    user.friends.push(friendId);
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).populate('friends');

    if (!user) {
      return res.status(404).json({ error: 'no user' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
router.get('/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const user = await User.findById(userId).populate('friends');
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      
      const friendCount = user.friendCount;
  
      return res.status(200).json({ user, friendCount });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server Error' });
    }
  });
  
  
  
  
  
  
  