import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("guess")
    .setDescription("Make a guess between 1 and 10.")
    .addIntegerOption(option =>
        option
            .setName("number")
            .setDescription("Your guess")
            .setRequired(true));

export const run = async ({ interaction }) => {
    let number = interaction.options.getInteger('number');
    let guess = Math.floor(Math.random() * 10) + 1;

    if (!number || number < 1 || number > 10) {
        interaction.reply("You must select a number between 1 and 10.");
    } else if (number === guess) {
        interaction.reply(`🎉 Well done! The number was ${guess}.`);
    } else {
        interaction.reply(`😞 Sorry, you guessed wrong. The number was ${guess}.`);
    }
};