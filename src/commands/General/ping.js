/** @type {import('commandkit').CommandData}  */
export const data = {
    name: 'ping',
    description: 'Replies with Pong'
}

/**
 * @param {import('commandkit').SlashCommandProps} param0 
 */
export const run = ({ interaction, client }) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
}

/** @type {import('commandkit').CommandOptions} */
export const options = {
    // https://commandkit.js.org/docs/typedef/CommandOptions
}