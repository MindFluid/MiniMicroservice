const express = require('express');
const axios =  require('axios');

const app = express();
app.use(express.json());

app.post('/events', async (request, response) => {
    const { type, data } = request.body;

    if (type === 'CommentCreated') {
        const status = data.content.includes('scomo') ? 'rejected' : 'approved';

        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        });
    }

    response.send({});
});

app.listen(4003, () => {
    console.log('Listening on 4003');
});