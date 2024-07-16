import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: string[] = ['one', 'two'];

  /**
   * Get all tasks
   *
   * @returns string[]
   */
  public getAllTasks() {
    return this.tasks;
  }
}
