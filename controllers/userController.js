const db = require("../config/db");

module.exports = {
  createTB: (req, res) => {
    const sql = ` CREATE TABLE users 
      (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        address VARCHAR(255)
      )
        `;
    db.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          msg: "Table Created"
        });
      }
    });
  },

  deleteTB: (req, res) => {
    const sql = `DROP TABLE users;`;
    db.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          msg: "Table Deleted"
        });
      }
    });
  },

  createUser: (req, res) => {
    const { name, address } = req.body;
    const sql = `INSERT INTO users (name, address) VALUES (?,?)`;
    db.query(sql, [name, address], (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: {
            id: result.insertId || 1
          }
        });
      }
    });
  }
};
