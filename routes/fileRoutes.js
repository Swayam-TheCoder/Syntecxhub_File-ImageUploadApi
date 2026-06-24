const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { uploadFile, getFiles, deleteFiles } = require('../controllers/fileControllers');

router.post('/upload', upload.single('image'), uploadFile);
router.get('/', getFiles);
router.delete('/:id', deleteFiles);


module.exports = router; 