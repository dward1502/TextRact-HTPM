require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const AWS = require('aws-sdk');
const multer = require('multer');
// const multerS3 = require('multer-s3');

const PORT = process.env.PORT || 3000 ;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.render('./public/index.html');
});

const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb(null, './House_applications');
  },
  filename: function (req,file,cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({storage: storage});

app.post('/uploadPDF', upload.single('pdfFile'), (req,res, next) => {
  const file = req.file;
  if(!file) {
    const error = new Error('Please upload a file')
    res.send(400);
    return next(error)
  } else {
    res.send(file)
  }
})


app.listen(PORT, () => { console.log('Server listening on PORT 3000')});