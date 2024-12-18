import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskFormData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() add = new EventEmitter<TaskFormData>();
  closeModalbtn() {
    this.closeModal.emit();
  }
  //Datos del formulario
  title = '';
  summary = '';
  dueDate = '';

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });
  }
}
