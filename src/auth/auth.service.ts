import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entities/auth.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
export const roundsOfHashing = 10;
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.login.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      throw new NotFoundException(`No user found: ${username}`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }

  async register(register: RegisterDto) {
    try {
      let result;
      await this.prisma.$transaction(async (prisma) => {
        const createdUser = await prisma.user.create({
          data: {
            firstname: register.firstname,
            lastname: register.lastname,
          },
        });

        const hashedPassword = await bcrypt.hash(
          register.password,
          roundsOfHashing,
        );

        const login = {
          username: register.username,
          password: hashedPassword,
          token: register.token,
          providerId: register.providerId,
          active: register.active,
          userId: createdUser.id,
        };
        await prisma.login.create({
          data: login,
        });

        result = {
          user: createdUser,
        };
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}
