const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "mute", // COMMAND NAME
    description: "Mutes a user", // COMMAND DESCRIPTION
    help_menu: {
        display: true, // SHOWS IN HELP COMMAND (ANY MENU)
        devlock: false, // ONLY SHOWS FOR DEVS (?)
        admincat: "mod", // ADMINISTRATOR CATEGORY (PART OF DEVLOCK)
        category: "mod" // THE CATEGORY
    },
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Times out a user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to mute')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for the mute')
                .setRequired(false)
        )
        .addNumberOption(option =>
            option.setName('minutes')
                .setDescription('The amount of time in minutes to mute the user for')
                .setRequired(false)
        )
        .addNumberOption(option =>
            option.setName('hours')
                .setDescription('The amount of time in hours to mute the user for')
                .setRequired(false)
        )
        .addNumberOption(option =>
            option.setName('days')
                .setDescription('The amount of time in days to mute the user for')
                .setRequired(false)
        )
    ,
    execute_m(client, message, args) { }, // THE EXECUTION THROUGH MESSAGE
    async execute_s(client, interaction) {  // THE EXECUTION THROUGH SLASH COMMAND
        const moderator = interaction.member;

        if (!moderator.permissions.has('MODERATE_MEMBERS')) return interaction.reply({ content: 'You do not have permission to mute people.', ephemeral: true });

        const user = interaction.options.get('user')?.value;

        if (!user) return interaction.reply({ content: 'You must provide a user to mute.', ephemeral: true });

        const target = interaction?.guild?.members?.cache?.get(user) || await interaction?.guild?.members?.fetch(user);

        if (!target) return interaction.reply({ content: 'I could not find that user.', ephemeral: true });

        const canKick = moderator.roles.cache.highest.comparePositionTo(target.roles.cache.highest) > 0;

        if (!canKick) return interaction.reply({ content: 'You do not have permission to mute that user.', ephemeral: true });

        const reason = interaction.options.get('reason')?.value;

        const duration = calculateDuration(interaction);

        let finalReason = reason || 'Muted by a moderator.';

        target.timeout(duration, finalReason).then(() => {
            interaction.reply({ content: `${target.user.tag} has been muted.`, ephemeral: true });
            require('../loggable_events/memberMute')(client, target, moderator, finalReason);
        }).catch(() => {
            interaction.reply({ content: 'I could not mute that user.', ephemeral: true });
        });
    }
}

function calculateDuration(interaction) {
    const defaultTime = 60 * 60 * 1000;
    const minTime = 1 * 60 * 1000;

    const minutes = interaction.options.get('minutes')?.value;
    const hours = interaction.options.get('hours')?.value;
    const days = interaction.options.get('days')?.value;

    let time = 0;

    if (minutes) time += minutes * 60 * 1000;
    if (hours) time += hours * 60 * 60 * 1000;
    if (days) time += days * 24 * 60 * 60 * 1000;

    if (time < minTime) return defaultTime;
    return time;
}