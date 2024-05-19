const mongoose = require('mongoose');
const Area = require('./models/area'); // Ensure this path is correct for your project
require('dotenv').config();

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    const sampleArea = {
      name: "Test Area",
      description: "A beautiful climbing area.",
      gettingThere: "Follow the main trail.",
      lon: -105.27,
      lat: 40.02,
      user: "60c72b1f4f1a3c44d8fef5ba"  // Replace with the valid user ID obtained earlier
    };

    Area.create(sampleArea)
      .then(area => {
        console.log('Sample area added:', area);
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error adding sample area:', err);
        mongoose.connection.close();
      });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

