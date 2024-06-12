import { SlashCommandBuilder } from "discord.js";
import fetch from 'node-fetch';

/** @type {import('commandkit').CommandData}  */
export const data = new SlashCommandBuilder()
    .setName("dailyquote")
    .setDescription("Get the current quote of the day.");

/**
 * @param {import('commandkit').SlashCommandProps} param0
 */
export const run = async ({ interaction }) => {
    // Fetch quote from the API
    const response = await fetch('https://zenquotes.io/api/today');
    const json = await response.json();

    // Send the quote to the Discord channel
    await interaction.reply(`Quote of the day:\n"${json[0].q}" - **${json[0].a}**`);
};