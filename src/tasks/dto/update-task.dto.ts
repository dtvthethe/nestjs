import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../tasks.enum';

export class UpdateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
