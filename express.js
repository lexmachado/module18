-
   http//localhost:3001/ \
  
  
  const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome')
})

app.listen(3000)
const router = express.Router();
const User = require('../models/user');


router.post('/', async (req, res) => {
  try {
    const { username } = req.body;

    
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const user = await User.create({ username });

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;