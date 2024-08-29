// src/FormPage.js
import React, { useState } from 'react';

function FormPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [image, setImage] = useState(null);

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleVehicleChange = (event) => {
    setVehicleNumber(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Phone Number:', phoneNumber);
    console.log('Vehicle Number:', vehicleNumber);
    console.log('Image:', image);
  };

  return (
    <div className="form-container">
      <h1>Enter Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div>
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            onChange={handleVehicleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">IN</button>
      </form>
    </div>
  );
}

export default FormPage;
