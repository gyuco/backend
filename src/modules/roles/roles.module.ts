import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { DatabaseModule } from 'src/db/database.module';
import { rolesProviders } from './roles.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...rolesProviders, RolesService],
  controllers: [RolesController],
})
export class RolesModule {}
