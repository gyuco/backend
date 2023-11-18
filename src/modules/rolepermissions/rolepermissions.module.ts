import { Module } from '@nestjs/common';
import { RolepermissionsService } from './rolepermissions.service';
import { RolepermissionsController } from './rolepermissions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RolepermissionsController],
  providers: [RolepermissionsService],
})
export class RolepermissionsModule {}
