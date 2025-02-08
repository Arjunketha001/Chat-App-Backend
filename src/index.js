import express from 'express';
import { createServer } from 'http';
import { StatusCodes } from 'http-status-codes';
import { Server } from 'socket.io';

// import { setInterval } from 'timers';
import bullServerAdapter from './config/bullboardConfig.js';
import connectDB from './config/dbConfig.js';
// import mailer from './config/mailConfig.js';
import { PORT } from './config/serverConfig.js';
import messageSocketController from './controllers/messageSocketCntroller.js';
import apiRouter from './routes/apiRoutes.js';

const app = express();

const server=createServer(app);
const io=new Server(server)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/ui', bullServerAdapter.getRouter());



app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});

// whenever client connects to server via ws protocol
io.on('connection', (socket) => { 
  // console.log('user connected', socket.id);
  // // sends message to client after every 3 seconds
  // // setInterval(() => {
  // //   socket.emit('message', 'Hello from server');
  // // }, 3000);

  // socket.on('messageFromClient', (data) => {
  //   console.log('message from client', data);
  //   // here "message" is event name and data is payload
  //   socket.broadcast.emit('message', data.toUpperCase());
  //   });


  messageSocketController(io, socket); // io is server instance and socket is client instance
});
// listens both express and socket.io server

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
