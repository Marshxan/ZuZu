const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "meme", // COMMAND NAME
    description: `Get a Random Meme From Reddit`, // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "fun" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Get a Random Meme From Reddit')
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND

        fetch("https://meme-api.herokuapp.com/gimme")
        .then(res => res.json())
        .then(async (json) => {
          let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${json.title}`)
            .setURL(json.postLink)
            .setImage(json.url)
            .setFooter(`From /r/${json.subreddit}`);
  
            await interaction.reply({embeds: [embed]});
        });
    }
}