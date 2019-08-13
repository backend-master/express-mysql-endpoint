const db = require("../config/db");

exports.createDatabase = (req, res) => {
  db.connect(err => {
    if (err) {
      return console.log(err);
    } else {
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
    }
  });
};

exports.deteleDatabase = (req, res) => {
  db.connect(err => {
    if (err) {
      return console.log(err);
    } else {
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
    }
  });
};
