import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { tasks } from '../../../models/tasks.model';
import { TasksService } from '../../../services/tasks.service';

// import datebr from '../../../utils/Datebr'
import dateen from '../../../utils/DateEn'


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

 
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

  constructor(private service: TasksService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
    this.listarEspecifico(this.userId)
  }
  
  is_check(){
    this.is_msg = false
  }


  submit_salva(){
    this.service.editar(this.userId, {"title": this.title, "description":this.description,"done": this.done, "deadline": this.deadline}).subscribe((dados:any) => {
      this.is_message = ''
      this.is_msg = false
      this.router.navigate(["/tasks/visualizar", this.userId])
    },
    (error)=>{
      this.is_message = 'Erro ao editar a task!'
      this.is_msg = true
    })
  }


  listarEspecifico(id: number){
    this.service.listarEspecifico(id).subscribe((data:any) => {
      if (data.data.attributes.deadline == null){
        data.data.attributes.deadline == null
     }
     else {
       var odeadline = dateen(data.data.attributes.deadline)
     }

     this.t = {
       title: data.data.attributes.title,
       description: data.data.attributes.description,
       done: data.data.attributes.done,
       deadline: odeadline 
     }


     console.log(this.t)

    }, (error)=>{
      console.log(error)
    })
  }

}
