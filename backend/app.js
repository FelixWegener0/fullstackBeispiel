import express from 'express';
import cors from 'cors'

import { addNewUser, getAllUser, connectDatabase } from './database/userFunctions.mjs';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello word this is a node server :D');
});

app.post('/createNewUser', (req, res) => {
    addNewUser(req.body);
    res.send('success');
});

app.get('/getAllUser', (req, res) => {
    getAllUser().then(result => res.send(result)).catch(error => res.send('error' + error));
});

connectDatabase();
app.listen(4000, () => {
    console.log('node server started');
});
