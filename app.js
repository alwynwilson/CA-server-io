const express = require('express')
const http = require('http')
const Server = require("socket.io").Server
const app = express()

const server = http.createServer(app)
const io = new Server (server,{
cors: {
    origin:"*"
}})

io.on("connection", (socket)=>{
    console.log('We are connected')

    socket.on("chat",chat =>{
        io.emit('chat',chat)
    })
    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
})

const PORT = 3000 || process.env.PORT

server.listen(PORT, () => console.log(`Listening to port ${PORT}`))