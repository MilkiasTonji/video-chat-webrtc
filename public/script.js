
// the path we want to call which we set our server
const socket = io('/')

socket.emit('join-room', ROOM_ID, 10)