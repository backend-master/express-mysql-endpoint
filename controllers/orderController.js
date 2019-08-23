const db = require("../config/db");

module.exports = {
  createTable: (req, res) => {
    const sql = `CREATE TABLE orders (
            id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
            userId int NOT NULL,
            bookId int NOT NULL,
            FOREIGN KEY (userId) REFERENCES users(id),
            FOREIGN KEY (bookId) REFERENCES books(id)
        )`;
    db.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          msg: `Table order created => ${result}`
        });
      }
    });
  },

  deleteTable: (req, res) => {
    const sql = `DROP TABLE orders`;
    db.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          msg: `Table order deleted => ${result}`
        });
      }
    });
  },

  createOrder: (req, res) => {
    const { userId, bookId } = req.body;
    const sql = `INSERT INTO orders (userId, bookId) VALUES (?, ?)`;
    db.query(sql, [userId, bookId], (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: {
            id: result.insertId
          }
        });
      }
    });
  },

  getAllOrder: (req, res) => {
    const sql = `
    SELECT orders.id, users.name, users.address, books.name AS title, books.author 
    FROM orders
    INNER JOIN users ON orders.id = users.id
    INNER JOIN books ON orders.id = books.id
    `;
    db.query(sql, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: {
            id: result
          }
        });
      }
    });
  },

  getOrderById: (req, res) => {
    const id = req.params.id;
    const sql = `
    SELECT orders.id, users.name, users.address, books.name AS title, books.author 
    FROM orders 
    INNER JOIN users ON orders.id = users.id
    INNER JOIN books ON orders.id = books.id
    WHERE orders.id = ?
    `;
    db.query(sql, id, (err, result) => {
      if (err) {
        return console.log(err);
      } else {
        res.status(200).json({
          err: false,
          errMessage: null,
          data: {
            id: result
          }
        });
      }
    });
  }
};
