const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "ban", // COMMAND NAME
    description: "Bans a user", // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "mod" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('bans a user from the guild')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to ban')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for the ban')
                .setRequired(false)
        )
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) {  // THE EXECUTION THROUGH SLASH COMMAND
        const moderator = interaction.member;

        if (!moderator.permissions.has('BAN_MEMBERS')) return interaction.reply({ content: 'You do not have permission to ban people.', ephemeral: true });

        const user = interaction.options.get('user')?.value;

        if (!user) return interaction.reply({ content: 'You must provide a user to ban.', ephemeral: true });

        const target = interaction?.guild?.members?.cache?.get(user) || await interaction?.guild?.members?.fetch(user);

        if (!target) return interaction.reply({ content: 'I could not find that user.', ephemeral: true });

        const canban = moderator.roles.cache.highest.comparePositionTo(target.roles.cache.highest) > 0;

        if (!canban) return interaction.reply({ content: 'You do not have permission to ban that user.', ephemeral: true });

        const reason = interaction.options.get('reason')?.value;

        let finalReason = reason || 'Banned by a moderator.';

        target.ban(finalReason).then(() => {
            interaction.reply({ content: `${target.user.tag} has been banned.`, ephemeral: true });
            require('../loggable_events/memberBan')(client, target, moderator, finalReason);
        }).catch(() => {
            interaction.reply({ content: 'I could not ban that user.', ephemeral: true });
        });
    }
}