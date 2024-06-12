import {SlashCommandBuilder} from "discord.js";
import {assignRoleToUser} from "../../../services/guildService.js";
import {welcomeCaptainToTeamDM} from "../../../utils/messages/captains.js";

/** @type {import('commandkit').CommandData}  */
export const data = new SlashCommandBuilder()
    .setName("assigncaptain")
    .setDescription("Assigns an Only Dash captain")
    .addUserOption((option) =>
        option
            .setName("captain")
            .setDescription("The user to add as a captain")
            .setRequired(true)
    )
.addStringOption(option =>
    option.setName('team')
        .setDescription('The team to assign')
        .setRequired(true)
        .addChoices(
            { name: 'Body Jammer', value: '1248334904945807422' },
            { name: 'Haunted Woods', value: '1248335049959538788' },
            { name: 'Hyperspin', value: '1248335199469572178' },
            { name: 'Untitled Chipsounds', value: '1248346590108844063'},
            { name: 'Thumper', value: '1248335244810256384' },
            { name: 'Rocket Race', value: '1248335302452314293' },
            { name: 'The Kingdom', value: '1248335361424228352' },
            { name: 'Into The Hurricane', value: '1248335428663120023' },
            { name: 'Glint', value: '1248335494996164728' },
            { name: 'Adrenaline', value: '1248335494996164728' }
        ));

/**
 * @param {import('commandkit').SlashCommandProps} param0
 */
/**
 * @param {import('commandkit').SlashCommandProps} param0
 */
export const run = async ({ interaction, client }) => {
    // Defer the reply to signal to Discord that the bot intends to send a response later
    await interaction.deferReply({ ephemeral: true });

    const targetUser = interaction.options.getUser('captain');
    const user = interaction.guild.members.cache.get(targetUser.id);

    const roleChoice = interaction.options.getString('team');
    const role = interaction.guild.roles.cache.find((r) => r.id === roleChoice);

    if (!role) {
        await interaction.editReply({
            content: `It appears the role ${role.name} is not available.`,
        });
        return;
    }

    if (!user) {
        return interaction.editReply({ content: 'User not found.', ephemeral: true });
    }

    const roleId = role.id;

    // Check if user already has the role
    if (user.roles.cache.has(roleId)) {
        await interaction.editReply({
            content: `${user.displayName} already has the **${role.name}** role. No action has been taken.`,
        });
        return;
    }

    const result = await assignRoleToUser(user, roleId);
    await interaction.editReply({
        content: `The **${role.name}** role has been successfully added to ${user.displayName}.`,
    });

    let roleName = role.name;
    roleName = roleName.replace('Captain', '').trim();
    await user.send({ embeds: [welcomeCaptainToTeamDM(user, roleName)] });
};

/** @type {import('commandkit').CommandOptions} */
export const options = {
    userPermissions: ["MANAGE_ROLES"],
};