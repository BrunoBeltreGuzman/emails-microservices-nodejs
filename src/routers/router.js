const express = require("express");
const router = express.Router();

const emailsRouters = require("../services/Emails/emailsRouters");

router.use("/email", emailsRouters);

module.exports = router;
