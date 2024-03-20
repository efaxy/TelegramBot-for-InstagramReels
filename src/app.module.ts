import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from './telegram/telegram.module';
import { TelegramService } from './telegram/telegram.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}), TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
