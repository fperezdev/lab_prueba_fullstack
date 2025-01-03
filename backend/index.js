const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  console.log('Request received from client');
  res.send('Hello from Backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
