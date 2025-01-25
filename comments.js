// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());

// Read and write data from/to data.json
const dataPath = path.join(__dirname, 'data.json');

// Get all comments
app.get('/comments', (req, res) => {
    // Read data from data.json
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Add a new comment
app.post('/comments', (req, res) => {
    // Read data from data.json
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        const comments = JSON.parse(data);
        // Add new comment
        comments.push(req.body);
        // Write data to data.json
        fs.writeFile(dataPath, JSON.stringify(comments, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.json(comments);
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});