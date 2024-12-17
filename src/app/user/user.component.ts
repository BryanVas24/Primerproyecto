import { Component, EventEmitter, Input, output, Output } from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};
//Esto es el decorador e indica como se construye el component
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //El input es para indicar que viene un dato de fuera, el ! despues del avatar es para indicar que si va a haber algo
  //Con lo del required true ya no le mentis a typescipt porque directamente tiene que recibir algo
  @Input({ required: true }) user!: User;

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
