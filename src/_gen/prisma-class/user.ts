import { Login } from './login';
import { Role } from './role';
import { Message } from './message';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  firstname: string;

  @ApiProperty({ type: String })
  lastname: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ isArray: true, type: () => Login })
  logins: Login[];

  @ApiProperty({ isArray: true, type: () => Role })
  roles: Role[];

  @ApiProperty({ isArray: true, type: () => Message })
  Message: Message[];
}
