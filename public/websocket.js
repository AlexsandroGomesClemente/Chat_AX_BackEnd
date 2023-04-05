"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./http");
let userConecteds = [];
http_1.io.on('connection', (socket) => {
    socket.on('user-join', (username) => {
        socket.username = username;
        userConecteds.push(username);
        socket.broadcast.emit('user-list', userConecteds);
    });
    socket.on('disconnect', () => {
        userConecteds = userConecteds.filter((u) => u != socket.username);
        socket.broadcast.emit('user-list', userConecteds);
    });
    socket.on('message', (data) => {
        console.log(data.message);
        let obj = {
            username: data.name,
            message: data.text,
        };
        socket.broadcast.emit('show-msg', obj);
    });
});
