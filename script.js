// Form handling

// we have to install cookie-parser : npm i cookie-parser
// Sessions & Cookies

// sessions => Sessions are used to store user information on the user's server side
// cookies=> Cookies are small text files used to store user information on the user's computer

// take an example of the cookies saved on the browser that is what it is it saves all the login credentials and information of your account and if you clear it then you login also goes out...! this is only theory

const express = require("express");
const app = express();
const PORT = 3000;

// we use middleware before any route
// this is how we use sessions and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is a default route!");
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
