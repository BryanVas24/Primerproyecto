import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Dominar Angular',
      summary:
        'Aprender todas las características básicas y avanzadas de Angular y cómo aplicarlas.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Crear el primer prototipo',
      summary: 'Crear un primer prototipo del sitio web de la tienda en línea',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Preparar plantilla de problemas',
      summary:
        'Preparar y describir una plantilla de problemas que ayudará con la gestión del proyecto',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Probar aplicación',
      summary:
        'Debes probar la aplicación que esta siendo construida en este proyecto',
      dueDate: '2025-12-31',
    },
  ];

  get selectedUsertasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  openOrCloseAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }
}
