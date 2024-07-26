import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task.module';

export class UpdateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
