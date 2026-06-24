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

exports.getFiles = async(req, res) => {
  try{
    const files = await File.find();
    res.status(200).json(files);
  } catch(err){
    res.status(500).json({ message: err.message });
  }
};

exports.deleteFiles = async(req, res) => {
  try{
    const deletedFile = await File.findByIdAndDelete(req.params.id);
    if(!deletedFile){
      return res.status(404).json({message: 'File not found'});
    }
    res.status(200).json({message: 'File deleted successfully', File: deletedFile});
  } catch(err){
    res.status(500).json({ message: err.message });
  }
}