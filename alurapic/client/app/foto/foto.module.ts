import{NgModule} from "@angular/core";
import{FotoComponent} from "./foto.component";
import{FiltroPorTitulo} from './foto.pipes';//npo caso de algum pipe que lida com os componentes desse módulo,
                                            //devemos importá-lo também no módulo.

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo],
    exports: [FotoComponent, FiltroPorTitulo]
})

export class FotoModule{
    
}