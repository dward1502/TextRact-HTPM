"use strict";
const nodemailer = require('nodemailer');

// async function main() {

// }
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user: 'dward1502@gmail.com',
    pass:'Pointers619'
  }
});

function sendMail (docPath, address){
  
  const mailOptions = {
    from:'dward1502@gmail.com',
    to: 'shun@hometeampm.com',
    subject:'Test of auto creation of Lease Agreement',
    text: 'Here is a test of the process going all the way through, from upload file : creating doc : send in email. There are more error handlings of grabbing data that needs to be ironed out.',
    attachments:[
      {
        filename:`${docPath}`,
        path:`./LeaseAgreement/${docPath}.docx`
      }
    ]
  }
  
  transporter.sendMail(mailOptions, function (err,info){
    if (err) {
      console.log(err);
    } else {
      console.log(info)
    }
  })
}

module.exports = {
  sendMail
}
