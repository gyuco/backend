import { ApiProperty } from '@nestjs/swagger';
import { roles } from '@prisma/client';

export class permissions {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ type: () => roles })
  role: roles;

  @ApiProperty({ type: Number })
  roleId: number;

  @ApiProperty({ isArray: true, type: () => role_permissions })
  role_permissions: any[];
}
