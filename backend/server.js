// backend/server.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/api/exchanges', async (req, res) => {
  try {
    const response = await axios.get('https://rest.coinapi.io/v1/exchanges', {
      headers: {
        'X-CoinAPI-Key': 'YOUR_API_KEY',
      },
    });
    const exchanges = response.data;
    // Store exchanges in your application's database

    res.json(exchanges);
  } catch (error) {
    console.error('Error fetching exchanges:', error);
    res.status(500).json({ error: 'Error fetching exchanges' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
