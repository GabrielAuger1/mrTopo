"use strict";

const Route = require("../models/route");
const dotenv = require("dotenv");

dotenv.config();

const url_base = process.env.URL + ":" + process.env.PORT;

// Create a new route
exports.createRoute = async (req, res, next) => {
  try {
    const route = new Route(req.body);
    const savedRoute = await route.save();
    res.status(201).json(savedRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all routes
exports.getRoutes = async (req, res, next) => {
  try {
    const routes = await Route.find().populate('area user');
    res.json(routes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserRoutes = async (req, res, next) => {
  try {
    const routes = await Route.find({ user: req.params.userId }).populate('area user');
    res.json(routes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoute = async (req, res, next) => {
  try {
    const route = await Route.findById(req.params.id).populate('area user');
    if (!route) return res.status(404).json({ message: 'Route not found' });
    res.json(route);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRoute = async (req, res, next) => {
  try {
    const updatedRoute = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoute) return res.status(404).json({ message: 'Route not found' });
    res.json(updatedRoute);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRoute = async (req, res, next) => {
  try {
    const deletedRoute = await Route.findByIdAndDelete(req.params.id);
    if (!deletedRoute) return res.status(404).json({ message: 'Route not found' });
    res.json({ message: 'Route deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



