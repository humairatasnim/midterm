const db = require('../connection');

const getOrders = () => {
  return db.query('SELECT orders.id, orders.order_placed, orders.order_approved, orders.order_completed, orders.estimated_time, orders.order_status, clients.name as client FROM orders JOIN clients ON clients.id = client_id;')
};

module.exports = { getOrders };
