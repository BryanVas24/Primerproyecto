import { Component, computed, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomUserIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  /*get getUserImage() {
    return 'assets/users/' + this.selectedUser.avatar;
  }*/

  //Esta es la función que se ejecuta en el onLCic
  onSelectUser() {
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
  }
}
