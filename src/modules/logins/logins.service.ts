import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

export const roundsOfHashing = 10;
@Injectable()
export class LoginsService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateLoginDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;
    createUserDto.active = true;

    return this.prisma.login.create({
      data: createUserDto,
    });
  }

  findAll() {
    return `This action returns all logins`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
