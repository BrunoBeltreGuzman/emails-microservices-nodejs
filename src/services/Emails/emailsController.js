const EmailsModel = require("./emailsModel");
const emailsModel = new EmailsModel();
const validator = require("../../lib/validator/validator");
class EmailsController {
       constructor() {}

       async testSendEmail(request, response) {
              try {
                     const result = await emailsModel.testSendEmail();
                     response.status(200).json(result);
              } catch (error) {
                     response.status(500).json({
                            message: "Error Internal in the server",
                            error,
                     });
              }
       }

       async sendEmail(request, response) {
              const email = request.body.email;
              const subject = request.body.subject;
              const text = request.body.text;

              if (
                     validator.isValidate(email) &&
                     validator.isValidate(subject) &&
                     validator.isValidate(text, email)
              ) {
                     try {
                            const result = await emailsModel.sendEmail(
                                   email,
                                   subject,
                                   text
                            );
                            response.status(200).json(result);
                     } catch (error) {
                            response.status(500).json({
                                   message: "Error Internal in the server",
                                   error,
                            });
                     }
              } else {
                     response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "email, subject, text",
                            status: 400,
                     });
              }
       }
}

module.exports = EmailsController;
