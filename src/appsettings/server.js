// server.js
const mediasoup = require('mediasoup');
const config = require('./mediasoup-server-config');

// Função assíncrona para inicializar o servidor Mediasoup
async function startMediasoupServer() {
  // Crie um servidor Mediasoup
  const worker = await mediasoup.createWorker();

  // Configurar o servidor Mediasoup
  const router = await worker.createRouter({
    mediaCodecs: [
      {
        kind: 'audio',
        mimeType: 'audio/opus',
        clockRate: 48000,
        channels: 2,
      },
    ],
  });

  // Iniciar o servidor Node.js
  const express = require('express');
  const roomManagerRouter = require('../routes/room-manager.router');

  const server = () => {
    const app = express();
    app.use(express.json());
    app.use(roomManagerRouter);
    app.listen(config.listenPort, config.listenIp, () => {
      console.log(`Server is listening on ${config.listenIp}:${config.listenPort}`);
    });
  }

  server();
}

// Chame a função assíncrona para iniciar o servidor Mediasoup
startMediasoupServer();
