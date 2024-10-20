import React, { useState } from 'react';
import axios from 'axios';

function PredictionForm() {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    wind: '',
    rain: ''
  });
  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/predict', formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Temperature:
          <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} />
        </label>
        <label>
          Humidity:
          <input type="number" name="humidity" value={formData.humidity} onChange={handleChange} />
        </label>
        <label>
          Wind Speed:
          <input type="number" name="wind" value={formData.wind} onChange={handleChange} />
        </label>
        <label>
          Rain:
          <input type="number" name="rain" value={formData.rain} onChange={handleChange} />
        </label>
        <button type="submit">Predict</button>
      </form>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default PredictionForm;
