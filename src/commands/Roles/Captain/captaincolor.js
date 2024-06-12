import {SlashCommandBuilder} from "discord.js";
import {assignRoleToUser, changeRoleColor} from "../../../services/guildService.js";

/** @type {import('commandkit').CommandData}  */
export const data = new SlashCommandBuilder()
    .setName("changecaptaincolor")
    .setDescription("Changes an Only Dash captain's role color")
    .addStringOption((option) =>
        option
            .setName("color")
            .setDescription("The hexcolor to use. Ex: #19E0FF ( Dodger Blue )")
            .setRequired(true)
    );

/**
 * @param {import('commandkit').SlashCommandProps} param0
 */
/**
 * @param {import('commandkit').SlashCommandProps} param0
 */
export const run = async ({ interaction, client }) => {
    // Defer the reply to signal to Discord that the bot intends to send a response later
    await interaction.deferReply({ ephemeral: true });

    const color = interaction.options.getString('color');

    const roles = [
        '1248334904945807422', '1248335049959538788', '1248335199469572178',
        '1248346590108844063', '1248335244810256384', '1248335302452314293',
        '1248335361424228352', '1248335428663120023', '1248335494996164728',
        '1248335588000661665'
    ];
    const guildMember = interaction.guild.members.cache.get(interaction.user.id);
    const roleFound = guildMember.roles.cache.find(r => roles.includes(r.id));

    if (!roleFound) {
        await interaction.editReply({
            content: `You don't have any roles that can have their color changed.`,
        });
        return;
    }

    // Change color of the role
    try {
        await changeRoleColor(roleFound, color); // changeRoleColor is defined in my earlier message.
        await interaction.editReply({
            content: `The color for the **${roleFound.name}** role has been successfully changed.`,
        });
    } catch (e) {
        await interaction.editReply({
            content: `An error occurred: ${e.message}`,
        });
    }
};

/** @type {import('commandkit').CommandOptions} */
export const options = {
    // https://commandkit.js.org/docs/typedef/CommandOptions
};