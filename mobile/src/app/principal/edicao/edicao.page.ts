import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.page.html',
  styleUrls: ['./edicao.page.scss'],
})
export class EdicaoPage implements OnInit {
  t = {
    title: '',
    description: '',
    done: null,
    deadline: ''

  }

  title:  string
  description:  string
  done: any
  deadline: any

  public userId = 0
  is_msg: boolean;
  is_message: string;
  loading: boolean = false;

  constructor(private service: TaskService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit() {
    this.listarEspecifico()
  }
  is_check(){
    this.is_msg = false
  }

  submit_salva(){
    this.loading = true
    this.service.editar(this.userId, {"title": this.title, "description":this.description,"done": this.done, "deadline": this.deadline}).subscribe((dados:any) => {
      this.is_message = ''
      this.is_msg = false
      this.loading = false
      this.router.navigate(["/visualizar", this.userId])
    },
    (error)=>{
      this.is_message = 'Erro ao editar a task!'
      this.is_msg = true
      this.loading = false
    })
  }



  listarEspecifico(){
    this.service.listarEspecifico(this.userId).subscribe((data:any) => {
      

     this.t = {
       title: data.data.attributes.title,
       description: data.data.attributes.description,
       done: data.data.attributes.done,
       deadline: data.data.attributes.deadline 
     }

      this.is_message = ''
      this.is_msg = false

    }, (error)=>{
      this.is_message = 'Erro de requisição, aperta f5 ou tenta novamente mais tarde!'
      this.is_msg = true
    })
  }



}
