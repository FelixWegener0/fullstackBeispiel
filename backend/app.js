import express from 'express';

const app = express();

app.get('/', function(req, res) {
    res.send('Hello word');
})

app.listen(4000);