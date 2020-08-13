const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const sqlite3 = require('sqlite3').verbose();

// express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = new sqlite3.Database('./db/schema.sql', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the election database.');
  });

db.all(`SELECT * FROM candidates`, (err, rows) => 
{
    console.log(rows);
});

// default response for any other request (Not Found) Catch all
app.use ((req, res) => 
{
    res.status(404).end();
});

// // get route - connection to express.js server
// app.get('/', (req, res) => 
// {
//     res.json
//     ({
//         message: 'Hello World'
//     });
// });

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
