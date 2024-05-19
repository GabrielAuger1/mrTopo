"use strict";

const Area = require("../models/area");
const Route = require("../models/route");
const dotenv = require("dotenv");

dotenv.config();

const url_base = process.env.URL + ":" + process.env.PORT;

exports.createArea = async (req, res, next) => {
  try {
    const area = new Area(req.body);
    const savedArea = await area.save();
    res.status(201).json(savedArea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAreas = async (req, res, next) => {
  try {
    const areas = await Area.find().populate('user');
    res.json(areas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserAreas = async (req, res, next) => {
  try {
    const areas = await Area.find({ user: req.params.userId }).populate('user');
    res.json(areas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getArea = async (req, res, next) => {
  try {
    const area = await Area.findById(req.params.id).populate('user');
    if (!area) return res.status(404).json({ message: 'Area not found' });
    res.json(area);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateArea = async (req, res, next) => {
  try {
    const updatedArea = await Area.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArea) return res.status(404).json({ message: 'Area not found' });
    res.json(updatedArea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteArea = async (req, res, next) => {
  try {
    const deletedArea = await Area.findByIdAndDelete(req.params.id);
    if (!deletedArea) return res.status(404).json({ message: 'Area not found' });
    res.json({ message: 'Area deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRoutes = async (req, res, next) => {
  try {
    const routes = await Route.find({ area: req.params.areaId }).populate('user');
    res.json(routes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

