import express from 'express';
import cors from 'cors'

import { addNewUser, getAllUser, connectDatabase, closeConnectionDatabase } from './database/userFunctions.mjs';

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(4000, () => {
    console.log('node server started');
});

connectDatabase();

app.get('/', (req, res) => {
    res.send('Hello word this is a node server :D');
});

app.get('/getAllUser', (req, res) => {
    getAllUser().then(result => res.send(result)).catch(error => res.send('error: ' + JSON.stringify(error)));
});

app.put('/createNewUser', (req, res) => {
    addNewUser(req.body).then(result => res.send(result)).catch(error => res.send('error: ' + JSON.stringify(error)));
});

app.get('/login', (req, res) => {
    console.log("into funciton")
    const headers = req.headers;
    console.log(headers.username, headers.password)
    res.send("pass")
})


// Error handling
function onShutdown() {
    console.log('shuting down server');
    closeConnectionDatabase();
    server.close(() => {
        console.log('server closed');
        process.exit();
    });
};

// SIGINT (Strg+C)
process.on('SIGINT', () => {
    console.log('SIGINT erhalten');
    onShutdown();
});

// SIGTERM
process.on('SIGTERM', () => {
    console.log('SIGTERM erhalten');
    onShutdown();
});

// unknown
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    onShutdown();
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
    onShutdown();
});
