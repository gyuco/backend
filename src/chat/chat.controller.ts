import { Body, Controller, Param, Post } from '@nestjs/common';
import { ChatGateway } from 'src/socket/chat.gateway';

interface Message {
  room: string;
  message: string;
}

interface MessageText {
  message: string;
}
@Controller('chat')
export class ChatController {
  constructor(private readonly checkGateway: ChatGateway) {}

  @Post('/send-message/:room')
  startEvent(@Param('room') room: string, @Body() body: MessageText): Message {
    const bodyMessage: Message = {
      room,
      message: body.message,
    };
    this.checkGateway.handleIncommingMessage(null, bodyMessage);
    return bodyMessage;
  }
}
