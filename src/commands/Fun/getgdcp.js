import {AttachmentBuilder, SlashCommandBuilder} from "discord.js";
import GD from 'gd.js';
import fs from 'fs';
// Import MessageAttachment instead of Attachment
import { Attachment } from 'discord.js';

const gd = new GD();

/** @type {import('commandkit').CommandData}  */
export const data = new SlashCommandBuilder()
    .setName("getgdcp")
    .setDescription("Get a Geometry Dash user's creator points.")
    .addStringOption((option) =>
        option
            .setName("username")
            .setDescription("The GD username")
            .setRequired(true)
    );

/**
 * @param {import('commandkit').SlashCommandProps} param0
 */
export const run = async ({ interaction }) => {
    // Get the username from the command
    const username = interaction.options.getString('username');

    if (!username) {
        await interaction.reply({
            content: "Couldn't find a username in your command.",
            ephemeral: true
        });
        return;
    }

    // Fetch and save icon
    const userInfo = await gd.users.get(username);
    await interaction.reply(`The user **${username}** has ${userInfo.stats.cp} creator points.`);
};