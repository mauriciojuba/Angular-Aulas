import {Component} from "@angular/core";
import {FotoComponent} from "../foto/foto.component";
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; //Lidam com as validações de formulários dentro do BackEnd
import {FotoService} from "../foto/foto.service"; //já que trocamos onde serão lidadas as requisições devemos importar o serviço.
import {ActivatedRoute, Router} from "@angular/router"; //pega informações da rota ativa, se eu quiser saber o ID da imagem clicada.

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent{
    foto : FotoComponent = new FotoComponent;

    meuForm: FormGroup; // crio o grupo que contem meu formulário.

    service: FotoService; // crio o serviço para usar no meu componente

    route: ActivatedRoute;
    router: Router;

    constructor(service:FotoService,fb:FormBuilder, route:ActivatedRoute, router:Router){
        this.route = route;
        this.service = service;
        this.router = router;
        this.meuForm = fb.group({
            titulo: ['',Validators.required],
            url: ['',Validators.required],
            descricao: ['']
        });
        this.route.params.subscribe(params => {
            let id = params['id']
            if(id){
                this.service.buscaPorId(id).subscribe(res=>{
                    this.foto = res.json();}
                );
            }
        })
    }
    cadastrar(event:Event){
        event.preventDefault(); 

        this.service.cadastra(this.foto).subscribe(() => { //usando o método dentro do serviço criado temos o mesmo resultaod.
            this.foto = new FotoComponent();  
            this.router.navigate(['']);                      
        });       


        
    }
}