import {Component,Input} from "@angular/core";//o Input serve para que possamos passar parâmetros ao componente.

@Component({
    moduleId: module.id,
    selector: "foto",
    templateUrl: "./foto.component.html"
})

export class FotoComponent{
    //aqui coloco todos os parâmetros que preciso para meu componente, para declará-los uso o @Input() antes dele.
    @Input() titulo: string ="";
    @Input() url : string = "";
    descricao : string ="";
}
