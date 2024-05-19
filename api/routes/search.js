const express = require('express');
const router = express.Router();
const Route = require('../models/route');

router.post('/search', (req, res) => {
  const { difficulty, type, location } = req.body;
  let query = {};

  if (difficulty) query['grade.text'] = difficulty;
  if (type) query.type = type;
  if (location) query.location = new RegExp(location, 'i');

  Route.find(query)
    .populate('area user')
    .exec((err, routes) => {
      if (err) return res.status(500).send(err);
      res.json(routes);
    });
});

module.exports = router;

