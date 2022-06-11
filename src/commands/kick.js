const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "kick",
    description: "Kicks a user", 
    help_menu: {
        display: true, 
        devlock: false,
        admincat: "mod", 
        category: "mod"
    },
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user from the guild')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to kick')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for the kick')
                .setRequired(false)
        )
    ,
    execute_m(client, message, args) { }, 
    async execute_s(client, interaction) {  
        const moderator = interaction.member;

        if (!moderator.permissions.has('KICK_MEMBERS')) return interaction.reply({ content: 'You do not have permission to kick people.', ephemeral: true });

        const user = interaction.options.get('user')?.value;

        if (!user) return interaction.reply({ content: 'You must provide a user to kick.', ephemeral: true });

        const target = interaction?.guild?.members?.cache?.get(user) || await interaction?.guild?.members?.fetch(user);

        if (!target) return interaction.reply({ content: 'I could not find that user.', ephemeral: true });

        const canKick = moderator.roles.cache.highest.comparePositionTo(target.roles.cache.highest) > 0;

        if (!canKick) return interaction.reply({ content: 'You do not have permission to kick that user.', ephemeral: true });

        const reason = interaction.options.get('reason')?.value;

        let finalReason = reason || 'Kicked by a moderator.';

        target.kick(finalReason).then(() => {
            interaction.reply({ content: `${target.user.tag} has been kicked.`, ephemeral: true });
            require('../loggable_events/memberKick')(client, target, moderator, finalReason);
        }).catch(() => {
            interaction.reply({ content: 'I could not kick that user.', ephemeral: true });
        });
    }
}