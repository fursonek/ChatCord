const path = require("path");
const http = require('http');
const express = require("express");
const socketio = require("socket.io");

const PORT = 8002 || process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

let messages = [];

app.get("/", (req, res) => {
    res.send({response: "ok."}).status(200);
})

io.on('connection', socket => {
    console.log(`New connection...`);

    socket.emit('message', 'Connected!');

    socket.on("fetchMessages", args => {
        socket.emit('fetchMessages', messages);
    })

    socket.on("newMessage", message => {
        messages.push(message);
        io.emit('fetchMessages', messages);
        console.log(messages);
    })
})


server.listen(PORT, () => {
    console.log(`Server  running on port ${PORT}`);
})