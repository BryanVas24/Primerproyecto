import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  //Acá van todos los componentes a utilizar
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  //Componente raíz que es con el que inicia la app
  bootstrap: [AppComponent],
  //El BrowserModule incluye tambien algunos pipes como el de las fechas, el formsModule es aparte por lo que lo tenes que importar
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
