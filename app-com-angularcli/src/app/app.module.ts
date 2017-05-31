import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {TodoService} from "./todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ TodoService ],//lembrando sempre que todo serviço deve ser incluido aqui.
  //o CLI não faz a atribuição automáticamente.
  bootstrap: [AppComponent]
})
export class AppModule { }
