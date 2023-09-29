router.post('/', async (req, res) => {
    try {
      const { username, email } = req.body;
  
      
      if (!username || !email) {
        return res.status(400).json({ error: 'account is required' });
      }
  
      
      const user = await User.create({ username, email });
  
      return res.status(201).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server Error' });
    }
  });
  
  
  router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server Error' });
    }
  });
  
  module.exports = router;

  const express = require('express.js');
const router = express.Router();
const User = require('../models/username.js')