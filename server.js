const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

app.use(express.json());

app.post('/api/farmers', (req, res) => {
    const farmerData = req.body;

    MongoClient.connect(url, (err, client) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error connecting to MongoDB' });
        } else {
            const db = client.db(dbName);
            const collection = db.collection('farmers');

            collection.insertOne(farmerData, (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send({ message: 'Error inserting data into MongoDB' });
                } else {
                    res.send({ message: 'Farmer data inserted successfully' });
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});