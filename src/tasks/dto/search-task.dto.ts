import { IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.module';

export class SearchTaskDto {
  @IsOptional()
  title: string;

  @IsOptional()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
