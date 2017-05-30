import {Component} from "@angular/core";
import {FotoService} from "../foto/foto.service";
import {FotoComponent} from "../foto/foto.component";

@Component({
    moduleId: module.id,
    selector: "listagem",
    templateUrl: './listagem.component.html'
})

export class ListagemComponent{
    fotos: Object[] = [];
    service:FotoService;
    constructor(service:FotoService){
        this.service = service;
        this.service.lista().subscribe(res =>{//usando o método dentro do serviço criado temos o mesmo resultaod.
            this.fotos = res.json(); 
        });
    }

    remove(foto:FotoComponent){
        this.service.remove(foto).subscribe(()=>{ //ao remover uma foto do servidor o angular não entende que deve recarregar a lista.
                    let novasFotos = this.fotos.slice(0); //ao invés de fazer uma nova requisição ao banco para trazer todas as fotos
                    let indice = novasFotos.indexOf(foto); // usando o listar() do serviço, nós criamos um novo array com as que já
                    novasFotos.splice(indice, 1);//estão lá e nesse novo array excluimos a que clicamos, daí passamos esse novo array
                    this.fotos = novasFotos;// para as fotos. O que faz com que o Angular recarregue os objetos.
        });
    }
}