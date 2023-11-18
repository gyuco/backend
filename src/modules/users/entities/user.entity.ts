import { logins } from './logins';
import { profiles } from './profiles';
import { ApiProperty } from '@nestjs/swagger';

export class users {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  firstname: string;

  @ApiProperty({ type: String })
  lastname: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ isArray: true, type: () => logins })
  logins: logins[];

  @ApiProperty({ isArray: true, type: () => profiles })
  profiles: profiles[];
}
