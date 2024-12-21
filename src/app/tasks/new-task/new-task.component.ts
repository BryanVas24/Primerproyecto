import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskFormData } from './new-task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeModal = new EventEmitter<void>();

  @Input({ required: true }) userId!: string;
  private tasksService = inject(TaskService);
  closeModalbtn() {
    this.closeModal.emit();
  }
  //Datos del formulario
  title = '';
  summary = '';
  dueDate = '';

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate,
      },
      this.userId
    );
    this.closeModal.emit();
  }
}
