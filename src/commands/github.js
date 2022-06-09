/*
Please Note:
If you change this / disable this command 
and we find out please know that you will be
called out for DMCA and be shutdown by discord
within 7-14 days of our request!
Marshy, Diamond
*/

const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "github", // COMMAND NAME
    description: `Show's ${require("../config/other.js").Bots_Name} Public Code!`, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "other" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('github')
        .setDescription(`Show's ${require("../config/other.js").Bots_Name} Public Code!`)
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND

        const embed = new MessageEmbed()
            .setTitle(`Hmm... Wanted To Host My Default Version`) 
            .setURL(`https://github.com/Marshxan/ZuZu`)
            .setColor(`${require("../config/other.js").Embed_Hex}`)
            .setDescription(' Im a open source discord.js bot made with d.JS version **16.13.2** \n If you would like to host my default framework click the hyperlink below :) ')
            .addField('Github Link', '[Click Me To Be Redirected To The Github!](https://github.com/Marshxan/ZuZu)', true)
            .setFooter(`Bot Made By: Marshy & Diamond With d.Js`)

        await interaction.reply({ embeds: [embed] });
    }
}