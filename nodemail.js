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

const mailOptions = {
  from:'dward1502@gmail.com',
  to: 'daniel@hometeampm.com',
  subject:'Subject of your email',
  text: '<p>Your html here</p>',
  attachments:[
    {
      filename:'Lease Agreement',
      path:'./House_applications/Sample Rentak Application.pdf'
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