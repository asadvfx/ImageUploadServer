const path = require('path');
const asyncHandler = require('../middleware/asyncHandler');

// @desc    Create Image
// @route   POST /api/v0/image
// @access  Private
exports.createImage = asyncHandler(async(req, res, next) => {

    if (req.files){
        console.log('Uploading file')
    }
    else {
        console.log('Please upload a file.')
    }

    const file = req.files.image;    

    file.name = `photo_${file.name}`;

    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
        if (err) {
            console.error(err);
            return
        }

        res.status(200).json({
            success: true,
            data: {
                "name": file.name,
                "size": file.size,
                "mimetype": file.mimetype
            },
        });
    })

    console.log(`Donde uploading ${file.name}`)

    
});

// @desc        Download Image
// @route       GET /api/v0/image/:name
// @access      Private
exports.imageDownload = asyncHandler(async (req, res, next) => {
    const fileName = req.params.name;
  
    if (!fileName) {
      console.log('Image not found.')
    }
  
    const file = `${process.env.FILE_UPLOAD_PATH}/${fileName}`;
  
    res.download(file);
  });