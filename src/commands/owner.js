const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "owner", // COMMAND NAME
    description: `Hmm Who's My Owner? `, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "other" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('owner')
        .setDescription(`Find Out who the owner is of ${require("../config/other.js").Bots_Name}`)
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND

        const embed = new MessageEmbed()
            .setTitle(`Ever Heard Of A Wild Marshy? `)
            .setURL(`${require("../config/other.js").Support_server} `)
            .setColor(`${require("../config/other.js").Embed_Hex}`)
            .setDescription(`A Wild [${require("../config/other.js").OwnerName}](${require("../config/other.js").Owner_Promo}) Is my owner. \n I was made on the ${require("../config/other.js").Date_Of_Birth}th and have been made better since`)

        await interaction.reply({ embeds: [embed] });
    }
}
