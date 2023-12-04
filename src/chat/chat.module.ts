import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatGateway } from 'src/socket/chat.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MessagesService } from 'src/modules/messages/messages.service';

@Module({
  imports: [PrismaModule],
  controllers: [ChatController],
  providers: [ChatService, ChatGateway, MessagesService],
})
export class ChatModule {}
