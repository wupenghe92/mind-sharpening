const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
const fs = require('fs');
const authController = require('./controllers/authController.js');
const tastController = require('./controllers/taskController.js');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use( (req,res,next) => {
  console.log(req.method, req.url);
  next();
})
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './static')));

app.post('/auth', authController.verifyUser, authController.setCookie, (req, res) => {
  res.redirect('/home.html');
});

app.get('/show', authController.checkCookie, tastController.showOrders);

app.post('/upload', authController.checkCookie, tastController.uploadOrder);

app.get('/search', authController.checkCookie, tastController.searchOrder);


io.on('connection', (socket) => {
  console.log('socket connected  ',socket.id)

  socket.on('subscribe', (data) => {
    data = JSON.parse(data);
    for (let i=0; i<data.length; i++) {
      const order = tastController.orders.find((obj)=>{
        return obj.productId === Number(data[i]);
      })
      if (order) {
        socket.emit('order', JSON.stringify(order));
      }
    }
  });

  socket.on('disconnect', (reason) => {
    console.log('socket disconnected  ',socket.id)
  });
});

// app.listen(8080, () => console.log('Server listening to port 8080'));
server.listen(8080);
