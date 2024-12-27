import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
@NgModule({
  //Acá van todos los componentes a utilizar
  declarations: [AppComponent],
  //Componente raíz que es con el que inicia la app
  bootstrap: [AppComponent],
  //Para importar componentes que son standalone
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],
})
export class AppModule {}
