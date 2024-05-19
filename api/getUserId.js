const mongoose = require('mongoose');
const User = require('./models/user');

require('dotenv').config();

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    User.findOne({ username: 'testuser' }).exec()
      .then(user => {
        console.log('User ID:', user._id);
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error retrieving user ID:', err);
        mongoose.connection.close();
      });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

