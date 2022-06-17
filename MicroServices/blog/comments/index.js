const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();

app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts", (req, res) => {
  
});

app.post("/posts/:id/comments", (req, res) => {
  const id = randomBytes(4).toString("hex");

  const {content} = req.body;

  const comments = commentsByPostId[id] || [];

  comments.push({id,content});

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
  
});
