const { Router } = require('express');
const { roomManagerController }= require('../controllers/room-manager.controller');

const roomManagerRouter = Router();

roomManagerRouter.use(
    '/room-manager', 
    roomManagerRouter.get('/all', roomManagerController.getAll),
    roomManagerRouter.post('/create-room', roomManagerController.postCreate),
);

module.exports = roomManagerRouter;