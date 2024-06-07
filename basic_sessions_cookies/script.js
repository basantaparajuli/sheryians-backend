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

// basically when we fill up forms or any of the login info to the browser the plain text is converted to blob -> encoded non readable data then the server needs to change it to the plain text again to read so that these two is used... express.json() blobs the data and hence the express.urlencoded -> changes it to the readable again....!

app.get("/", (req, res) => {
  res.send("This is a default route!");
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
