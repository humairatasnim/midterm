const db  = require("./connection");

const checkMemberId = function(id) {
  return db
  .query(`SELECT * FROM clients WHERE id = $1`, [id])
  .then((result) => {
    return result.rows[0] || null
  })
  .catch((err) => {
    console.log(err.message);
  });

};

module.exports = checkMemberId;
