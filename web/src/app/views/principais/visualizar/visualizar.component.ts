import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { tasks } from '../../../models/tasks.model';
import { TasksService } from '../../../services/tasks.service';

import datebr from '../../../utils/Datebr'
@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {
  
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
  

  constructor(private service: TasksService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
    this.listarEspecifico(this.userId)
  }

  is_check(){
    this.is_msg = false
  }
 

  listarEspecifico(id:number){
    this.service.listarEspecifico(id).subscribe((data:any) => {

     

      if (data.data.attributes.deadline == null){
         data.data.attributes.deadline == null
      }
      else {
        var odeadline = datebr(data.data.attributes.deadline)
      }

      this.t = {
        title: data.data.attributes.title,
        description: data.data.attributes.description,
        update: datebr(data.data.attributes.update, true),
        done: data.data.attributes.done,
        islate: data.data.attributes.islate,
        deadline: odeadline 
      }



    },
    (error)=>{
      this.is_message = 'Erro ao listar, aperte F5 ou tente novamente mais tarde!'
      this.is_msg = true

    })
  }


}
