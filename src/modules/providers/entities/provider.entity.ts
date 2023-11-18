import { ApiProperty } from '@nestjs/swagger';

export class providers {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Date })
  created_at: Date;

  @ApiProperty({ isArray: true, type: () => logins })
  logins: logins[];
}
