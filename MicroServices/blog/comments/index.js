const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require("axios")

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

  axios.post('http://localhost:4005/events',{
    type:'CommentCreated',
    data:{
      id:id,
      content,
     postId: req.params.id
    }
  })

  res.status(201).send(comments);
  
});

app.post('/events',(req,res)=>{

  console.log('Event is triggered'+ req.body.event)

  res.send({})
})


app.listen(4001,()=>{
  console.log('listening on port 4001')
})




