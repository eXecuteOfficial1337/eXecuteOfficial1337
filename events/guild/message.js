const Discord = require('discord.js');
const fs = require('fs');
const moment = require('ms');
const cfg = require('../../data/config.json');

module.exports = async (Vanex, message) => {

    let prefix = (await message.guild.document).prefix ?? '.'

    let args = message.content.slice(prefix.lenght).trim().split(/ +/g);

    const siEmDi = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix)) return;

    let komanda = Vanex.commands.get(siEmDi) || Vanex.commands.get(Vanex.aliases.get(siEmDi));
    if (!komanda) return;

    if (komanda.meta.perms.require) {

        let dozvole = komanda.meta.perms.permissions.toString();
        if (!message.memeber.hasPermission(komanda.meta.perms.permissions)) {
            return message.channel.send('errormessage');
        }
    }

    if (komanda.meta.hasArgs && !args.length)
        return message.channel.send('errormessage');

    if (komanda.meta.devOnly) {
        if (message.author.id !== '294225541316476928' && message.author.id !== '368111065290244096') return;
    }

    try {
        komanda.pokreni(Vanex, message, args, cfg, Discord);
    } catch (error) {
        return message.channel.send(`Error: \n \```${error}\````);
    }

}