const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.MAIL_USER}>`,
    to: "awipratama05122006@gmail.com",
    subject: `Message from ${name}`,
    text: `You received a new message from the contact form:

    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(4000, () => console.log("✅ SMTP server running on port 4000"));
