const express = require('express');
const User = require('../models/user');
const Parking = require('../models/parking'); // Import the Parking model
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Create a new user and register them as "in"
router.post('/', async (req, res) => {
    const { phoneNumber, vehicleNumber, vehicleImage } = req.body;

    try {
        // Create a new user
        const newUser = new User({
            phoneNumber,
            vehicleNumber,
            vehicleImage,
        });
        await newUser.save();

        // Create a parking record for the new user
        const newParking = new Parking({
            vehicleNumber,
            isIn: true, // Set to true since the vehicle is newly parked
        });
        await newParking.save();

        // Return the created user and parking record
        res.status(201).json({
            user: newUser,
            parking: newParking,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update user by ID
router.put('/:id', async (req, res) => {
    const { phoneNumber, vehicleNumber, vehicleImage } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { phoneNumber, vehicleNumber, vehicleImage },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Optionally delete the parking record if user is deleted
        await Parking.findOneAndDelete({ vehicleNumber: user.vehicleNumber });

        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;