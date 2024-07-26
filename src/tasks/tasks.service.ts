import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.module';
import { CreateTaskDto } from './dto/create-task.dto';
import { v4 as uuid } from 'uuid';
import { UpdateTaskDto } from './dto/update-task.dto';
import { SearchTaskDto } from './dto/search-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  constructor() {
    const task: Task = {
      description: 'Default task',
      id: uuid(),
      status: TaskStatus.OPEN,
      title: 'default',
    };
    this.tasks.push(task);
  }

  private getTaskIndex(id: string): number {
    const index: number = this.tasks.findIndex((task: Task) => task.id === id);

    if (index < 0) {
      throw new NotFoundException();
    }

    return index;
  }

  /**
   * Get all tasks
   *
   * @returns Task[]
   */
  public getAllTasks(): Task[] {
    return this.tasks;
  }

  /**
   * Get task by id.
   *
   * @param id string
   * @returns Task
   */
  public getTaskById(id: string): Task {
    const index: number = this.getTaskIndex(id);

    return this.tasks[index];
  }

  /**
   * Create task.
   *
   * @param createTaskDto CreateTaskDto
   * @returns Task
   */
  public createTask(createTaskDto: CreateTaskDto): Task {
    const task: any = createTaskDto;
    task.status = TaskStatus.OPEN;
    task.id = uuid();
    this.tasks.push(task);

    return task;
  }

  /**
   * Delete task
   *
   * @param id string
   */
  public deleteTaskById(id: string): void {
    const index: number = this.getTaskIndex(id);
    this.tasks.splice(index, 1);
  }

  /**
   * Upadate task by id.
   *
   * @param id string
   * @param updateTaskDto UpdateTaskDto
   * @returns Task
   */
  public updateTaskById(id: string, updateTaskDto: UpdateTaskDto): Task {
    const index: number = this.getTaskIndex(id);
    this.tasks[index].description = updateTaskDto.description;
    this.tasks[index].status = updateTaskDto.status;
    this.tasks[index].title = updateTaskDto.title;

    return this.tasks[index];
  }

  /**
   * Search tasks.
   *
   * @param searchTaskDto SearchTaskDto
   * @returns Task[]
   */
  public searchTask(searchTaskDto: SearchTaskDto): Task[] {
    return this.tasks.filter((task: Task) => {
      if (
        searchTaskDto.description &&
        task.description.includes(searchTaskDto.description)
      ) {
        return true;
      }

      if (
        searchTaskDto.title &&
        task.description.includes(searchTaskDto.title)
      ) {
        return true;
      }

      if (searchTaskDto.status && task.status === searchTaskDto.status) {
        return true;
      }

      return false;
    });
  }
}
