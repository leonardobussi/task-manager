import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Array<any>

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.listarTodos()

  }

  listarTodos(){
    // this.loading = true
    this.service.listarTodos().subscribe((data:any) => {
      this.tasks = data.data
      // this.loading = false
    },
    (error)=> {
        // this.is_message = 'Erro ao listar, aperte F5 ou tente novamente mais tarde!'
        // this.is_msg = true

        // this.is_messageSuccess = ''
        // this.is_msgSuccess = false
        // this.loading = false
    })
  }


  

  excluir_task(id){
    // this.loading = true
      this.service.deletar(id).subscribe((data:any) => {
        // this.is_message = ''
        // this.is_msg = false

        // this.is_messageSuccess = 'Sucesso ao excluir'
        // this.is_msgSuccess = true
        // this.loading = false
        this.ngOnInit()
      }, (error)=>{
       

        // this.is_message = 'Erro ao excluir'
        // this.is_msg = true

        // this.is_messageSuccess = ''
        // this.is_msgSuccess = false
        // this.loading = false
      })
    }

}
