const express = require("express");
const router = express.Router();

const EmailsController = require("./emailsController");

const emailsController = new EmailsController();

router.get("/", emailsController.testSendEmail);

router.post("/", emailsController.sendEmail);

module.exports = router;
