// Express.js Framework:
// Introduction to Express.js
// express.js is a npm package
// framework -> is a pack of codes that provide a strict flow of codes that has to be written but how it is done is under our control.
// It manages everything from receiving the request and giving back the response..
// it also manages routes.
// it is fast and more easier to learn!

// Setting up a basic Express application
// npm init -y
// npm i express --save or -g

// first import the express using either es or commonjs
// then initialize the express to the app
// then start to use
// the code explained!

const express = require("express"); // we are importing express framework with require using commonjs
const app = express(); // we are initializing every power of express framework in the variable app
const PORT = 3000; // just creating a PORT variable!

// app-> has every power of express now so we do is app.get -> get is a http method that is used to get req from the server : it is just http method like put, delete, patch, etc.

// and get is a function that takes two arguments (route, reqHandler) => first one is the destination like / -> it is default page like homepage of facebook.com/ and also someOther like /profile these are route then the second argument is reqHandler => reqHandler is nothing but a callback function or also a middleware that takes two arguments request and response : request is the thing that is received from the browser or frontend and the response is the thing we send from the server to the one who requested..

// then we did is res.send("Hello, world!") make sure we don't have to send statuscode here if we don't want because by default status code is 200 ok
// res -> response that we initialized you can put anything me , my in the argument but it is a standard naming... -> res.send("Helloworld") sends helloworld to the browser!

// this is middleware which runs every time user goes on routes
app.use((req, res, next) => {
  console.log("middleware run");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware run again");
  next();
});

// this is real code..

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Routing
// routing is nothing but the page that the user searches on the browser like
// localhost:3000/ - this is a route / is a route and another localhost:3000/profile <- /profile is a route yeah route is the destiny that the user request and we send as a response..

app.get("/profile", (req, res) => {
  res.send("This is a profile route!");
});

// this is somewhat named as dynamic routing... when we put /: and some route then we can easily change and display the route on the screen.. this varies from anything we put.. it's easy..>!
app.get("/profile/:user", (req, res, next) => {
  //   console.log(req.params.user);
  //   handling the error this is default error handler

  return next(new Error("Something went wrong!"));
  res.send(`This is a page of ${req.params.user}`);
});

// Middleware
// functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.
// from the request sent from my pc to the facebook server when the cycle is going on if i stop the request in the middle before we call the (req,res) func that sends response and show something then that is known as middleware.
// we use middleware using app.use(middlewareFunc) -> multiple ways are there.. such as using app.use((req,res,next)=>{next()}) and another is first define func out of the use and then place app.use(myFunc()) and another use is direct... app.get("/",middlewareFunc,(req,res)=>)... this is how the work is done.. if we use app.use then we should use this before any route or http req...

// Request and response handling
// frontend = backend = frontend
// means when the user goes on route any route on our localhost:3000 that we have initialize for some tasks then it req our backend and our backend again sends the response to the frontend that's how the backend is the middle part not the end part.

// Error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});

// app.listen is used to run the app or express app on the port we want!
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
