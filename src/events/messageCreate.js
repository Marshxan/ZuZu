const filter = require('../../test/automod');

module.exports = async function (client, message) {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    const a = await filter(message.content.toLowerCase());
    if (a) {
        message.delete();
        return message.channel.send(`${message.author} please watch your language!`);
    }
}