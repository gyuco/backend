import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/_gen/prisma-class/user';

type CreateProvider = Pick<User, 'firstname' | 'lastname'>;
export class CreateUserDto implements CreateProvider {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;
}
