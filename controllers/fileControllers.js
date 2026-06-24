const File = require('../models/file');

exports.uploadFile = async (req, res) => {
  try {

    if(!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = await File.create({
      originalName: req.file.originalname,
      fileName: req.file.filename,
      filePath: req.file.path,
      fileSize: req.file.size
    });

    res.status(201).json({ message: 'File uploaded successfully', file });
    
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file', error });
  }
};