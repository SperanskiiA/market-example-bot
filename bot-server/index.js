const TelegramApi = require('node-telegram-bot-api');
require('dotenv').config();

token = process.env.TOKEN
console.log(token)

const bot = new TelegramApi(token, { polling: true })
const webAppUrl = '/'

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Hi there! Lets get it started?')
    }
    bot.sendMessage(chatId, 'Received your message');
});