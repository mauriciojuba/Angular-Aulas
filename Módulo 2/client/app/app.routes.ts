//o app.routes.ts lida com as rotas das requisições de Http no URL do cliente.
import {RouterModule, Routes} from '@angular/router'; //para isso incluimos os seguintes módulos
import { ListagemComponent } from './listagem/listagem.component'; //bem como os módulos que serão carregados como páginas
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes: Routes = [//criamos um array do tipo routes que será onde ficará armazenado todas as rotas da aplicação
    //e dentro dele declaramos todas as rotas, passando o final do URL e o componente que será carregado.
    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent},
    { path: 'cadastro/:id', component: CadastroComponent},
    { path: '**', component: ListagemComponent }
]; 

export const routing = RouterModule.forRoot(appRoutes);//apenas passar as rotas não basta, devemos também usar o método forRoot
                                                    //do RouterModule atribuir a uma constante e exportá-lo para nosso módulo
                                                    //principal, ou módulo ROOT...




                                                    
//nós também precisamos atribuir a tag <base href ='/'> no index.html para a aplicação aplicar as rotas.