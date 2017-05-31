import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text: string;
  oldText:string;
  AppState = 'default';
  constructor(private _todoService: TodoService) { 
    //recebe no construtor o serviço que lida com o localStorage
  }

  ngOnInit() {
    this.todos = this._todoService.getToDos();
  }

  addToDo(){
    if(!this.text){
      return;
    }
    //checa se o texto está vazio.(fazer depois por validação de form);

    var newToDo ={
      text:this.text
    }
    //cria o objeto com o texto da nova tarefa
    this.todos.push(newToDo);
    //inclui na lista das tarefas da view

    this._todoService.addToDo(newToDo);
    // envia a nova tarefa para o servço
    this.text = '';
    //limpa o form
  }
  deleteToDo(todoText){
    for(var i = 0; i< this.todos.length;i++){
      if(this.todos[i].text == todoText){
        this.todos.splice(i,1);
      }
      //passa por todas as tarefas da lista e caso
      //seja igual ela é retirada da lista.
    }
    this._todoService.deleteToDo(todoText);
    //envia a tarefa excluida para o serviço
  }

  editToDo(todo){
    this.AppState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }
  updateToDo(){
    for(var i = 0; i< this.todos.length;i++){
      if(this.todos[i].text == this.oldText){
        this.todos[i].text = this.text;
      }
    }
    this.AppState = 'default';
    this._todoService.updateToDo(this.text,this.oldText);
    this.text = '';
  }

}
