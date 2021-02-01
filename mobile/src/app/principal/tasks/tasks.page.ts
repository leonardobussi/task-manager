import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { SignService } from '../../service/sign.service'
import { Router } from '@angular/router';
// import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Array<any>
  token: any

  constructor(
    private service: TaskService,
    private sign: SignService,
    private router: Router
    ) { }

  ngOnInit() {
    this.listarTodos()

    this.token = localStorage.getItem('token')
  }

  listarTodos(){
    // this.loading = true
    this.service.listarTodos().subscribe((data:any) => {
      this.tasks = data.data
      this.ngOnInit()
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


    deslogar(){
      this.sign.deslogar(this.token).subscribe((data: any) => {
        localStorage.removeItem('token')
        this.router.navigate(['/home'])
      })
    }

}
