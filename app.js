const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const port = 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));