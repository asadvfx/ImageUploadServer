const express = require('express')

const {
    createImage,
    imageDownload
} = require('../controllers/image');

const router = express.Router();


router
    .route('/')
    .post(createImage);

router
    .route('/:name')
    .get(imageDownload)

module.exports = router;