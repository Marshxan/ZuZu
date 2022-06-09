const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "terms", // COMMAND NAME
    description: `${require("../config/other.js").Bots_Name} terms of service `, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "other" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('terms')
        .setDescription('Have A Read Of Our TOS')
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND
        const embed = new MessageEmbed()
            .setTitle(`Terms Of Service For ${require("../config/other.js").Bots_Name}`)
            .setURL(`${require("../config/other.js").Support_server}`)
            .setColor(`${require("../config/other.js").Embed_Hex}`)
            .setDescription('[Here Are Our Terms:](https://www.btmc.dev/terms/)')
        //

        await interaction.reply({ embeds: [embed] });
    }
}