import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

      title:  string
      description:  string
      done: any
      deadline: any

  constructor(private service: TasksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  submit_salva(){
    this.service.create({"title": this.title, "description":this.description,"done": this.done, "deadline": this.deadline}).subscribe((data:any) => {
      this.router.navigate(["/tasks/visualizar", data.data.id])
    },
    (error)=>{
      console.log(error)
    })

    // console.log(this.title, this.description, this.done, this.deadline)
  
  }

}
