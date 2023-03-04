const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log("RES",req.cookies);
  if (req.cookies.userId !== "2") {
    return res.status(401).send("Please Login as an employee to see this page");
  }
  res.render('restaurant');
 });

module.exports = router;



