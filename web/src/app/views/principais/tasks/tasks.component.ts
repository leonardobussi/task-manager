import { Component, OnInit } from '@angular/core';
import { tasks } from '../../../models/tasks.model';
import { TasksService } from '../../../services/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Array<any>
  is_message: string = ''
  is_msg: boolean = false
  is_messageSuccess: string;
  is_msgSuccess: boolean;

  constructor(private service: TasksService ) { }

  ngOnInit(): void {
    this.listarTodos()
  }

  is_check(){
    this.is_msg = false
    this.is_msgSuccess = false
  }


  excluir_task(id){
      this.service.deletar(id).subscribe((data:any) => {
        this.is_message = ''
        this.is_msg = false

        this.is_messageSuccess = 'Sucesso ao excluir'
        this.is_msgSuccess = true


        this.ngOnInit()
      }, (error)=>{
       

        this.is_message = 'Erro ao excluir'
        this.is_msg = true

        this.is_messageSuccess = ''
        this.is_msgSuccess = false

      })
    }


  listarTodos(){
    this.service.listarTodos().subscribe((data:any) => {
      this.tasks = data.data
    },
    (error)=> {
        this.is_message = 'Erro ao listar, aperte F5 ou tente novamente mais tarde!'
        this.is_msg = true

        this.is_messageSuccess = ''
        this.is_msgSuccess = false
    })
  }

}
