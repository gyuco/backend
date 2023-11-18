import { providers } from './providers';
import { users } from './users';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class logins {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  password: string;

  @ApiPropertyOptional({ type: String })
  token?: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ type: Boolean })
  active: boolean;

  @ApiProperty({ type: () => providers })
  provider: providers;

  @ApiProperty({ type: Number })
  providerId: number;

  @ApiProperty({ type: () => users })
  user: users;

  @ApiProperty({ type: Number })
  userId: number;
}
