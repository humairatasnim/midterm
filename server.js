// load .env data into process.env
require("dotenv").config();
const db = require("./db/connection");
const { addOrderListToDB } = require("./db/queries/menu_queries");
// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
const app = express();
app.set('view engine', 'ejs');

//cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));
app.use(cookieParser());
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const loginRoutes = require('./routes/login');
const orderSummaryRoutes = require('./routes/order-summary');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);

// Note: mount other resources here, using the same pattern above
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);
app.use('/login', loginRoutes);
app.use('/order-summary', orderSummaryRoutes);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("homepage");
});

// app.post('/api/order', (req, res) => {
//   const clientid = 1
//   addOrderListToDB(clientid)
//     .then((result) => {
//       const orderId = result.rows[0].id;
//       res.status(201).json({ id: orderId });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

app.post("/api/order", (req, res) => {
  const { orderList } = req.body;
  // const clientId = req.cookies.userId
  // console.log(req.body.orderList, "uuuuuuu")

  addOrderListToDB(orderList).then((response) => {
    console.log("jkjkjkj", response);
  });

  // console.log('from server.js', orderList, clientId)
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
