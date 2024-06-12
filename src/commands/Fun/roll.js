import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Rolls a dice.")
    .addIntegerOption(option =>
        option
            .setName("sides")
            .setDescription("The number of sides on your dice")
            .setRequired(false));

export const run = async ({ interaction }) => {
    let sides = interaction.options.getInteger('sides');

    if (!sides) {
        sides = 6; // if no sides were provided, default to 6-sided dice
    }
    const roll = Math.floor(Math.random() * sides) + 1;
    interaction.reply(`🎲 You rolled a ${roll}.`);
};