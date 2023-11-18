import { ApiProperty } from '@nestjs/swagger';
import { permissions, profiles, role_permissions } from '@prisma/client';

export class roles {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ isArray: true, type: () => permissions })
  permissions: permissions[];

  @ApiProperty({ isArray: true, type: () => profiles })
  profiles: profiles[];

  @ApiProperty({ isArray: true, type: () => role_permissions })
  role_permissions: role_permissions[];
}
