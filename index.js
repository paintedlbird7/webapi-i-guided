const express = require('express'); // import the express package

const db = require('./data/db.js'); 

const server = express(); // creates the server

server.use(express.json()); // addd this to make POST & PUT work 

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

// the C in CRUDS (Create)
server.post('/hubs', (req, res) => {
    const hubInfo = req.body;
    console.log('hub information', hubInfo);

  db.hubs
    .add(hubInfo)
    .then(hub => {
        res.status(201).json(hub);
    })
    .catch(error => {
        res.status(500).json({ message: 'error creating the hub' });
    });  
}); 


// the D in CRUDS (Delete)
server.delete('/hubs/:id', (req, res) => {
    const id = req.param.id;

  db.hubs
    .remove(id)
    .then(deleted => {
        res.status(204).end();
    })
    .catch(error => {
        res.status(500).json({ message: 'error creating the hub' });
    });  
}); 


// the U in CRUDS (update)
server.put('/hubs/:id', (req, res) => {
    const { id } = req.param;
    const changes = req.body;

  db.hubs
    .update(id, changes)
    .then(updated => {
        if (updated) {
        res.status(200).json(updated);
        } else {
        res.status(404).json({ message: 'hub not found' });
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'error updating the hub' });
    });  
}); 

// watch for connections on port 4000
server.listen(4000, () =>
  console.log('\n Server running on http://localhost:4000')
);



