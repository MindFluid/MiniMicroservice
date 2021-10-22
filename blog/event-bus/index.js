const express = require('express');
const axios =  require('axios');
const { response } = require('express');

const app = express();

app.post('/events', (request, response) => {
    const event = request.body;

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);

    response.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});