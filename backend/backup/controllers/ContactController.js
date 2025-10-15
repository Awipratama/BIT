const { mailer } = require("../config/mailConfig");
const { baseMessage } = require("../utils/baseMessage");
const { contactSchema } = require("../validation/contactValidation");

class ContactController {
    async post(req, res) {
        try {
            const data = req.body;

            // validate the request
            const { error, value } = contactSchema.validate(data);

            if (error) return res.status(400).send(baseMessage(false, error.details[0].message))

            await mailer.sendMail({
                from: "test@bikincv.id",
                to: value.email,
                subject: "test",
                text: "test",
            })

            return res.status(200).send(baseMessage(true, "Email berhasil dikirim!"))
        } catch (error) {
            return res.status(500).send(baseMessage(false, error.message))
        }
    }
}

module.exports = new ContactController()