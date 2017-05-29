import {Component} from "@angular/core";
import {FotoComponent} from "../foto/foto.component";
import { Http, Headers } from '@angular/http';//como no component cadstro iremos nos comunicar com o servidor, precisamos
                                            //importar o modulo do Http, que lida com as requisições.
                                            //também importamos o Módulo do Headers, que vai indicar DENTRO da requisiçao 
                                            //qual o tipo de dados que estou enviando ao servidor.
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; //Lidam com as validações de formulários dentro do BackEnd

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent{
    foto : FotoComponent = new FotoComponent;
    http: Http;//como vamos fazer a comunicação dentro do método cadastrar, devemos colocar dentro de uma váriavel.
                //e no constructor associamos ela ao http do component.

    meuForm: FormGroup; // crio o grupo que contem meu formulário.

    constructor(http:Http, fb:FormBuilder){
        this.http = http;
        this.meuForm = fb.group({
            titulo: ['',Validators.required],
            url: ['',Validators.required],
            descricao: ['']
        });

    }
    cadastrar(event:Event){
        event.preventDefault();

        let headers = new Headers(); // crio o header da requisição (uma espécie de descriçao do pacote.)
        headers.append('Content-Type', 'application/json'); //Defino o headers indicando o tipo do conteúdo.


        this.http
        .post("v1/fotos", JSON.stringify(this.foto), {headers : headers})//o método POST envia a requisiçao de alteração ao servidor
        .subscribe(() => {                                               //passando o caminho, o objeto,
                                                                         //que no caso não pode ser passado direto
                                                                         //devemos primeiro transforma-lo em JSON 
                                                                         //e também passamos diretivas de configuração (headers)
            this.foto = new FotoComponent();                             //Depois lidamos com a resposta dentro do .subscribe
        });                                                              //Limpamos o formulário após adicionar a nova foto.
        
    }
}