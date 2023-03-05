const db = require('../connection');

const getOrders = () => {
  return db.query(`
  SELECT orders.id, orders.client_id, orders.order_placed, orders.order_approved, orders.order_completed, orders.estimated_time, orders.order_status, clients.name as client, order_dishes.quantity, dishes.title as dish, dishes.price
  FROM orders
  JOIN order_dishes ON orders.id = order_id
  JOIN clients ON clients.id = client_id
  JOIN dishes ON dishes.id = dish_id;
  `);
};

const approveOrder = (orderId, estTime) => {
  return db.query(`
  UPDATE orders
  SET order_approved = CURRENT_TIMESTAMP, estimated_time = ${estTime}
  WHERE orders.id = ${orderId}
  RETURNING *;
  `);
};

const rejectOrder = (orderId) => {
  return db.query(`
  UPDATE orders
  SET order_status = false
  WHERE orders.id = ${orderId}
  RETURNING *;
  `);
};

const completeOrder = (orderId) => {
  return db.query(`
  UPDATE orders
  SET order_completed = CURRENT_TIMESTAMP
  WHERE orders.id = ${orderId}
  RETURNING *;
  `);
};

module.exports = { getOrders, approveOrder, rejectOrder, completeOrder };
