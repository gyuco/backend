import { users } from './users';
import { roles } from './roles';
import { ApiProperty } from '@nestjs/swagger';

export class profiles {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  country: string;

  @ApiProperty({ type: String })
  city: string;

  @ApiProperty({ type: String })
  postalcode: string;

  @ApiProperty({ type: String })
  address: string;

  @ApiProperty({ type: Date })
  birthday: Date;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ type: () => users })
  user: users;

  @ApiProperty({ type: Number })
  userId: number;

  @ApiProperty({ type: () => roles })
  role: roles;

  @ApiProperty({ type: Number })
  roleId: number;
}
