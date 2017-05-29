import {Component} from "@angular/core";
import{Http} from "@angular/http"; //inclui o serviço de Http par fazer requisições ao Back-End

@Component({
    moduleId: module.id,
    selector: "listagem",
    templateUrl: './listagem.component.html'
})

export class ListagemComponent{
    fotos: Object[] = [];
    constructor(http:Http){
        http.get("v1/fotos")//usando o metodo get nós fazemos uma requisiçao para o backend e pegamos o conteúdo de v1/fotos
        .subscribe(res =>{//observamos a requisição e usamos uma função (arrow function) para lidar com sua resposta
            this.fotos = res.json(); //recebe o resultado transformado em uma estrutura json.
        });
    }
}