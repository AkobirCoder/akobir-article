import { sendTelegramMessage } from '../services/telegram.service.js';

export const sendMessage = async (req, res) => {
    const { fullname, email, phone, message } = req.body;

    const text = `
        📩 <b>New Contact Message</b>

        👤 <b>Full name:</b> ${fullname}
        📧 <b>Email:</b> ${email}
        📱 <b>Phone:</b> ${phone}
        💬 <b>Message:</b> ${message}
    `;

    try {
        await sendTelegramMessage(text);

        res.json({
            status: 'success',
            message: 'Thanks for contacting with us',
        });
    } catch (error) {
            res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};