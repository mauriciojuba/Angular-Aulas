//AppComponent é um component
import {Component} from '@angular/core';

@Component({
    moduleId: module.id, // faz com que procure o template do component a partir do diretório que o componente está e não da raíz do proj.
    selector: "app",//como vou acessar o app nas views
    templateUrl: "./app.component.html", //carrega o html desse component
})

export class AppComponent{
    
}