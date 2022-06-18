const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require("axios");
const app = express();

app.use(bodyParser.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };

  axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });
});

app.post("/events", (req, res) => {
  console.log("Event is triggered" + req.body.event);

  res.send({});
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
