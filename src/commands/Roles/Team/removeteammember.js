import { SlashCommandBuilder } from "discord.js";
import { removeRoleFromUser } from "../../../services/guildService.js";

/** @type {import('commandkit').CommandData}  */
export const data = new SlashCommandBuilder()
    .setName("removememberfromteam")
    .setDescription("Remove a member from your Only Dash team.")
    .addUserOption((option) =>
        option
            .setName("member")
            .setDescription("The member to remove")
            .setRequired(true)
    );

/**
 * @param {import('commandkit').SlashCommandProps} param0
 */
export const run = async ({ interaction, client }) => {
    await interaction.deferReply({ ephemeral: true });

    // Get user from interaction
    const memberToRemove = interaction.options.getUser("member");

    if (!memberToRemove) {
        await interaction.editReply({
            content: "No user was mentioned to be removed.",
            ephemeral: true
        });
        return;
    }

    // Define the roles of captains
    const captainRoles = [
        '1248334904945807422', '1248335049959538788', '1248335199469572178',
        '1248346590108844063', '1248335244810256384', '1248335302452314293',
        '1248335361424228352', '1248335428663120023', '1248335494996164728',
        '1248335588000661665'
    ];

    const guildMember = interaction.guild.members.cache.get(interaction.user.id);

    const isCaptain = guildMember.roles.cache.some(r => captainRoles.includes(r.id));
    if (!isCaptain) {
        await interaction.editReply({
            content: `Only captains can use this command.`,
        });
        return;
    }

    const teamRoles = [
        '1248413619364823081', '1248414220513574983', '1248414457709990012', '1248414513448095848', '1248414561451638896', '1248414661272014979', '1248414865408917604', '1248414924716245022', '1248414971587461140', '1248415003866960023'
        // Add all team role IDs
    ];

    const teamRoleFound = guildMember.roles.cache.find(r => teamRoles.includes(r.id));
    if (!teamRoleFound) {
        await interaction.editReply({
            content: `You don't have a team role that can be given.`,
        });
        return;
    }

    // Remove team member
    const user = interaction.guild.members.cache.get(memberToRemove.id);
    const roleId = teamRoleFound.id;
    try {
        await removeRoleFromUser(user, roleId);
        await interaction.editReply({
            content: `The team role, **${teamRoleFound.name}**, has been successfully removed from **${memberToRemove.username}**.`,
            ephemeral: true,
        });
    } catch (e) {
        await interaction.editReply({
            content: `An error occurred: ${e.message}`,
        });
    }
};