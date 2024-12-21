import { Injectable } from '@angular/core';
import { type TaskFormData } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
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

  getUserTasks(id: string) {
    return this.tasks.filter((task) => task.userId === id);
  }
  addTask(taskData: TaskFormData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
