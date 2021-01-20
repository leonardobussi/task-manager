import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

import datebr from '../../utils/Datebr'
@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {
  
  t: object = {}
  public userId: number = 0;
  

  constructor(private service: TasksService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
    this.listarEspecifico(this.userId)
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

      var d = data.data.attributes

      console.log(d)

    },
    (error)=>{
     console.log(error)
    })
  }


}
