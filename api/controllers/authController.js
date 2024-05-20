const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); // Ensure this line is present to load the .env file

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    // Create a JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token to the client
    res.status(201).json({ token });
  } catch (error) {
    console.error('Error during sign up:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.logIn = async (req, res) => {
  console.log('Login request received:', req.body);

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log('User found:', user);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log('Password matches');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful');
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: error.message });
  }
};

