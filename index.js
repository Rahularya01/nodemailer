const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.get("/", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.domain.com",
    port: 587,
    secure: false,
    auth: {
      user: "aaron@propertyrecruitmentpartners.com.au",
      pass: "Agent007!!",
    },
  });
  const mailOptions = {
    from: "aaron@propertyrecruitmentpartners.com.au",
    to: "aryarahul819@gmail.com",
    subject: "Hello from!",
    text: "This is a test email sent from Nodemailer.",
  };

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });

  res.send("Check Logs");
});

app.listen(4000, () => {
  console.log("Server is running on PORT 4000");
});
