/*
originalName
fileName
filePath
fileSize
*/ 

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  originalName: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('File', fileSchema);