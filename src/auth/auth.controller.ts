import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entities/auth.entity';
import { RegisterDto } from './dto/register.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { username, password }: LoginDto) {
    return this.authService.login(username, password);
  }

  @Post('register')
  @ApiOkResponse({ type: AuthEntity })
  register(@Body() body: RegisterDto) {
    const register: RegisterDto = {
      username: body.username,
      password: body.password,
      token: body.token,
      providerId: body.providerId,
      firstname: body.firstname,
      lastname: body.lastname,
      active: false,
    };
    return this.authService.register(register);
  }
}
