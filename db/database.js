const db  = require("./connection");

const checkMemberEmail = function(email) {
  return db
  .query(`SELECT * FROM clients WHERE email = $1`, [email])
  .then((result) => {
    return result.rows[0] || null
  })
  .catch((err) => {
    console.log(err.message);
  });

};

module.exports = checkMemberEmail;
