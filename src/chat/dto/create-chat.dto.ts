import { IsNotEmpty, IsString } from 'class-validator';
import { Chat } from 'src/_gen/prisma-class/chat';

type CreateChat = Pick<Chat, 'name'>;
export class CreateChatDto implements CreateChat {
  @IsNotEmpty()
  @IsString()
  name: string;
}
