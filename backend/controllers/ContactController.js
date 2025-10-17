const { mailer } = require("../config/mailConfig");
const { baseMessage } = require("../utils/baseMessage");
const { contactSchema } = require("../validation/contactValidation");

class ContactController {
  async post(req, res) {
    try {
      const data = req.body;

      // validate the request
      const { error, value } = contactSchema.validate(data);

      const emailBody = `
You received a new contact message from your website (Bikin.id):

Name: ${value.name}
Email: ${value.email}
Subject: ${value.subject}

Message:
${value.message}
            `;

      if (error)
        return res
          .status(400)
          .send(baseMessage(false, error.details[0].message));

      await mailer.sendMail({
        from: "no-reply@bikin.id",
        to: "adisthana.wijaya@gmail.com",
        subject: "Contact from Bikin.id Website: " + value.subject,
        text: emailBody,
      });

      return res.status(200).send(baseMessage(true, "Email berhasil dikirim!"));
    } catch (error) {
      return res.status(500).send(baseMessage(false, error.message));
    }
  }
}

module.exports = new ContactController();
