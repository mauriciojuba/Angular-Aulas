import {Pipe, PipeTransform} from '@angular/core'; // para criar um PIPE (que é algo para lidar com os dados que temos) importamos o
import {FotoComponent} from './foto.component';     // decorator.
                                                    //também importamos a Interface, para que a classe sempre precise
                                                    //que se crie o método transform();
@Pipe({
    name: 'filtroPorTitulo' // no decorator nós atribuimos um nome ao pipe, para usá-lo no template.
})
export class FiltroPorTitulo implements PipeTransform{//com a instrução implements passamos uma Interface para a classe.
    transform(fotos: FotoComponent[],digitado: string){
        digitado = digitado.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
        //aplica o filtro, pegando o que foi digitado e comparando com o titulo da foto, ambos em minúsculo
    }
}