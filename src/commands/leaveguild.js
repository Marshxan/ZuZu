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
        .addNumberOption(option => 
                         option.setName('guild')
                          .setDescription('The id of the guild to leave')
                          .setRequired(true)
                         )
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) { // THE EXECUTION THROUGH SLASH COMMAND
      const gid = interaction.options.getNumber('guild');
      
      let guild;
      if(gid) guild = client.guilds.cache.get(gid) || await client.guilds.fetch(gid).catch(console.log);
      
      if(!guild) return interaction.reply({content: 'Failed to find guild', ephemeral: true}).catch(console.log);
      
      guild.leave().then(g => replyS(interaction, g)).catch(e => replyF(interaction, e, guild));
    }
}

function replyS(i, g) {
  i.reply({content: `Successfully left ${g.name}`, ephemeral: true});
}
function replyF(i, e, g) {
  i.reply({content: `Failed leaving ${g.name || 'UN_NAMED_GUILD'} due to\n${e}`, ephemeral: true});
}
