const express = require('express');
const router = express.Router();
const checkMemberId = require("../db/login-database");

router.post('/', (req, res) => {
  checkMemberId(req.body.idVal)
    .then((result) => {
      res.cookie("userId", result.id);
      res.json(result.id);
    })
    .catch((err) => { res.json(err); });
});


module.exports = router;
