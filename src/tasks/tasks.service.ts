import { Injectable } from '@nestjs/common';
import { TaskStatus } from './tasks.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { SearchTaskDto } from './dto/search-task.dto';
import { TaskRepository } from './tasks.repository';
import { Task } from './tasks.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  /**
   * Get task by id.
   *
   * @param id string
   * @returns Task
   */
  public async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });

    // if (!task) {
    //   throw new NotFoundException('ko tim thay task');
    // }

    return task;
  }

  /**
   * Create task.
   *
   * @param createTaskDto CreateTaskDto
   * @returns Promise<Task>
   */
  public createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    return this.taskRepository.save({
      title,
      description,
      status: TaskStatus.OPEN,
    });
  }

  /**
   * Delete task
   *
   * @param id string
   */
  public async deleteTaskById(id: string): Promise<number> {
    const result: DeleteResult = await this.taskRepository.delete(id);

    return result.affected;
  }

  /**
   * Upadate task by id.
   *
   * @param id string
   * @param updateTaskDto UpdateTaskDto
   * @returns Task
   */
  public async updateTaskById(
    id: string,
    updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    const task: Task = await this.taskRepository.findOneBy({ id });

    // if (!task) {
    //   throw new NotFoundException('ko tim thay task');
    // }

    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.status = updateTaskDto.status;
    this.taskRepository.save(task);

    return task;
  }

  /**
   * Search tasks.
   *
   * @param searchTaskDto SearchTaskDto
   * @returns Task[]
   */
  public searchTask(searchTaskDto: SearchTaskDto): Promise<Task[]> {
    return this.taskRepository.searchBy(searchTaskDto);
  }
}
