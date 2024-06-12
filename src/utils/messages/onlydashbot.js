export const getDynamicReply = (repliesArray, authorId) => {
    const randomIndex = Math.floor(Math.random() * repliesArray.length);
    let reply = repliesArray[randomIndex];

    // Check if replyString is a function
    if (typeof reply === 'function') {
        // if it is, then pass the authorId and execute the function
        reply = reply(authorId);
    }

    // Check if reply is now a string
    if (typeof reply === 'string') {
        return reply;
    } else {
        throw new TypeError(`Expected a string at index ${randomIndex}, but got ${typeof reply}`);
    }
};

export const threadReplies = [
    "Your request has been noted and processed. If you need further assistance, feel free to ask.",
    "Your query has been successfully processed and stored. I'm here if you need more help.",
    "I have acknowledged your query and as per your request, this thread has been closed. Feel free to reach out if you need more information.",
    "Your request has been accepted and this thread has been concluded. If you have more questions, I'm here to assist.",
    "Your request has been received and the thread has been removed as per your wish. I'm here to assist you whenever you need me.",
];
export const negativeReplies = [
    (authorId) =>
        `I'm sorry to hear you're not satisfied, <@${authorId}>. I'm here to improve, and your feedback helps.`,
    (authorId) =>
        `Hi <@${authorId}>, thank you for your feedback. I'll make sure to use it to improve our interactions.`,
    (authorId) =>
        `Hey <@${authorId}>, I'm sorry I missed the mark this time. Your feedback is important and I'll strive to do better.`,
    (authorId) =>
        `Oops, seems like I fell short <@${authorId}>. But don't worry, I'm here to learn and grow. Your feedback is an important part of this process.`,
    (authorId) =>
        `Hello <@${authorId}>, I'm sorry you're not happy with my performance. Feedback like yours helps me to improve.`,
    (authorId) =>
        `Thank you for your feedback, <@${authorId}>. I'm here to serve you better, and your constructive criticism is a key part of that.`,
];

export const positiveReplies = [
    (authorId) =>
        `Your words of appreciation warm my heart, <@${authorId}>. I'm honored to assist you.`,
    (authorId) =>
        `Great to hear from you, <@${authorId}>. Your kind words motivate me to do better.`,
    (authorId) =>
        `Thank you, <@${authorId}>. Your positive words inspire me to work harder and better.`,
    (authorId) =>
        `Your kind words bring happiness, <@${authorId}>. Your support means a lot to me.`,
    (authorId) =>
        `Feeling appreciated by you, <@${authorId}>, is a joy. I'm here to assist you anytime.`,
    (authorId) =>
        `<@${authorId}>, your kind words make my day better. I am here to help and assist you.`,
];

export const welcomeReplies = [
    `Hello! Nice to see you here. How can I assist you today?`,
    `Good day! How can I be of help today?`,
    `Hey there! Need some help? Just let me know!`,
    `Hi! If you need anything, feel free to ask.`,
    `Hello! Need some assistance? I'm here to help.`,
];