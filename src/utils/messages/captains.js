import { EmbedBuilder } from "discord.js";



export const welcomeCaptainToTeamDM = (user, roleName) => {
    return new EmbedBuilder()
        .setColor("#00ff55")
        .setTitle(
            `A New Chapter Begins - **${user.displayName}** Joins as Team Captain of team ${roleName}! 🎉`
        )
        .setDescription(
            `Hey there! You have been selected as a team captain. Congratulations! 🎉`
        )
        .setImage("https://media1.tenor.com/m/tt_QT0UP05MAAAAC/congrats-fireworks.gif")
        .setTimestamp()
};