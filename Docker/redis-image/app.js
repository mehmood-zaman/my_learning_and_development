const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("by there!");
});

app.listen(3000, () => {
  console.log("Server started");
});
