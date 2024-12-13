import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//Esto es el decorador e indica como se construye el component
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Esto es como una prop y puede ser publica o privada, si es privada solo se usa en la clase
  selectedUser = DUMMY_USERS[randomUserIndex];
  get getUserImage() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  onSelectUser() {
    console.log('Hola');
  }
}
