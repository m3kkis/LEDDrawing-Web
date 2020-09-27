const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const port = 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {

    console.log('Client connected');

    socket.on('piconnected', function(data) { 
        console.log("Device " + data.id + " has connected.");
    });

    
    socket.on('sendMatrix', function(data) { 
        console.log(data);
        socket.broadcast.emit('setRGB',data);
    });
    

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));