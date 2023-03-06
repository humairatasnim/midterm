const db = require("../connection");

const getMenu = () => {
  return db.query("SELECT * FROM dishes;");
};

const addOrderListToDB = (orderList) => {
  // for (const item of orderList) {
  //   return db.query(`

  //   BEGIN;

  //   WITH inserted_row AS (

  //   INSERT INTO orders (client_id, order_placed)
  //   VALUES (6, NOW())
  //   RETURNING id
  //   )
  //   INSERT INTO order_dishes ( order_id, dish_id, quantity)
  //       VALUES ((SELECT id FROM inserted_row), ${item.id}, ${item.quantity});

  //   COMMIT;`);
  // }

  let queryString = `
  BEGIN;
  WITH inserted_row AS (
    INSERT INTO orders (client_id, order_placed)
    VALUES (, NOW())
    RETURNING id
    )
    INSERT INTO order_dishes (order_id, dish_id, quantity)
    VALUES
 `;

  for (const item of orderList) {
    queryString += ` ((SELECT id FROM inserted_row), ${item.id}, ${item.quantity})`;
    if (JSON.stringify(orderList[orderList.length - 1]) === JSON.stringify  (item)) {
      queryString += `;`;
    } else {
      queryString += `,`;
    }
  }

  queryString += `COMMIT;`;

  return db.query(queryString);
};

module.exports = { getMenu, addOrderListToDB };
