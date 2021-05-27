const Discord = require('discord.js');
const mongoose = require('mongoose');

const Vanex = new Discord.Client();
const cfg = require('./data/config.json');
require('./extenders/Guild');

const als = ['aliases', 'commands'];
als.forEach((i) => (Vanex[i] = new Discord.Collection()));
['events', 'commands'].forEach((i) => require(`./handlers/${h}`)(Vanex));

mongoose.connect('',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (error) => error ? console.log('Nisam se uspio povezati sa db') : console.log('Uspjesno sam se povezao sa db'));

Vanex.login('NTc2NDc2Nzk4OTQzMTAwOTQ4.XNXD2w.vWB8H0kqMF17izXIwRHDt33r0FM');