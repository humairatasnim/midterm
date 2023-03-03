const express = require('express');
const router = express.Router();
const checkMemberEmail = require("../db/database");

router.post('/', (req, res) => {
  checkMemberEmail(req.body.emailVal)
    .then((result) => {
      res.json(result.id);
    })
});

module.exports = router;
