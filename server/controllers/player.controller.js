const Player = require('../models/player.model');

module.exports = {
    create: (req, res) => {
        const { name, position } = req.body;
        Player.create({
            name,
            position,
        })
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err));
    },

    getAll: (req, res) => {
        Player.find({})
            .then(players => res.json(players))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then(player => res.json(player))
            .catch(err => res.json(err));
    },

    update: (req, res) => {
        Player.findOneAndUpdate( 
                { _id: req.params.id },
                req.body,
                { runValidators: true, new: true }
            )
            .then(updatedPlayer => res.json(updatedPet))
            .catch(err => res.status(400).json(err));
    },

    delete: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then(deletedPlayer => res.json(deletedPlayer))
            .catch(err => res.json(err));
    },
}