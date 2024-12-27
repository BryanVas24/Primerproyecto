import { Component, inject, Input } from '@angular/core';
import { taskInfo } from './task.model';

import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: taskInfo;

  private tasksService = inject(TaskService);
  completeTaskHandler() {
    this.tasksService.removeTask(this.task.id);
  }
}
