import { TaskStatus } from '../task.module';

export class UpdateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
}
