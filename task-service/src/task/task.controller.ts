import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';

import { TaskService } from './task.service';
import { TasksDTO } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async showAllTasks() {
    return {
      status: HttpStatus.OK,
      data: this.taskService.showAll(),
    };
  }

  @Post()
  async createTask(@Body() data: TasksDTO) {
    return {
      status: HttpStatus.OK,
      message: 'Task created successfully',
      data: await this.taskService.create(data),
    };
  }
}
