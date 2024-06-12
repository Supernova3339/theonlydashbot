import figlet from "figlet";
import { ActivityType } from "discord.js";

/**
 * @param {import('discord.js').Client} client
 */
export default async (client) => {
    const guild = client.guilds.cache.get(process.env.GUILD_ID);
    if (!guild) {
        console.log(`Guild with ID ${process.env.GUILD_ID} not found`);
        return;
    }
    let owner = "Unknown";
    try {
        owner = (await guild.fetchOwner()).user.tag;
    } catch (error) {
        console.error("Error fetching guild owner:", error);
    }

    console.log("Server Information:");
    console.log(`Server Name: ${guild.name}`);
    console.log(`Owner: ${owner}`);
    console.log(`Member Count: ${guild.memberCount}`);
    console.log(`Creation Date: ${guild.createdAt.toDateString()}`);
    console.log(
        figlet.textSync(client.user.username.toUpperCase(), { font: "Standard" })
    );
    console.log(`🤖 ${client.user.username} is online!\n`);
    client.user.setActivity({
        name: `Made with love by Supernova3339 ❤️`,
        type: ActivityType.Custom,
    });
};