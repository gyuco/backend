import { Module } from '@nestjs/common';
import { LoginsService } from './logins.service';
import { LoginsController } from './logins.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LoginsController],
  providers: [LoginsService],
})
export class LoginsModule {}
