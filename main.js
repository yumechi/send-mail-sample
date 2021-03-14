const nodemailer = require("nodemailer");
require("dotenv").config()

const auth = {
  type: "OAuth2",
  user: process.env.SENDER_EMAIL_ADDRESS,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
}

const transporter = nodemailer.createTransport({      
  host: "smtp.gmail.com",
  secure: true,
  auth: auth,
});

const mailContent = {
  to: process.env.RECEIVER_EMAIL_ADDRESS,
  subject: "テストメール",
  text: "ほんぶんにゃ",
};

transporter.sendMail(mailContent, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});