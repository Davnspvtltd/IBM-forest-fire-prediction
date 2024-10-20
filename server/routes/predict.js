const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { data } = await axios.post('http://localhost:5000/predict', req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error making prediction' });
  }
});

module.exports = router;
