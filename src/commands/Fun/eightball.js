import { SlashCommandBuilder } from "discord.js";
import axios from 'axios';

export const data = new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Ask the Magic 8-Ball a question.")
    .addStringOption(option =>
        option
            .setName("question")
            .setDescription("Your question")
            .setRequired(true));

export const run = async ({ interaction }) => {
    const question = interaction.options.getString('question');

    // Request to the magic 8-ball API
    const response = await axios.get(`https://eightballapi.com/api?question=${encodeURIComponent(question)}&lucky=false`);
    const reply = response.data.reading;
    interaction.reply(`Question: ${question} \n\n🎱 ${reply}`);
};