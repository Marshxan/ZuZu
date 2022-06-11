const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = async (client, guild) => {
  const owner = await client.users.fetch(guild.ownerId)
    const channel = client.channels.cache.get('894977445017571408')
    const embed = new MessageEmbed()
      .setAuthor(`${client.user.username} | New Server`, client.user.avatarURL())
      .addField(`<:server:886748632165007401> Server`, `Name: \`${guild.name}\`\nID: \`${guild.id}\``)
      .addField(`<:crown:886748632152432640> Ownership`, `Name: \`${owner.tag}\`\nID: \`${guild.ownerID}\``)
      .addField(`<:info:886748632165007400> Server Info`, `Members: \`${guild.memberCount}\`\n> Channels: \`${guild.channels.cache.size}\`\n> Created: **${moment(guild.createdTimestamp).format('LL')}** (\`${moment(guild.createdTimestamp).fromNow()}\`)`)
      .setThumbnail(guild.iconURL({ dynamic:true }))
      .setColor('GREEN')
      .setTimestamp()
      .setFooter(`Total Guilds: ${client.guilds.cache.size}`)
      channel.send({embeds: [embed]})
}
