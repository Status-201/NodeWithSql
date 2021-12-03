const conn = require("../config/database");

module.exports = {
  create: (data, callback) => {
    conn.query(
      `insert into reg(name,email,password) values (?,?,?)`,
      [data.name, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
