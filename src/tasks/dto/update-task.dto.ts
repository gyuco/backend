import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  task_name: string;

  @IsOptional()
  @IsString()
  task_description: string;
}
