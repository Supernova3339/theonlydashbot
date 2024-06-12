import {
    getDynamicReply,
    negativeReplies,
    positiveReplies,
    welcomeReplies,
} from "../../utils/messages/onlydashbot.js";
import {Message} from 'discord.js';
let message;

const determineMessageType = (message) => {
    // console.log(`Processing message: ${message.content}`);  // Add logging

    const negativePattern =
        /\b(hate|dislike|stupid|fuck)\b.*\bonlydashbot\b|\bonlydashbot\b.*\b(hate|dislike|stupid|onlydashbot)\b/i;
    const positivePattern =
        /\b(love|adore|appreciate|thanks)\b.*\bonlydashbot\b|\bonlydashbot\b.*\b(love|adore|appreciate|thanks)\b/i;
    const heyPattern = /\b(hey|hi|hello)\s+(onlydashbot|theonlydashbot)\b/i;

    if (message.author.bot) return null; // Ignore bot messages
            if (negativePattern.test(message.content)) return "negative";
    if (positivePattern.test(message.content)) return "positive";
    if (heyPattern.test(message.content)) return "welcome";

    return null;
};

export default (message, client, handler) => {
    // console.log(`Received message from: ${message.author.id}`);  // Add logging
    // console.log(`Channel type: ${message.channel.type}`);

    if (message.channel.type === "GUILD_TEXT" || "0"/* 0 is the internal ID for GUILD_TEXT as a fallback */) {
        // Corrected the channel type check
        const messageType = determineMessageType(message);

        // console.log(`Message type: ${messageType}`);  // Add logging

        switch (messageType) {
            case "negative":
                message.reply(getDynamicReply(negativeReplies, message.author.id));
                break;
            case "positive":
                message.reply(getDynamicReply(positiveReplies, message.author.id));
                break;
            case "welcome":
                message.reply(getDynamicReply(welcomeReplies, message.author.id));
                break;
            default:
                break;
        }
    }
}