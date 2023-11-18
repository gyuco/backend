import { Role } from './role';
import { Permission } from './permission';
import { ApiProperty } from '@nestjs/swagger';

export class RolePermission {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Boolean })
  read: boolean;

  @ApiProperty({ type: Boolean })
  write: boolean;

  @ApiProperty({ type: Boolean })
  delete: boolean;

  @ApiProperty({ type: () => Role })
  role: Role;

  @ApiProperty({ type: Number })
  roleId: number;

  @ApiProperty({ type: () => Permission })
  permission: Permission;

  @ApiProperty({ type: Number })
  permissionId: number;
}
