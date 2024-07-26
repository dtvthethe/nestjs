import { DataSource, Repository } from 'typeorm';
import { Task } from './task.entity';
import { Injectable } from '@nestjs/common';
import { SearchTaskDto } from './dto/search-task.dto';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private datasource: DataSource) {
    super(Task, datasource.createEntityManager());
  }

  /**
   * Search tasks.
   *
   * @param searchTaskDto SearchTaskDto
   * @returns Promise<Task[]>
   */
  public searchBy(searchTaskDto: SearchTaskDto): Promise<Task[]> {
    const { title, description, status } = searchTaskDto;
    const qb = this.createQueryBuilder('t');

    if (title) {
      qb.andWhere('LOWER(t.title) LIKE LOWER(:title)', { title: `%${title}%` });
    }

    if (description) {
      qb.andWhere('LOWER(t.description) LIKE LOWER(:description)', {
        description: `%${description}%`,
      });
    }

    if (status) {
      qb.andWhere('t.status = :status', { status });
    }

    return qb.getMany();
  }
}
