import { Controller, Get } from '@nestjs/common';
import { ChatGateway } from 'src/socket/chat.gateway';

@Controller('chat')
export class ChatController {
  constructor(private readonly checkGateway: ChatGateway) {}

  @Get('/start-event')
  startEvent(): string {
    this.checkGateway.handleIncommingMessage(null, {
      room: 'ts',
      message: 'ciao a te',
    });
    return 'Endpoint chiamato con successo!';
  }
}
