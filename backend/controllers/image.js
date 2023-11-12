const path = require('path')
const asyncHandler = require('../middleware/asyncHandler')
//const Image = require('../models/Image')


// @desc    Create Image
// @route   POST /api/v0/image
// @access  Private
exports.createImage = asyncHandler(async(req, res, next) => {

    if (req.files){
        console.log('Uploaded file')
    }
        
    const file = req.files.image;

    //console.log(file)

    res.status(200).json({
        success: true,
        data: {
            "name": file.name,
            "size": file.size,
            "mimetype": file.mimetype
        },
    });
});