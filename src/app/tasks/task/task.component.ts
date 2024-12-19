import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskInfo } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: taskInfo;
  @Output() completeTask = new EventEmitter<string>();

  completeTaskHandler() {
    this.completeTask.emit(this.task.id);
  }
}
