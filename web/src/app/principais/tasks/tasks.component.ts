import { Component, OnInit } from '@angular/core';
import { tasks } from 'src/app/models/tasks.model';
import { TasksService } from '../../services/tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Array<any>

  constructor(private service: TasksService ) { }

  ngOnInit(): void {
    this.listarTodos()
  }

  onSelect() {
    
  }

  excluir_task(id){
      this.service.deletar(id).subscribe((data:any) => {
      }, (error)=>{
        console.log(error)
      })
    }


  listarTodos(){
    this.service.listarTodos().subscribe((data:any) => {
      this.tasks = data.data
    },
    (error)=>{
      console.log(error)
    })
  }

}
