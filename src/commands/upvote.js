const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "upvote", // COMMAND NAME
    description: `Upvote for ${require("../config/other.js").Bots_Name} `, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "other" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('upvote')
        .setDescription('Wanna Upvote???')
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND

        const embed = new MessageEmbed()
            .setTitle(`Upvote On Top.gg For ${require("../config/other.js").Bots_Name} `)
            .setURL(`${require("../config/other.js").Support_server}`)
            .setColor(`${require("../config/other.js").Embed_Hex}`)
            .setDescription(`**Vote on top.gg**\n ${require("../config/other.js").Top_GG_Link}`)

        await interaction.reply({ embeds: [embed] });
    }
}
