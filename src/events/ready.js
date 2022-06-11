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

module.exports = (client) => {
    console.log(`${client.channels.cache.size} channels`)
    console.log(`${client.guilds.cache.size} servers`)
    console.log(`${client.users.cache.size} users`)
    console.log(`${require("../config/other.js").Bots_Name} Version ${require("../config/other.js").Version_Of_Bot} Loaded`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Owner ID: ${require("../config/other.js").Owner1}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Owner Name: ${require("../config/other.js").OwnerName}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Owner Promo: ${require("../config/other.js").Owner_Promo}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Bot ID: ${require("../config/other.js").Bot_ID}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Bot DOB: ${require("../config/other.js").Date_Of_Birth}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Top.GG Link: ${require("../config/other.js").Top_GG_Link}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Embed Hex: ${require("../config/other.js").Embed_Hex}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Guild Logs 1: ${require("../config/other.js").Guild_logs1}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Guild Logs 2: ${require("../config/other.js").Guild_logs2}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Website URL: ${require("../config/other.js").Website}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Website Name: ${require("../config/other.js").Website_Name}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Bots Name: ${require("../config/other.js").Bots_Name}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Support Linl: ${require("../config/other.js").Support_server}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Blog Link: ${require("../config/other.js").Bot_Blog}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`TOS Link: ${require("../config/other.js").Bots_TOS}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Total Ram: ${require("../config/other.js").Total_Ram}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Version: ${require("../config/other.js").Version_Of_Bot}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Other 1: ${require("../config/other.js").Other1}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Other 2: ${require("../config/other.js").Other2}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Bot Invite: ${require("../config/other.js").Bot_Invite}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    console.log(`Bot Avatar: ${require("../config/other.js").Bot_Avatar}`)
    console.log(`Config Name Loaded: ✔️`)
    console.log(`Confirmed: ✔️`)
    /**/ console.log(``)
    console.log(`${client.channels.cache.size} channels`)
    console.log(`${client.channels.cache.size} channels`)
    console.log(`Confirmed: ✔️`)
    /**/ console.log(``)
    console.log(`${client.guilds.cache.size} servers`)
    console.log(`${client.guilds.cache.size} servers`)
    console.log(`Confirmed: ✔️`)
    /**/ console.log(``)
    console.log(`${client.users.cache.size} users`)
    console.log(`${client.users.cache.size} users`)
    console.log(`Confirmed: ✔️`)
    /**/ console.log(``)
    console.log(`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} RAM`)
    console.log(`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} RAM`)
    console.log(`Confirmed: ✔️`)
    /**/ console.log(``)
    console.log(`Latency: ${Math.round(client.ws.ping)}ms`)
    console.log(`Latency: ${Math.round(client.ws.ping)}ms`)
    console.log(`Confirmed: ✔️`)
    /**/ console.log(``)
    console.log(`Node: ${process.version}`)
    console.log(`Node: ${process.version}`)
    console.log(`Confirmed: ✔️`)
    /**/ console.log(``)
    console.log(`${client.channels.cache.size} channels`)
    console.log(`${client.guilds.cache.size} servers`)
    console.log(`${client.users.cache.size} users`)
    /**/ console.log(``)
    console.log(`Date Bot Created:`)
    console.log(client.user.createdAt.toLocaleDateString("en-uk"))
    /**/ console.log(``)



  
    const activities = [`ZuZu 1.0.0 Coming Out Soon`];
    setInterval(() => {
      let activity = activities[Math.floor(Math.random() * activities.length)];
      client.user.setActivity(activity, { type: "WATCHING" });
    }, 20000);
  
  };
