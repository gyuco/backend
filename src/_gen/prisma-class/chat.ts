import { Message } from './message';
import { ApiProperty } from '@nestjs/swagger';

export class Chat {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ isArray: true, type: () => Message })
  messages: Message[];

  @ApiProperty({ type: Date })
  updated_at: Date;
}
