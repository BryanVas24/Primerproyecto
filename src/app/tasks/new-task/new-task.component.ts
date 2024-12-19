import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeModal = new EventEmitter<void>();
  closeModalbtn() {
    this.closeModal.emit();
  }
  //Datos del formulario
  title = '';
  summary = '';
  dueDate = '';

  onSubmit() {
    console.log('Task submitted:', {
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });
    // Resetear los valores del formulario
    this.title = '';
    this.summary = '';
    this.dueDate = '';
    // Cerrar el modal
    this.closeModal.emit();
  }
}
