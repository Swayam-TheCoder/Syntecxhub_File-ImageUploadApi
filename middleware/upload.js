const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// image validation
// jpeg, jpg, png
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
  ];

  if(allowedTypes.includes(file.mimetype)){
    cb(null, true);
  } else{
    cb(new Error(
      "Only JPG, JPEG and PNG files are allowed"
    ), false);
  }
};

const upload = multer({ 
  storage, fileFilter,
  limits:{
    // less than 3 mb
    fileSize: 3 * 1024 * 1024
  }
 });

module.exports = upload;