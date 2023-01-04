// 'Import' the Express module instead of http
const express = require("express");
// Initialize the Express application
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const pairings = require("./routers/bbbrew");

dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value

// let PORT = 4040;

// if (process.env.PORT) {
//   PORT = process.env.PORT;
// }

const app = express();

const db = mongoose.connection;

mongoose.connect(process.env.MONGODB);

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
app.use(cors);
app.use(express.json());
app.use(logging);

app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.use("/bbbrew", pairings);
// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
