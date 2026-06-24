<h1>File/Image Upload API</h1>

A RESTful File Management API built using Express.js, Node.js, MongoDB, Mongoose, and Multer. This project allows users to upload images, store file metadata in MongoDB, retrieve uploaded files, and delete files. It also includes image validation and file size restrictions.

Features:

* Upload image files
* Store file metadata in MongoDB
* Get all uploaded files
* Delete uploaded files
* Serve uploaded images statically
* Image validation (JPG, JPEG, PNG only)
* File size limit validation
* Proper HTTP status codes and error handling

Tech Stack:

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer
* Postman

API Endpoints:

* Upload Image

POST /api/files/upload

Body:
form-data

Key:

```text
image
```

Type:

```text
File
```

Select a JPG, JPEG, or PNG image file.

* Get All Uploaded Files

GET /api/files

* Delete File

DELETE /api/files/:id

* Access Uploaded Image

GET /uploads/:filename

Example:

```http
http://localhost:5000/uploads/1719300000000-image.jpg
```

Validation:

* Only JPG, JPEG, and PNG images are allowed.
* Maximum file size: 3 MB.

Status Codes:

200 - Success

201 - Created

400 - Bad Request

404 - Not Found

500 - Internal Server Error

Testing: All API endpoints and validations were tested using Postman.

Author: Created as part of the Syntecxhub Backend Development Internship.

<br>
<br>

## Postman Testing Screenshots

### Upload Image
<img width="1431" height="622" alt="Screenshot 2026-06-24 134114" src="https://github.com/user-attachments/assets/3493240d-df2e-4aba-a441-d74b9c3a98e2" />

### Invalid File Upload
<img width="1427" height="395" alt="Screenshot 2026-06-24 144420" src="https://github.com/user-attachments/assets/4c8cdb74-6511-48c8-81bc-735163a3fc9c" />

### Get All Files
<img width="1433" height="487" alt="Screenshot 2026-06-24 141831" src="https://github.com/user-attachments/assets/116d74b1-894e-49fb-a1d2-573d8c25bea2" />

### Delete File
<img width="1440" height="485" alt="Screenshot 2026-06-24 141857" src="https://github.com/user-attachments/assets/51b93bea-e9c3-4365-85c7-fa6d98ccfb15" />

### Access Uploaded Image
<img width="1437" height="850" alt="Screenshot 2026-06-24 143446" src="https://github.com/user-attachments/assets/c74a5cd0-d63b-4872-9ca7-a646a8f3d16d" />

