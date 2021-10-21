const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (request, response) => {
    response.send(commentsByPostId[request.params.id] || []);
});

app.post('/posts/:id/comments', (request, response) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = request.body;

    const comments = commentsByPostId[request.params.id] || [];

    comments.push({ postId: request.params.id, id: commentId, content });

    commentsByPostId[request.params.id] = comments;

    response.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});