import { Login } from './login';
import { ApiProperty } from '@nestjs/swagger';

export class Provider {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ isArray: true, type: () => Login })
  logins: Login[];
}
