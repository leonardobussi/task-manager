import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = "https://bussitask.herokuapp.com/tasks"



  constructor( private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': "_tyyqwvTWucgJyyxBxpR"
  })



  listarTodos(){
    return this.http.get(this.url, {
     headers: this.headers
    })
  }

  create(tasks){
    return this.http.post<any>(this.url, tasks, {
      headers: this.headers
    })
  }

  listarEspecifico(id:number){
    return this.http.get(`${this.url}/${id}`, {
      headers: this.headers
    })
  }

  editar( id:number, tasks){
    return this.http.put(`${this.url}/${id}`, tasks, {
      headers: this.headers
    })
  }

  deletar(id:number){
    return this.http.delete(`${this.url}/${id}`, {
      headers: this.headers
    })
  }





}
