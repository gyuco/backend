import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

export const roundsOfHashing = 10;
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const createData = await this.prisma.user.create({
      data: createUserDto,
    });

    return {
      statusCode: 200,
      data: createData,
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    const dataUser = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataUser,
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
