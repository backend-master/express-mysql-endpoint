# Make a simple API using Express + MySql

clone this project and then install dependency using npm :

```sh
npm install
```

or with yarn :

```sh
yarn
```

# Step by Step

1. Install MySql or you can go to [MySql Online](https://remotemysql.com/)

Create Database and keep the requirement point, like HOST, PASSWORD, USERNAME etc.
After that make the table :

![table](/assets/table.png)

or you can create table using my endpoint :
| Endpoint | HTTP | Description | Body |
| --------------------- | ---- | ------------- | ------------------------------------------------------------- |
| `/api/v1/books/createTB` | GET | Create Books Table | |
| `/api/v1/users/createTB` | GET | Create User Table | |
| `/api/v1/orders/createTB` | GET | Create User Table | |

2. Create Controller

All you need is just make a controller like before, example for books controller :

```sh
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
```

3. Add your controller into your router

```sh
Router.route("/")
  .post(orderController.createOrder)
  .get(orderController.getAllOrder);
```

And the full endpoint will like this :

### /api/v1/users

| Endpoint            | HTTP   | Description       | Body              |
| ------------------- | ------ | ----------------- | ----------------- |
| `/api/v1/users/`    | POST   | Create new users  | `name`, `address` |
| `/api/v1/users/`    | GET    | Get all users     |                   |
| `/api/v1/users/:id` | GET    | Get user by id    |                   |
| `/api/v1/users/:id` | DELETE | DELETE user by id |                   |

### /api/v1/books

| Endpoint            | HTTP   | Description       | Body             |
| ------------------- | ------ | ----------------- | ---------------- |
| `/api/v1/books/`    | POST   | Create new books  | `name`, `author` |
| `/api/v1/books/`    | GET    | Get all books     |                  |
| `/api/v1/books/:id` | GET    | Get user by id    |                  |
| `/api/v1/books/:id` | DELETE | DELETE user by id |                  |

### /api/v1/books

| Endpoint             | HTTP   | Description       | Body               |
| -------------------- | ------ | ----------------- | ------------------ |
| `/api/v1/orders/`    | POST   | Create new orders | `userId`, `bookId` |
| `/api/v1/orders/`    | GET    | Get all orders    |                    |
| `/api/v1/orders/:id` | GET    | Get user by id    |                    |
| `/api/v1/orders/:id` | DELETE | DELETE user by id |                    |

Finally deploy your backend server to [Heroku](https://heroku.com)
