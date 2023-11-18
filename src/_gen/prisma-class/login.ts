import { Provider } from './provider';
import { User } from './user';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Login {
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

  @ApiProperty({ type: () => Provider })
  provider: Provider;

  @ApiProperty({ type: Number })
  providerId: number;

  @ApiProperty({ type: () => User })
  user: User;

  @ApiProperty({ type: Number })
  userId: number;
}
