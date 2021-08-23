const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.post('/api/players', PlayerController.create);
    app.get('/api/players', PlayerController.getAll);
    app.get('/api/players/:id', PlayerController.getOne);
    app.put('/api/players/:id', PlayerController.update);
    app.delete('/api/players/:id', PlayerController.delete);
}