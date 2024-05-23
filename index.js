const express = require('express')
const app = express()
const socketio = require('socket.io')
const http = require('http')

const server = http.createServer(app)
const io = socketio(server)
const port = 4000
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
