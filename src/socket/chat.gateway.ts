import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from 'src/modules/messages/messages.service';

@WebSocketGateway(8100, {
  cors: { origin: '*' },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(private messageService: MessagesService) {}
  afterInit(server: any) {
    console.log('Esto se ejecuta cuando inicia');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('Hola alguien se conecto al socket 👌👌👌');
  }

  handleDisconnect(client: any) {
    console.log('ALguien se fue! chao chao');
  }

  @SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    console.log(`hola ${room}`);
    client.join(room);
  }

  @SubscribeMessage('event_message')
  async handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    await this.messageService.create({
      text: message,
      chatId: 1,
      userId: 1,
    });
    this.server.to(room).emit('new_message', message);
  }

  @SubscribeMessage('event_leave')
  handleRoomLeave(client: Socket, room: string) {
    console.log(`chao ${room}`);
    client.leave(room);
  }
}
