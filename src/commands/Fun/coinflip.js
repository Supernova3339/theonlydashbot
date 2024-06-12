import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("flip")
    .setDescription("Flips a coin.");

export const run = async ({ interaction }) => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    interaction.reply(`🪙 The coin landed on... ${result}!`);
};