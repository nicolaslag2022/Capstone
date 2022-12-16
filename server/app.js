// 'Import' the Express Module Instead of http
const express = require("express");
// Initialize the express application
const app = express();
// Request handlers go here
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

// Tell Express app to start listening
// Running on 4040
app.listen(4040, () => console.log("Listening on port 4040"));
