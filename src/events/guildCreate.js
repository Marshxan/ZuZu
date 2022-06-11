const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = async (client, guild) => {
  const owner = await client.users.fetch(guild.ownerId)
    const channel = client.channels.cache.get(`983798533016666123`)
    const embed = new MessageEmbed()
      .addField(`${client.user.username} | New Server \n\n <:server:886748632165007401> Server`, `Name: \`${guild.name}\`\nID: \`${guild.id}\``)
      .addField(`<:crown:886748632152432640> Ownership`, `Name: \`${owner.tag}\`\nID: \`${guild.ownerID}\``)
      .addField(`<:info:886748632165007400> Server Info`, `Members: \`${guild.memberCount}\`\n> Channels: \`${guild.channels.cache.size}\`\n> Created: **${moment(guild.createdTimestamp).format('LL')}** (\`${moment(guild.createdTimestamp).fromNow()}\`) \n\n Total Guilds: ${client.guilds.cache.size}`)
      .setThumbnail(guild.iconURL({ dynamic:true }))
      .setColor(`GREEN`)
      .setTimestamp()
      channel.send({embeds: [embed]})
      console.log(`Your Bot Has Been Added To: ${guild.name}`)
      console.log(`Owner Of: ${guild.name} Is ${owner.tag}`)
      console.log(`${guild.name} Has A Total Of: ${guild.memberCount} Members`)
      console.log(`${guild.name} Has A total Of: ${guild.channels.cache.size} Channels`)
}
