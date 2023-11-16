import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  task_name: string;

  @IsNotEmpty()
  @IsString()
  task_description: string;
}
