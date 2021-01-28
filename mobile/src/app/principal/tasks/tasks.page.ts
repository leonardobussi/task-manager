import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Array<any>

  constructor() { }

  ngOnInit() {
    this.tasks = [
      {
        id: 1,
        title: 'tiiii',
        done: true
      },
      {
        id: 2,
        title: 'jininn',
        done: false
      },
      {
        id: 3,
        title: 'llllls asmaksa sjanjsanssjan snns sjduwshdqhuwqhuuhquqhu ',
        done: false
      }
    ];
  }


  excluir_task(id){
    alert(`tasks do id ${id}`)
  }

}
