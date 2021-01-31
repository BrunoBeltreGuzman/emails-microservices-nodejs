const nodemailer = require("nodemailer");

class EmailsModel {
       constructor() {}

       async testSendEmail() {
              //Auth
              const email = "test@gmail.com";
              const password = "enviayiygscqrwif";

              const transporter = nodemailer.createTransport({
                     host: "smtp.gmail.com",
                     port: 465,
                     secure: true,
                     auth: {
                            user: email,
                            pass: password,
                     },
              });

              const info = await transporter.sendMail({
                     from: email,
                     to: "test@gmail.com",
                     subject: "My subject",
                     text: "Plain text body",
                     html: `<h1>html body</h1>`,
              });
              return info;
       }

       async sendEmail(email, subject, text) {
              //Auth
              const emailAuth = "test@gmail.com";
              const passwordAuth = "enviayiygscqrwif";

              const transporter = nodemailer.createTransport({
                     host: "smtp.gmail.com",
                     port: 465,
                     secure: true,
                     auth: {
                            user: emailAuth,
                            pass: passwordAuth,
                     },
              });

              const info = await transporter.sendMail({
                     from: emailAuth,
                     to: email,
                     subject: subject,
                     text: text,
              });
              return info;
       }
}

module.exports = EmailsModel;
