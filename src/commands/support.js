const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "support", // COMMAND NAME
    description: `Official support server for ${require("../config/other.js").Bots_Name}`, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "other" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription(`Need Support For ${require("../config/other.js").Bots_Name}?`)
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND
        const embed = new MessageEmbed()
            .setTitle('Official Support Server')
            .setURL(`${require("../config/other.js").Support_server}`)
            .setColor(`${require("../config/other.js").Embed_Hex}`)
            .setDescription(`Need Support For ${require("../config/other.js").Bots_Name}: [Join Our Official Server](${require("../config/other.js").Support_server})`)
        //

        await interaction.reply({ embeds: [embed] });
    }
}