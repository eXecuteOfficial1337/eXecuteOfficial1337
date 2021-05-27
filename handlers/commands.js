const { readdirSync } = require('fs');
const signale = require('signale');
const cfg = require('../data/config.json');
module.exports = (Vanex) => {
    const citaj = (dirs) => {
        const komande = readdirSync(
            `${process.cwd()}/commands/${dirs}/`,
        ).filter((d) => d.endsWith('.js'));
        console.log(`✅ Učitana kategorija: ${dirs} | (${komande.length} komandi)`);
        for (let komanda of komande) {
            let siEmDi = require(`${process.cwd()}/commands/${dirs}/${komanda}`);
            Vanex.commands.set(siEmDi.meta.name, siEmDi);
            if (siEmDi.meta.aliases)
                siEmDi.meta.aliases.forEach((a) =>
                    Vanex.aliases.set(a, siEmDi.meta.name),
                );
            let imeKomande = komanda.split('.')[0];
        }
    };
    cfg.kategorije.forEach((h) => citaj(h));
};