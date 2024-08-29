// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormPage from './components/FormPage';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/message`)
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      {/* <h1>{message}</h1> */}
      <FormPage />
    </div>
  );
}

export default App;
