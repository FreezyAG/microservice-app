import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TaskEntity } from './task.entity';
import { TasksDTO } from './task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async showAll() {
    return this.taskRepository.find();
  }

  async create(data: TasksDTO): Promise<TasksDTO> {
    const task = this.taskRepository.create(data);
    await this.taskRepository.save(data);
    return task;
  }
}
