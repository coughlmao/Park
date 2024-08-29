const mongoose = require('mongoose');

// Define a Mongoose schema for parking
const parkingSchema = new mongoose.Schema({
    vehicleNumber: {
        type: String,
        required: true,
        trim: true,
    },
    isIn: {
        type: Boolean,
        required: true,
        default: true, // Defaults to true if not provided
    },
    parkedAt: {
        type: Date,
        default: Date.now, // Automatically set to current date/time
    },
    leftAt: {
        type: Date,
    },
    // Additional fields can be added here
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create a Mongoose model based on the schema
const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;
