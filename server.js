const express = require('express');
const app = express();

// Get the port from Heroku environment or default to 8080
const port = process.env.PORT || 8080;

// Serve static files from the dist folder
app.use(express.static(__dirname + '/dist/a17-soc'));

app.listen(port, () => console.log(`Server listening on port ${port}`));

// Handles any request that doesn't match a static file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
