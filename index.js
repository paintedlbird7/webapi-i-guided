const express = require('express'); // import the express package

const db = require('./data/db.js'); 

const server = express(); // creates the server

server.get('/', (req, res) => {
});

// write a get now endpoint that returns the date & time as a string
server.get('/now', (req, res) => {
});

// the R in CRUDS (Read)
server.get('/hubs', (req, res) => {
    db.hubs
    .find()
    .then (hubs => {

     res.status(200).json(hubs);   
    })
    .catch(error => {

        res.status(500).json({message: 'error retrieving hubs'})
    })
});

// watch for connections on port 4000
server.listen(4000, () =>
  console.log('Server running on http://localhost:4000')
);



