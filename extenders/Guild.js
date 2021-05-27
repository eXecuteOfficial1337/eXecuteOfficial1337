const { Structures } = require('discord.js');
const model = require('../models/Guild');

module.exports = Structures.extend('Guild', (Guild) => {
  return class extends Guild {
    constructor(...args) {
      super(...args);
    }
    get document() {
      return new Promise(async (res) => {
        res(
          (await model.findOne({ id: this.id })) ||
            (await new model({
              id: this.id,
            }).save()),
        );
      });
    }
  };
});