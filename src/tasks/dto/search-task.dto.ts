import { TaskStatus } from '../task.module';

export class SearchTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
}
