import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.page.html',
  styleUrls: ['./visualizacao.page.scss'],
})
export class VisualizacaoPage implements OnInit {

  t = {
    title: '',
    description: '',
    update: '',
    done: null,
    islate: null,
    deadline: ''

  }
  public userId: number = 0;
  is_message: string;
  is_msg: boolean;
  loading: boolean = false;

  constructor(private service: TaskService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.userId = params['id']);
   }

  ngOnInit() {
    this.listarEspecifico(this.userId)
  }
  is_check(){
    this.is_msg = false
  }

  listarEspecifico(id:number){
    this.loading = true
    this.service.listarEspecifico(id).subscribe((data:any) => {
      this.t = {
        title: data.data.attributes.title,
        description: data.data.attributes.description,
        update: data.data.attributes.update,
        done: data.data.attributes.done,
        islate: data.data.attributes.islate,
        deadline: data.data.attributes.deadline 
      }
      this.is_message = ''
      this.is_msg = false
      this.loading = false
    },
    (error)=>{
      this.is_message = 'Erro ao listar, recarregue a tela novamente!'
      this.is_msg = true
      this.loading = false
    })
  }

}
