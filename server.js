const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const sqlite3 = require('sqlite3').verbose();

// express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => 
{
  res.json({
    message: 'Hello World'
  });
});

// default response for any other request(not found) catach all
app.use((req, res) =>
{
  res.status(404).end();
});

// function to start express.js server on port 3001
app.listen(PORT, () => 
{
  console.log(`Server running on port ${PORT}`);
});

