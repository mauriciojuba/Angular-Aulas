import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import{AppComponent} from "./app.component"//para fazer isso primeiro eu tenho que falar que o componente que estou me referindo é exportável.
import { FotoModule } from "./foto/foto.module";
import {HttpModule} from "@angular/http";//provider, para que seja permitido que as requisições sejam executadas.
import {PainelModule} from "./painel/painel.module"

import {CadastroComponent} from './cadastro/cadastro.component'//cadastro é um componente página, não é criado módulos para esse tipo.
//portanto devo incluir direto no modulo da minha aplicação.
//e devo incluir ele em "declarations" para que ele seja carregado junto com a minha app.
import {ListagemComponent} from './listagem/listagem.component';

import {routing} from './app.routes'; //módulo que consta as rotas de URL
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; //módulo que permite o two-di-databiding, para poder usar o ngModel nos templates.
                                                        //ReactiveFormsModule serve para que as validações de formulário sejam feitas no BackEnd


//o ngmodule é um decorator que fala que aquele módulo é um módulo do Angular.
@NgModule({
    imports: [BrowserModule,
     FotoModule,
     HttpModule,
     PainelModule,
     routing,
     FormsModule,
     ReactiveFormsModule
     ],//importa um módulo do ES6(ecmascript6) que indica que essa aplicaçao vai rodar no browser.

    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],//presciso falar quais são os componentes ou outros recursos que serão carregados por esse módulo.
    bootstrap: [AppComponent] //bootstrap é onde se fala qual será o component que será carregado primeiramente.
})

export class AppModule{ 
    
}