const db = require('../connection');

const getOrders = () => {
  return db.query(`
  SELECT orders.id, orders.order_placed, orders.order_approved, orders.order_completed, orders.estimated_time, orders.order_status, clients.name as client
  FROM orders
  JOIN clients ON clients.id = client_id;`)
};

const approveOrder = (order_id, est_time) => {
  return db.query(`
  UPDATE orders
  SET order_approved = CURRENT_TIMESTAMP, estimated_time = ${est_time}
  WHERE orders.id = ${order_id}
  RETURNING *;`)
};

const rejectOrder = (order_id) => {
  return db.query(`
  UPDATE orders
  SET order_status = false
  WHERE orders.id = ${order_id}
  RETURNING *;`)
};

const completeOrder = (order_id) => {
  return db.query(`
  UPDATE orders
  SET order_completed = CURRENT_TIMESTAMP
  WHERE orders.id = ${order_id}
  RETURNING *;`)
};

module.exports = { getOrders, approveOrder, rejectOrder, completeOrder };
