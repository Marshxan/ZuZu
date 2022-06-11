const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "website", // COMMAND NAME
    description: `Visit Our Website `, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "other" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('website')
        .setDescription('Ever Seen A Better Website than This?')
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND

        const embed = new MessageEmbed()
            .setTitle(`Visit ${require("../config/other.js").Bots_Name}'s Amazing Website `)
            .setURL(`${require("../config/other.js").Website}`)
            .setColor(`${require("../config/other.js").Embed_Hex}`)
            .setDescription(`${require("../config/other.js").Website} Or [Click Me](${require("../config/other.js").Website})`)
            .setTimestamp()
            .setFooter({ text: `${require("../config/other.js").Bots_Name}`, iconURL: `${require("../config/other.js").Bot_Avatar}`})

        await interaction.reply({ embeds: [embed] });
    }
}
