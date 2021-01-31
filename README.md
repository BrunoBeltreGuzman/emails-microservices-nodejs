# emails-microservices-nodejs

**This is a email management microservice using the nodemailer package.**

**nodemailer**

```javascript
//settings
const transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
       port: 465,
       secure: true,
       auth: {
              user: email,
              pass: password,
       },
});

//sendEmail
const info = await transporter.sendMail({
       from: email,
       to: "test@gmail.com",
       subject: "My subject",
       text: "Plain text body",
       html: `<h1>html body</h1>`,
});
```

**Steps to run this project:**

1. Run `npm install` command

```console
$ npm install
```

2. Run `npm run start` command

```console
$ npm run start
```

**NOTE:**

_Activate access with two-step verification of your email in Gmail and get authentication password_
