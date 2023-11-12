const express = require('express')

const {
    createImage,
} = require('../controllers/image');

const router = express.Router();


router
    .route('/')
    .post(createImage);

module.exports = router;