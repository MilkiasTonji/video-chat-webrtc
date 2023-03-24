const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const {v4: uuidV4} = require('uuid')


const PORT = 3000

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res)=> {
    // creates new room
    res.redirect(`/${uuidV4()}`)
})

app.get('/:roomId', (req,res)=> {
    res.render('room', {roomId: req.params.roomId})
})


io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        console.log(roomId, userId)
    })
})  


server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
