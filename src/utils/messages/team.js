import { EmbedBuilder } from "discord.js";



export const welcomeMemberToTeamDM = (user, roleName) => {
    return new EmbedBuilder()
        .setColor("#00ff55")
        .setTitle(
            `A New Chapter Begins - **${user.displayName}** Joins as a member of team ${roleName}! 🎉`
        )
        .setDescription(
            `Hey there! You have joined team **${roleName}**. Congratulations! 🎉`
        )
        .setImage("https://media1.tenor.com/m/tt_QT0UP05MAAAAC/congrats-fireworks.gif")
        .setTimestamp()
};