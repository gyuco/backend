import { RolePermission } from './role_permission';
import { Role } from './role';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Permission {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ isArray: true, type: () => RolePermission })
  role_permissions: RolePermission[];

  @ApiPropertyOptional({ type: () => Role })
  Role?: Role;

  @ApiPropertyOptional({ type: Number })
  roleId?: number;
}
