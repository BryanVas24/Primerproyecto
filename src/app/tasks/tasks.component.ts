import { Component, Input } from '@angular/core';

import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  isAddingTask = false;
  constructor(private taskService: TaskService) {}
  get selectedUsertasks() {
    return this.taskService.getUserTasks(this.id);
  }

  openOrCloseAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }
}
