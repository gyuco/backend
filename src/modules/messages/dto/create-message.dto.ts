import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Message } from 'src/_gen/prisma-class/message';

type CreateMessage = Pick<Message, 'text' | 'chatId' | 'userId'>;
export class CreateMessageDto implements CreateMessage {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsNumber()
  chatId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
