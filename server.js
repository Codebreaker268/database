const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '/')));

app.get('/db.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'db.json'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
