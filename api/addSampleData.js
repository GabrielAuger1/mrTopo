const mongoose = require('mongoose');
const Route = require('./models/route');
require('dotenv').config();

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    const sampleRoutes = [
      {
        name: "Climb 1",
        location: "Location 1",
        difficulty: "5.10a",
        type: "SPORT",
        grade: {
          text: "5.10a",
          value: 10
        },
        description: "A nice sport climb.",
        approach: "Short hike",
        descent: "Rappel",
        area: "60c72b1f4f1a3c44d8fef5b9", // Replace with the valid area ID
        user: "60c72b1f4f1a3c44d8fef5ba"  // Replace with the valid user ID
      },
      {
        name: "Climb 2",
        location: "Location 2",
        difficulty: "5.9",
        type: "TRAD",
        grade: {
          text: "5.9",
          value: 9
        },
        description: "A challenging trad climb.",
        approach: "Long hike",
        descent: "Walk off",
        area: "60c72b1f4f1a3c44d8fef5b9", // Replace with the valid area ID
        user: "60c72b1f4f1a3c44d8fef5ba"  // Replace with the valid user ID
      }
    ];

    Route.insertMany(sampleRoutes)
      .then(() => {
        console.log('Sample routes added');
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error adding sample routes:', err);
        mongoose.connection.close();
      });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
