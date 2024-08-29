const mongoose = require('mongoose');

// Define a Mongoose schema for the user
const userSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true, // Ensures phone number is unique across users
    },
    vehicleNumber: {
        type: String,
        required: true,
        trim: true,
    },
    vehicleImage: {
        type: String,
        // required: true, // URL or path to the vehicle's image
    },
    // Additional fields can be added here
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
