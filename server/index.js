const path = require('path');
const express = require("express");

const { Pool } = require('pg'); 
const PORT = process.env.PORT || 3001;

const env = process.env.NODE_ENV || 'development';

const stripe = require('stripe')('sk_test_51KBkBBHVXQRoPqCbtpuupStsjXL7bGcRuXfWEBd0Qx1vH7zbzfeLQOTZWCgJrgJtlgSHnZNfGO9f1hWAfMM4khz900OLRFcsL6');

// Check the env and make connection accordingly
if (env === 'development') {
    const credentials = {
        host: "localhost",
        user: "postgres",
        port: "5432",
        password: "root",
        database: "postgres"
    }
    connectionString = credentials;
} else {
    connectionString = {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    };
};

const pool = new Pool(connectionString);
pool.on('connect', () => console.log('connected to db'));

const app = express();

app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Save form values in database
app.post('/save-form-values', (req, res) => {
    try {
        const businessName = req.body.businessName;
        const businessDescription = req.body.businessDescription;
        const businessInspiration = req.body.businessInspiration;
    
        const query = {
            text: 'INSERT INTO businesses (name, description, inspiration) VALUES ($1, $2, $3)',
            values: [businessName, businessDescription, businessInspiration],
        }
    
        // Run INSERT query
        pool
            .query(query)
            .then(() => res.json("Success"))
            .catch(err => console.log(err.stack))
    } catch(err) {
        console.log('error: ', err)
    }
        
})

// Fetch saved businesses
app.get('/fetch-businesses', (req, res) => {
    pool
        .query(`SELECT * FROM businesses`)
        .then((response) => res.json(response.rows))
        .catch(err => console.log(err))
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});