// frontend/src/App.js

import React, { useState, useEffect } from 'react';

const App = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/exchanges');
        const data = await response.json();
        setExchanges(data);
      } catch (error) {
        console.error('Error fetching exchanges:', error);
      }
    };

    fetchExchanges();
  }, []);

  return (
    <div>
      <h1>Major Crypto Exchanges</h1>
      <ul>
        {exchanges.map((exchange) => (
          <li key={exchange.exchange_id}>{exchange.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
