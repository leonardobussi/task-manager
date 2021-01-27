import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../../services/tasks.service'

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
      is_msg: boolean;
      is_msgSuccess: boolean;
    is_message: string;
    is_messageSuccess: string;
    loading: boolean = false;

  constructor(private service: TasksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  is_check(){
    this.is_msg = false
  }


  submit_salva(){
    this.loading = true
    this.service.create({"title": this.title, "description":this.description,"done": this.done, "deadline": this.deadline}).subscribe((data:any) => {
      this.is_message = ''
      this.is_msg = false
      this.loading = false
      this.router.navigate(["/tasks/visualizar", data.data.id])
    },
    (error)=>{
      this.loading = false
      this.is_message = 'Erro ao criar task!'
      this.is_msg = true
    })
  
  }

}
