const express = require("express");
const app = express();

const port = process.env.PORT ?? 3001;

// Use the express.static middleware to serve files from the current directory
app.use(express.static(__dirname));

// A simple health check endpoint
app.get("/", (req, res) => {
  res.status(200).send("Hello from Health!");
});

// Serve the static HTML file
app.get("/health", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
