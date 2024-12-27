import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from './user.model';

//Esto es el decorador e indica como se construye el component
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //El input es para indicar que viene un dato de fuera, el ! despues del avatar es para indicar que si va a haber algo
  //Con lo del required true ya no le mentis a typescipt porque directamente tiene que recibir algo
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  //El output sirve para pasar info de un hijo a un padre
  @Output() select = new EventEmitter<string>();
  //Esta es otra manera de usar output
  //select = output<string>();
  get getImagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  //Esta es la función que se ejecuta en el onLCic
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
