require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));


// Handle form submission
app.post('', (req, res) => {
    const comm =req.body.message;
    const name =req.body.name;
    const email =req.body.email;
    const phone =req.body.phone;
    console.log(name,phone,email,comm);
    // Create a transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ayy296i3ehyx@gmail.com',
          pass: 'kqnr odjx hztv zsco'
        }
      });
      
      var mailOptions = {
        from:'ayy296i3ehyx@gmail.com',
        to: 'avinashyadav3654@gmail.com',
        cc:'ayy296i3ehyx@gmail.com',
        subject: 'Sending Email from avrealestate'+name,
        text: `Thanks for your message you send to us \n NAME:${name}\n EMAIL:${email}\n PHONENO:${phone}\n MESSAGE:${comm} `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.redirect('/')
          console.log('email send '+info.response)
        }
      });
    });

app.listen(port,function(){
    console.log("server is running")
})