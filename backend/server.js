/**
 * Career path finder
 */


//Libraries
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const fileUpload = require('express-fileupload');

//Route files
const image = require('./routes/image');

//Set up env
dotenv.config({path: './config/config.env'});

//Initialize the server
const app = express()

//Body parser
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//File upload
app.use(fileUpload())

// A simple route
app.use('/api/v0/image', image);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    server.close(() => {
        process.exit(1);
    });
});