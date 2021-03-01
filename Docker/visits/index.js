const express = require("express");
const redis = require("redis");
const process = require('process')
const app = express();

const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

app.get("/", (req, res) => {
  process.exit(0)
  client.get("visits", (err, visits) => {
    res.send("number of visits is" + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(3002, () => {
  console.log("Server is listening");
});
