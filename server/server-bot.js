// import express from 'express';
// import dotenv from 'dotenv';
// import fetch from 'node-fetch';
// import cors from 'cors';

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.post('/send-message', async(req, res) => {
//     const  {fullname, email, phone, message} = req.body;

//     const token = process.env.TELEGRAM_TOKEN_BOT;

//     const chatId = process.env.CHAT_ID;

//     const text = `
//         📩 <b>New Contact Message</b>

//         👤 <b>Full name:</b> ${fullname}
//         📧 <b>Email:</b> ${email}
//         📱 <b>Phone:</b> ${phone}
//         💬 <b>Message:</b> ${message}
//     `;

//     try {
//         const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 chat_id: chatId,
//                 text: text,
//                 parse_mode: 'HTML',
//             }),
//         });

//         const data = await response.json();

//         if (!data.ok) {
//             throw new Error(data.description);
//         }

//         res.json({
//             status: 'success',
//             message: 'Thanks for contacting with us',
//         });
//     } catch (error) {
//         console.error('Telegram API error:', error.message);

//         res.status(500).json({
//             status: 'error',
//             message: error.message,
//         });
//     }
// });

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', contactRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});