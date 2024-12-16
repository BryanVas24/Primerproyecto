import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();
  get getImagePath() {
    return `assets/users/${this.avatar}`;
  }
  //Esta es la función que se ejecuta en el onLCic
  onSelectUser() {
    this.select.emit(this.id);
  }
}
