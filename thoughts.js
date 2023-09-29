
const User = mongoose.model('username', userSchema);

module.exports = User;

const express = require('express');
const router = express.Router();
const User = require('../models/username');


router.get('/:username', async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).populate('thoughts');

    if (!user) {
      return res.status(404).json({ error: 'user unavailiable' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;