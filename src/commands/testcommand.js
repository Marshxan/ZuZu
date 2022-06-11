const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "testcommand", // COMMAND NAME
    description: `cmddes`, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "other" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('testcommand')
        .setDescription(`cmddes`)
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND

        const embed = new MessageEmbed()
        .setColor(`${require("../config/other.js").Embed_Hex}`)
        .setTitle(`TITLE_HERE`)
        .setURL(`https://btmc.dev/ZuZuINV`)
        .setAuthor({ name: 'Some name', iconURL: `${require("../config/other.js").Bot_Avatar}`, url: 'https://btmc.dev/ZuZuINV' })
        .setDescription(`DESCRIPTION_HERE`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/983816126460997662/5085fe475db74dea6c0b038ead65b2a5.png?size=1024`)
        .addField(`HIGHLIGHT_MSG`, `WHAT_U_WANT_HERE`, true)
        .setImage(``)
        .setTimestamp()
        .setFooter({ text: `FOOTER_MSG`, iconURL: `${require("../config/other.js").Bot_Avatar}`})


        await interaction.reply({ embeds: [embed] });
        console.log(`Command: Testcommand Used`)
    }
}