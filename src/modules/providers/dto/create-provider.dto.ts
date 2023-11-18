import { IsNotEmpty, IsString } from 'class-validator';
import { Provider } from 'src/_gen/prisma-class/provider';

type CreateProvider = Pick<Provider, 'name'>;
export class CreateProviderDto implements CreateProvider {
  @IsNotEmpty()
  @IsString()
  name: string;
}
