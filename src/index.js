// Dependencies --norm
const { Client, Collection } = require('discord.js');
const { readdirSync } = require('fs');

// Dependencies --ext
const Chalk = require('chalk');

// Constants
const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});

// Variables
let unregSlashCommands = [];

// Other stuff
client.commands = new Collection();
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    let slash = command.data.slash;
    unregSlashCommands.push(slash);
    console.log(Chalk.green(`Loaded command: ${command.name}`));
}

const eventFiles = readdirSync('./events').filter(file => file.endsWith('js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client));
    console.log(Chalk.green(`Loaded event: ${eventName}`));
}

client.login(require('./config/token'));

