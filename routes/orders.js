const express = require('express');
const router  = express.Router();
const { getOrders, approveOrder, rejectOrder, completeOrder } = require("../db/queries/orders");
const sendsms = require('../twillio/sendsms');

const reduceResponeObj = (obj) => {
  const out = obj.reduce((a, v) => {
    if (a[v.id]) {
      a[v.id].dishes.push({name: v.dish, price: v.price, quantity: v.quantity});
    } else {
      a[v.id] = v;
      a[v.id].dishes = [{name: v.dish, price: v.price, quantity: v.quantity}];
      delete a[v.id].quantity;
      delete a[v.id].dish;
      delete a[v.id].price;
    }
    return a;
  }, {});
  return Object.values(out);
};

const renderOrders = (req, res) => {
  const clientId = req.cookies.userId
  getOrders()
    .then((response) => {
      res.render("orders", {orders : reduceResponeObj(response.rows), clientId: clientId});
    })
    .catch(err => {
      res.status(500);
    });
};

router.get("/", (req, res) => {
  renderOrders(req, res);
});

router.post("/", function(req, res) {
  if (req.body.est_time) {
    approveOrder(req.body.order_id, req.body.est_time)
      .then((response) => {
        sendsms.orderCreated(req.body.est_time);
        renderOrders(req, res);
      })
      .catch(err => {
        res.status(500);
      });
  } else if (req.body.reject) {
    rejectOrder(req.body.order_id)
      .then((response) => {
        renderOrders(req, res);
      })
      .catch(err => {
        res.status(500);
      });
  } else if (req.body.complete) {
    completeOrder(req.body.order_id)
      .then((response) => {
        sendsms.orderReady(req.body.order_id);
        renderOrders(req, res);
      })
      .catch(err => {
        res.status(500);
      });
  }
});

router.post("/", function(req, res) {
  if (req.body.est_time) {
    approveOrder(req.body.order_id, req.body.est_time)
      .then((response) => {

        renderOrders(req, res);
      })
      .catch(err => {
        res.status(500);
      });
  } else if (req.body.reject) {
    rejectOrder(req.body.order_id)
      .then((response) => {
        renderOrders(req, res);
      })
      .catch(err => {
        res.status(500);
      });
  } else if (req.body.complete) {
    completeOrder(req.body.order_id)
      .then((response) => {
        renderOrders(req, res);
      })
      .catch(err => {
        res.status(500);
      });
  }
});

module.exports = router;
