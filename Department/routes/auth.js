const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();


require('dotenv').config();

const staffEmailPattern = /^[a-zA-Z0-9._%+-]+@skct\.edu\.in$/;
const studentEmailPattern = /^\d{6}[a-zA-Z]{4}\d{3}@skct\.edu\.in$/;


router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
   
    if (role === 'staff' && !staffEmailPattern.test(email)) {
      return res.status(400).json({ message: 'Invalid staff email format' });
    }
    if (role === 'student' && !studentEmailPattern.test(email)) {
      return res.status(400).json({ message: 'Invalid student email format' });
    }
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    
    user = new User({ name, email, password, role });

    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    
    const payload = { userId: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    
    const payload = { userId: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
