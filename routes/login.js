const express = require('express');
const router = express.Router();
const checkMemberEmail = require("../db/database");

router.post('/', (req, res) => {
  checkMemberEmail(req.body.emailVal)
    .then((result) => {
      res.cookie("userId", result.id);
      res.json(result.id);
    })
    .catch((err) => { res.json(err); });
});


module.exports = router;
