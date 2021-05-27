const { Schema, model } = require('mongoose');

module.exports = model(
    'Guild',
    new Schema({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        prefix: {
            type: String,
            default: '.',
        },
        modlogs: {
            type: String
        },
        muterole: {
            type: String,
        },
    }),
);