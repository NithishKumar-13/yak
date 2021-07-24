const express = require('express')
const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
    cors : {
        origin : 'http://loalhost:8080',
        methods : ['GET', 'POST']
    }
})
const cors = require('cors')
const PORT = process.env.PORT || 8080

//middlewares
app.use(cors())

let ROOM

io.on('connection', socket => {

    socket.on('join-room', (userData) => {
        ROOM = userData.room
        socket.join(ROOM)
        socket.broadcast.emit('user-connected', userData.palette )
    })

    socket.on('send-message', (data) => {
        console.log(data)
        io.to(ROOM).emit('send-room-message', data )
    })
})

app.get('/', (req,res) =>{
    res.send('Hello from the server!')
})

httpServer.listen(PORT, () => console.log(`Server listening to port ${PORT}...`))