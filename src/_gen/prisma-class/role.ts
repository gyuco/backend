import { Permission } from './permission';
import { RolePermission } from './role_permission';
import { User } from './user';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Role {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ isArray: true, type: () => Permission })
  permissions: Permission[];

  @ApiProperty({ isArray: true, type: () => RolePermission })
  RolePermission: RolePermission[];

  @ApiPropertyOptional({ type: () => User })
  User?: User;

  @ApiPropertyOptional({ type: Number })
  userId?: number;
}
