const express = require("express");
const bodyParser = require("body-parser");
const { stringify } = require("querystring");

const app = express();
const port = 5000; // You can change this to any port you prefer

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for handling incoming webhook requests
app.post("/webhook", (req, res) => {
  // Get the JSON data from the request body
  const data = req.body;

  // Process the data (customize this part based on your needs)
  // For example, you might extract certain fields or perform some calculations
  // In this example, we'll just log the received data
  console.log("Received webhook data:");
  console.log(JSON.stringify(data));

  // Perform some action based on the data

  // Send a response (optional)
  res.status(200).send("Webhook received successfully!");
});

// Route for handling GET requests to retrieve New Relic integration description
app.get("/", (req, res) => {
  const description = {
    name: "New Relic Integration",
    version: "1.0.0",
    description: "This integration allows monitoring and observability using New Relic."
  };

  res.status(200).json(description);
});
// Start the server
app.listen(port, () => {
  console.log(`Webhook handler listening at http://localhost:${port}`);
});


