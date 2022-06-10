const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "christmas", // COMMAND NAME
    description: `Christmas Is Soon I Hear?`, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "fun" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('christmas')
        .setDescription(`Hmmm how far is xmas`)
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND

        const embed = new MessageEmbed()
        .setTitle(`Cookie... Why IDK but now you have one!`)
        .setImage(`http://clipart-library.com/img/1001556.png`)
        .setColor(`#00041`)
        .setTimestamp()
        .setFooter({ text: `${require("../config/other.js").Bots_Name}`, iconURL: `${require("../config/other.js").Bot_Avatar}`})

        await interaction.reply({ embeds: [embed] });
    }
}
