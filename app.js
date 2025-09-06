const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // ← Cloud Run utilise PORT=8080

// Servir les fichiers statiques
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// AJOUTEZ CE LOG POUR DÉBOGUER
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment PORT: ${process.env.PORT}`);
});