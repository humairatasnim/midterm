const express = require("express");
const router = express.Router();
const { getMenu } = require("../db/queries/menu_queries");

router.get("/", (req, res) => {
  // const clientId = 1;
  const clientId = req.cookies.user;
  getMenu()
    .then((response) => {
      res.render("menu", { dishes: response.rows, clientId: clientId });
    })
    .catch((err) => {
      res.status(500);
    });
});

// router.post('/api/order', (req, res) => {
//   const clientid = 8
//   addOrderListToDB(clientid)
//     .then((result) => {
//       const orderId = result.rows[0].id;
//       res.status(201).json({ id: orderId });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

module.exports = router;
