import{NgModule} from "@angular/core";
import{FotoComponent} from "./foto.component";
import{FiltroPorTitulo} from './foto.pipes';//npo caso de algum pipe que lida com os componentes desse módulo,
                                            //devemos importá-lo também no módulo.
import {FotoService} from './foto.service';//importa o serviço que criamos

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo],
    exports: [FotoComponent, FiltroPorTitulo],
    providers: [FotoService] //lista os serviços ou provedores de serviço
})

export class FotoModule{
    
}