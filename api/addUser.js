const mongoose = require('mongoose');
const User = require('./models/user'); // Ensure this path is correct for your project
require('dotenv').config();

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    const sampleUser = {
      username: "testuser",
      email: "testuser@example.com",
      password: "password123"  // Ensure to hash this if required
    };

    User.create(sampleUser)
      .then(user => {
        console.log('Sample user added:', user);
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error adding sample user:', err);
        mongoose.connection.close();
      });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

