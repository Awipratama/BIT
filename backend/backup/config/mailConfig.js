const nodemailer = require('nodemailer')
exports.mailer = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "",
    port: process.env.MAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USER || "",
        pass: process.env.MAIL_PASS || "",
    },
})