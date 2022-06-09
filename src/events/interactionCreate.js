module.exports = function (client, interaction) {
  if (interaction.isCommand()) commandInteraction(client, interaction);
  if (interaction.isSelectMenu()) selectMenuInteraction(client, interaction);
}

function commandInteraction(client, interaction) {
  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  command.execute_s(client, interaction);
}

function selectMenuInteraction(client, interaction) {
  const commandName = interaction.customId.split('_')[0];
  const command = client.commands.get(commandName);

  if (!command) return selectMenuInteractionNoCommandDefined(client, interaction);

  command.nonCommandInteraction(client, interaction);
}

function selectMenuInteractionNoCommandDefined(client, interaction) {
  //
}