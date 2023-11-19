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
import { LoginDto } from './dto/login.dto';
export const roundsOfHashing = 10;
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  /**
   * Performs a login operation.
   *
   * @param {LoginDto} bodyLogin - the login data.
   * @return {Promise<AuthEntity>} - the authenticated user information.
   */
  async login(bodyLogin: LoginDto): Promise<AuthEntity> {
    const login = await this.prisma.login.findFirst({
      where: {
        username: bodyLogin.username,
        providerId: bodyLogin.providerId,
      },
    });

    if (!login) {
      throw new NotFoundException(`No user found: ${bodyLogin.username}`);
    }

    if (!login.active) {
      throw new UnauthorizedException('User is not active');
    }

    if (bodyLogin.token) {
      if (bodyLogin.token !== login.token) {
        throw new UnauthorizedException('Invalid token');
      }
    } else {
      const isPasswordValid = await bcrypt.compare(
        bodyLogin.password,
        login.password,
      );
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid password');
      }
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: login.userId,
      },
    });
    return {
      user,
      accessToken: this.jwtService.sign({ userId: user.id }),
      refreshToken: this.jwtService.sign(
        { userId: user.id },
        { expiresIn: '1d' },
      ),
    };
  }

  /**
   * Registers a new user.
   *
   * @param {RegisterDto} register - The registration data for the new user.
   * @return {Promise<any>} - The result of the registration process.
   */
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
