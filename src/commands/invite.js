const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "invite", // COMMAND NAME
    description: `invite Me To Your Server!`, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "other" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('invite Link')
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND

        const embed = new MessageEmbed()
            .setTitle(`Invite ${require("../config/other.js").Bots_Name} ASAP!!!`)
            .setURL(`${require("../config/other.js").Bot_Invite}`)
            .setColor(`${require("../config/other.js").Embed_Hex}`)
            .setDescription(` [Click Me!!!](${require("../config/other.js").Bot_Invite})`)

        await interaction.reply({ embeds: [embed] });
        console.log(`Command: Invite Used`)
    }
}
