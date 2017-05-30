import {Component,Input,OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "painel",
    templateUrl: "./painel.component.html",
    styleUrls: ["./painel.component.css"] //define o css que afetará apenas aquele componente
})
export class PainelComponent{
    @Input() titulo: string;

    ngOnInit() {//ngOnInit é chamado quando o componente é inicializado. Após o construtor (like Start() on Unity)
        this.titulo = this.titulo.length > 7 ?
             this.titulo.substr(0, 7) + '...' : 
             this.titulo;
             //transforma o titulo da foto e deixa no máx. 7 caracteres.
    }
} 