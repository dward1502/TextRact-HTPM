require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const PORT = process.env.PORT || 3000 ;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.render('./public/index.html');
});

AWS.config.update({
  accessKeyId: process.env.USER_KEY,
  secretAccessKey: process.env.USER_SECRET
});
const s3 = new AWS.S3();
const myBucket = process.env.BUCKET;

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: myBucket,
    acl:'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req,file,cb) {
      let fullPath = 'homeApplications/' + file;
      cb(null,fullPath)
    }
  })
})

app.post('/uploadPDF', upload.array('pdfFile'),(req,res,next) => {
  console.log(res);
  res.send(`Successfully uplaoded files; ${req.files.length}`);
})


app.listen(PORT, () => { console.log('Server listening on PORT 3000')});