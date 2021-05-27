const { readdirSync } = require('fs');
const signale = require('signale');

module.exports = (Vanex) => {
    const citaj = (dirs) => {
        const eventi = readdirSync(`${process.cwd()}/events/${dirs}`).filter((d) =>
            d.endsWith('js'),
        );
        for (let event of eventi) {
            const VanexEvent = require(`${process.cwd()}/events/${dirs}/${event}`);
            let event_ime = event.split('.')[0];
            Vanex.on(event_ime, VanexEvent.bind(null, Vanex));
            signale.success(`Ucitan event: ${event_ime}`);
        }
    };
    ['client', 'guild'].forEach((e) => citaj(e));
};