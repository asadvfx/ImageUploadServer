const express = require('express')

//const JobFunction = require('../models/Image');

const {
    createImage,
    deleteJobFunction,
} = require('../controllers/image');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');

router
    .route('/')
    .post(createImage);

module.exports = router;