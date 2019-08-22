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
  },

  getAllUser: (req, res) => {
    const sql = `SELECT * FROM users`;
    db.query(sql, [], (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: result
        });
      }
    });
  },

  getUserById: (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM users WHERE id = ?`;
    db.query(sql, id, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: result
        });
      }
    });
  },

  deleteUser: (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE id = ?`;
    db.query(sql, id, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: {
            id: id,
            msg: `Data with id = ${id} has been deleted`
          }
        });
      }
    });
  }
};
