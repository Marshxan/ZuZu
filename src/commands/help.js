const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

const catLink = {
    sys: {
        "cat_info": "info",
        "cat_moderation": "mod",
        "cat_fun": "fun",
        "cat_music": "music",
        "cat_other": "other",
        "cat_all": "all"
    },
    text: {
        "info": "Information",
        "mod": "Moderation",
        "fun": "Fun",
        "music": "Music",
        "other": "Other",
        "all": "All"
    }
}

module.exports = {
    name: "help",
    description: "Displays information about The Bot",
    help_menu: {
        display: true,
        devlock: false,
        category: "info"
    },
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays information about The Bot')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The help command category you want to display')
                .setRequired(false)
                .addChoices(
                    { name: 'Information', value: 'cat_info' },
                    { name: 'Moderation', value: 'cat_moderation' },
                    { name: 'Fun', value: 'cat_fun' },
                    { name: 'Music', value: 'cat_music' },
                    { name: 'Other', value: 'cat_other' },
                    { name: 'All', value: 'cat_all' }
                )
        )
    ,
    execute_m(client, message, args) { },
    async execute_s(client, interaction) {
        const category = interaction.options.get('category')?.value;

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('help_catselect')
                    .setMaxValues(1)
                    .setMinValues(0)
                    .setPlaceholder('Home')
                    .addOptions([
                        { label: 'Information', value: 'cat_info', description: 'All Information commands' },
                        { label: 'Moderation', value: 'cat_moderation', description: 'All Moderation commands' },
                        { label: 'Fun', value: 'cat_fun', description: 'All Fun commands' },
                        { label: 'Music', value: 'cat_music', description: 'All Music commands' },
                        { label: 'Other', value: 'cat_other', description: 'All Other commands' },
                        { label: 'All', value: 'cat_all', description: 'All commands' },
                        { label: 'Home', value: 'cat_home', description: 'Back to the main help page' },
                        { label: 'Bot Admin', value: 'cat_admin', description: 'Locked commands for bot admins' }
                    ])
            )
            console.log(`Command: Help Used`)
        //

        const hCategory = catLink.sys[category];
        const hText = catLink.text[hCategory];

        const commands = client.commands.filter(command => command.help_menu.category === hCategory && command.help_menu.display);

        if (!category) {
            const embed = showPage(client, null);

            return await interaction.reply({ embeds: [embed], components: [row] });
        }

        if (category === 'cat_all') {
            const embed = showPage(client, category);

            return await interaction.reply({ embeds: [embed], components: [row] });
        }

        if (commands.size === 0) {
            return await interaction.reply({ content: 'There are no commands in this category' });
        }

        const embed = showPage(client, category);

        return await interaction.reply({ embeds: [embed], components: [row] });
    },
    async nonCommandInteraction(client, interaction) {
        if (interaction.isSelectMenu()) {
            const value = interaction.values[0];

            if (!value) {
                const embed = showPage(client, null);

                interaction.reply({ content: 'Menu Updated', ephemeral: true });
                return await interaction.message.edit({ embeds: [embed] });
            }

            if (value == "cat_admin") return await interaction.reply({ content: 'This select menu is not finished. Please wait for the next help.js update. Thank you for your patience.', ephemeral: true });

            if (value == "cat_home") {
                const embed = showPage(client, null);

                interaction.reply({ content: 'Menu Updated', ephemeral: true });
                return await interaction.message.edit({ embeds: [embed] });
            }

            const embed = showPage(client, value);

            interaction.reply({ content: 'Menu Updated', ephemeral: true });
            return await interaction.message.edit({ embeds: [embed] });
        }
    }
}

function showPage(client, input) {
    if (!input) {
        return new MessageEmbed()
            .setTitle(`${require("../config/other.js").Bots_Name} Help`)
            .setDescription(`${require("../config/other.js").Bots_Name} is a Multi Purpose discord bot made for any size of server`)
            .addFields(
                { name: 'Help Categories', value: 'Our help categories are Info, Moderation, Fun, Music, Other or you can get all commands using "all"', inline: true },
                { name: 'Support', value: `If you need help with ${require("../config/other.js").Bots_Name}, join our support server [here](${require("../config/other.js").Support_server})`, inline: true },
                { name: 'Website', value: `${require("../config/other.js").Bots_Name}'s main website is [${require("../config/other.js").Website_Name}](${require("../config/other.js").Website}) however we also have a [blog](${require("../config/other.js").Bot_Blog}) site`, inline: true }
            )
            .setColor('#32a89d');
    }

    const hCategory = catLink.sys[input];
    const hText = catLink.text[hCategory];

    const commands = client.commands.filter(command => command.help_menu.category === hCategory && command.help_menu.display);

    const embed = new MessageEmbed()
        .setTitle('Help (' + hText.toLowerCase() + ')')
        .setDescription(hText + ' commands')
        .setColor('#32a89d');
    //

    if (input === 'cat_all') {
        const _commands = client.commands.filter(command => command.help_menu.display);

        _commands.forEach(command => {
            embed.addField(command.name, `${command.description}\nCategory: ${command.help_menu.category}`, true);
        });

        return embed;
    }

    commands.forEach(command => {
        embed.addField(command.name, command.description, true);
    })
    console.log(`Command: Help Updated`)
    return embed;
}