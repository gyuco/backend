import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}
  async create(chat: CreateChatDto) {
    const createData = await this.prisma.chat.create({
      data: chat,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }
}
