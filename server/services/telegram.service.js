import fetch from 'node-fetch';

export const sendTelegramMessage = async (text) => {
    const token = process.env.TELEGRAM_TOKEN_BOT;
    
    const chatId = process.env.CHAT_ID;

    const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: 'HTML',
            }),
        }
    );

    const data = await response.json();

    if (!data.ok) {
        throw new Error(data.description);
    }

    return data;
};