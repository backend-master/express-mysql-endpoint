const db = require("../config/db");

exports.createDatabase = (req, res) => {
  const sql = ` CREATE TABLE books 
      (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        author VARCHAR(255)
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
};

exports.deteleDatabase = (req, res) => {
  const sql = `DROP TABLE books;`;
  db.query(sql, (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      res.status(200).json({
        msg: "Table Deleted"
      });
    }
  });
};

exports.createBooks = (req, res) => {
  const { name, author } = req.body;
  const sql = `INSERT INTO books (name, author) VALUES (?,?)`;
  db.query(sql, [name, author], (err, result) => {
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
};

exports.getAllBooks = (req, res) => {
  const sql = `SELECT * FROM books`;
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
};

exports.getBookById = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM books WHERE id= ?`;
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
};

exports.deleteBookById = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM books WHERE id= ?`;
  db.query(sql, id, (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      res.status(200).json({
        err: false,
        errMessage: null,
        data: {
          id: id,
          msg: `Book has been deleted => ${result}`
        }
      });
    }
  });
};
