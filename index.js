const express = require("express");
const path = require("path");
const app = express();

// Serve the static HTML file
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

// A simple health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("Hello from Health!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
