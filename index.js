const express = require('express');
const app = express();
const path = require('path');
const apiKey = process.env.API_KEY;


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


