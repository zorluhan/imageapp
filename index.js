const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
 
const express = require('express');
const app = express();
const apiKey = process.env.API_KEY;

app.get('/api-key', (req, res) => {
  res.send(apiKey);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
 
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


