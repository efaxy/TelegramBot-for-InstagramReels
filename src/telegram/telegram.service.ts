import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import TelegramBot = require('node-telegram-bot-api');


@Injectable()
export class TelegramService {
  private bot: TelegramBot;

  constructor(private configService: ConfigService) {
    // Замените 'YOUR_BOT_TOKEN' на реальный токен вашего Telegram бота
    const token = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    this.bot = new TelegramBot(token, { polling: true });

    // Подключите обработчик события 'message'
    this.bot.on('message', (msg) => this.handleMessage(msg));
  }

  // Обработчик входящих сообщений
  handleMessage(msg) {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Ответ бота на полученное сообщение
    this.bot.sendMessage(chatId, `You wrote: ${text}`);
  }
}