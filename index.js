const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

// setting up ejs
app.set("view engine", "ejs");

// these are the parsers..
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const dynamicRoutingHandler = (req, res, next) => {
  console.log("The dynamic routing is here");
  next();
};

// just setting up a server
app.get("/", (req, res) => {
  //   console.log(__dirname + "/public"); You can uncomment this xD...

  res.render("index");
});

app.get("/profile/:users", dynamicRoutingHandler, (req, res) => {
  res.send(`<h1>Welcome back, ${req.params.users}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

// just no necessary
