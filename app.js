require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const AWS = require('aws-sdk');
const multer = require('multer');
// const multerS3 = require('multer-s3');

const PORT = process.env.PORT || 3000 ;
const app = express();

const DOCAPI = require('./docparser');
const asyncMiddleware = require('./asyncMiddleware');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.render('./public/index.html');
});


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();
today = mm + dd + yyyy + hour + minute;

const storage = multer.diskStorage({
  destination: function(req,file,cb) {
    cb(null, './House_applications');
  },
  filename: function (req,file,cb) {
    let docPath = `${today}-${file.originalname}`;
    cb(null, docPath);
  }
})

const upload = multer({storage: storage});

app.post('/uploadPDF', upload.single('pdfFile'), asyncMiddleware(async (req,res, next) => {
  
  const file = req.file;
  if(!file) {
    const error = new Error('Please upload a file')
    res.send(400);
    return next(error)
  } else {
    res.send(file)

    let docPath = `${today}-${file.originalname}`;
    console.log('==============================')
    console.log("[App] " + docPath);

    let docParserData = await DOCAPI.docParser(docPath)
    return docParserData

  }
})



);


app.listen(PORT, () => { console.log('Server listening on PORT 3000')});