const crypto = require('crypto');
let rooms = [];

class RoomManagerController {
  getAll(req, res) {
    return res.json(rooms);
  }

  postCreate(req, res) {
    const newRoomHash = crypto.randomBytes(16).toString('hex'); // Implemente esta função para gerar um nome único
    rooms.push(newRoomHash); // Adicione a nova sala à lista de salas
  
    // Retorne um ID de sala gerado ou uma mensagem de confirmação
    res.json({ roomId: newRoomName, message: 'Sala de conferência criada com sucesso.' });
  }
}

const roomManagerController = new RoomManagerController();

module.exports = {
  roomManagerController,
};