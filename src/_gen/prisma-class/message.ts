import { Chat } from './chat';
import { User } from './user';
import { ApiProperty } from '@nestjs/swagger';

export class Message {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  text: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ type: () => Chat })
  chat: Chat;

  @ApiProperty({ type: Number })
  chatId: number;

  @ApiProperty({ type: () => User })
  user: User;

  @ApiProperty({ type: Number })
  userId: number;
}
