//Include modules:-
//-----------------------------------------------------------------
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const connectToDB = require("./utils/connectToDB");

//Globals:-
//-----------------------------------------------------------------
//Read config file
dotenv.config({
  path: "./config.env",
});
const app = express();
const port = process.env.PORT || 3000;

//Middlewares:-
//-----------------------------------------------------------------
//Middleware for debugging [Displays each incoming request in the console]
app.use(morgan("dev"));

//Reading data from the body of the request as json and converting it to javascript object into req.body
app.use(express.json({ limit: "10kb" }));

//Second: Data sanitization against NoSQL injection attacks.
app.use(mongoSanitize());

//Third: Data sanitization against XSS(cross-site scripting) attacks.
app.use(xss());

//Connect to database then start the server:-
//-----------------------------------------------------------------
(async () => {
  await connectToDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
