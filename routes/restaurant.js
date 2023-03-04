const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log("RES",req.cookies);
  if (!req.cookies.userId) {
    res.render('homepage');
  }
  res.render('restaurant');
 });

module.exports = router;



