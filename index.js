// const express = require("express");
import express from 'express';

import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import routes from './server/routes/dbtRoutes';

var cors = require('cors') // CORS support, 1 of 2

const app = express();
app.use(cors()) // CORS support, 2 of 2
const PORT = 3001;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DBTdb', {
    useMongClient: true
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    // NOTE: THE FOLLOWING
    // QUOTATION MARKS ARE ACTUALLY ANGLE-TICK MARKS
    // ON THE KEYBOARD UPPER LEFT CORNER
    // THE PORT REFERENCE IS AN EX6 TEMPLATE SYNTAX
    res.send(`Node and express server is running on port: ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});