const express = require('express');
const app = express();
const port = process.env.PORT || 8080;  // ← FORCEZ 8080

console.log('Starting application...');
console.log('Environment PORT:', process.env.PORT);
console.log('Using port:', port);

app.use(express.static('.'));

app.get('/', (req, res) => {
  console.log('Received request for /');
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
  console.log('Application started successfully!');
});

// Gestion des erreurs
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});