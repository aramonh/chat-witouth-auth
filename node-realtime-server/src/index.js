let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');
    //recibe solo para imprimir
    /*socket.on('new-message', (message) => {
      console.log(message);
    });*/
    
    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
        //broadcast causa al diferencias  la chats, averiguar que hace
       });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});