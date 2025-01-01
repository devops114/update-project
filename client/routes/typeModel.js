
const express = require('express');
const router = express.Router();
const TypeModel = require('../models/TypeModel');

// Create a new type model
router.post('/', async (req, res) => {
    try {
        const newType = new TypeModel(req.body);
        const savedType = await newType.save();
        res.status(201).json(savedType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all type models
router.get('/', async (req, res) => {
    try {
        const types = await TypeModel.find();
        res.json(types);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

