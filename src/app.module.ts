import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProvidersModule } from './modules/providers/providers.module';
import { LoginsModule } from './modules/logins/logins.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { RolepermissionsModule } from './modules/rolepermissions/rolepermissions.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { MessagesModule } from './modules/messages/messages.module';
import { ChatsModule } from './modules/chats/chats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV
        ? '.env.' + process.env.NODE_ENV
        : '.env',
    }),
    PrismaModule,
    ProvidersModule,
    LoginsModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    RolepermissionsModule,
    AuthModule,
    ChatModule,
    MessagesModule,
    ChatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
