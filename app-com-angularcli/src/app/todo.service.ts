import { Injectable } from '@angular/core';
import { Init } from './init_todos';
//incluimos a classe que inicializa as tarefas
//puxando do localstorage

@Injectable()
export class TodoService extends Init{
//usando o extends Init falamos que esse
//servico depende da classe Init
  constructor() {
    super();
    this.load();
    //para poder usar o extends de uma classe
    // usamos o metodo super().
    //e fazemos a requisição do do localStorage
    //para popular a lista de tarefas.
   }


  getToDos(){
    var todos = JSON.parse(localStorage.getItem('todos')) ;
    return todos;
  }

  addToDo(newToDo){
    //para adicionar uma nova tarefa
    //puxamos do localStorage (Em forma de JSON usando o JSON.parse)
    //toda lista de toDos.
    //incluimos a nova tarefa nessa lista e depois reenviamos
    //ao LocalStorage (Em forma de String via stringify).
    var todos = JSON.parse(localStorage.getItem('todos')) ;
    todos.push(newToDo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteToDo(todoText){
    //o mesmo processo de addToDo, com a diferença que usamos o
    //for para comparar os textos de cada tarefa e a excluimos
    //da lista trazida do localstorage para poder reenviá-la.
    var todos = JSON.parse(localStorage.getItem('todos')) ;
    for(var i = 0; i< todos.length;i++){
      if(todos[i].text == todoText){
        todos.splice(i,1);
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  updateToDo(text,oldText){
    var todos = JSON.parse(localStorage.getItem('todos')) ;
    for(var i = 0; i< todos.length;i++){
      if(todos[i].text == oldText){
        todos[i].text = text;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
