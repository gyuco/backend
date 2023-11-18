import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Login } from 'src/_gen/prisma-class/login';

type CreateLogin = Pick<
  Login,
  'username' | 'password' | 'token' | 'providerId' | 'userId'
>;
export class CreateLoginDto implements CreateLogin {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  token: string;

  @IsNotEmpty()
  @IsNumber()
  providerId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  active: boolean;
}
