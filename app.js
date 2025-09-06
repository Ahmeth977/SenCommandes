const express = require('express');
const app = express();
const port = process.env.PORT || 8080;  // ← PORT 8080 pour Cloud Run

console.log('Starting application...');
console.log('Environment PORT:', process.env.PORT);

app.use(express.static('.'));

app.get('/', (req, res) => {
  console.log('Received request for /');
  res.sendFile(__dirname + '/index.html');
});

// Écouter sur TOUTES les interfaces (0.0.0.0) et port 8080
app.listen(port, '0.0.0.0', () => {
  console.log(`Server successfully running on port ${port}`);
  console.log('Listening on all interfaces (0.0.0.0)');
  console.log('Application started successfully!');
});