import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'process';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

 
      title:  string
      description:  string
      done: any
      deadline: any

  public userId = 0

  constructor(private service: TasksService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit(): void {
  }

  submit_salva(){
    this.service.editar(this.userId, {"title": this.title, "description":this.description,"done": this.done, "deadline": this.deadline}).subscribe((dados:any) => {
      // this.router.navigate(["/postagem/visualizar", this.userId])
    },
    (error)=>{
      console.log(error)
    })

    console.log(this.title, this.description, this.done, this.deadline)
  
  }

}
