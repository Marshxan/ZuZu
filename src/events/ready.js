const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const Chalk = require('chalk');

module.exports = (client) => {
    console.log('Loaded Client')
    const clientID = client.user.id;
    const guilds = client.guilds.cache.map(g => g.id);

    const rest = new REST({ version: '9' }).setToken(require('../config/token'));

    const commands = [];

    client.commands.forEach(command => {
        commands.push(command.data);
    });

    (async () => {
        for (const guild of guilds) {
            try {
                await rest.put(
                    Routes.applicationGuildCommands(clientID, guild),
                    { body: commands }
                );

                console.log(Chalk.green(`Loaded slash commands in guild "${client.guilds.cache.get(guild).name}" (${guild})`));
            } catch (err) {
                console.log(Chalk.red(`Failed to load slash commands in guild "${client.guilds.cache.get(guild).name}" (${guild})`));

                console.log(err);
            }

        }
    })();
}