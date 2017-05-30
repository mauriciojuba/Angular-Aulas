//as classes de serviço não são componentes, elas servem para centralizar alguma configuração que é recorrente
//em outros componentes, assim qualquer alteração necessária, refletirá em todos os outros componentes.

import {Http, Headers} from '@angular/http';
import {FotoComponent} from './foto.component';
import { Injectable } from '@angular/core';//como o serviço não é um componente ele não consegue injetar
                                            //módulos... por tanto devemos incluir o Inject

@Injectable()//declaro o decorator
export class FotoService{
    http:Http;
    headers:Headers;
    url:string = "v1/fotos";

    constructor(http:Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    cadastra(foto: FotoComponent){
        if (foto._id) {
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto), 
            { headers: this.headers });
        } else {
            return this.http.post(this.url, JSON.stringify(foto), 
                { headers: this.headers });
        }
    }

    lista(){
        return this.http.get(this.url);
    }

    remove(foto:FotoComponent){
        return this.http.delete(this.url + "/" + foto._id);
    }

    buscaPorId(id:string){
        return this.http.get(this.url + "/" + id);
    }
}

//nesse serviço nós isolamos as requisicões, feitas anteriormente pelos componentes de listagem
// e cadastro, e retiramos dos mesmos os módulos e métodos usados. Assim quando for necessário
//alguma alteração ou novas diretivas, será mais fácil de modificar.