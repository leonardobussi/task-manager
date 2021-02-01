import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from "@ionic/storage"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = "https://bussitask.herokuapp.com/tasks"
  token: any = "";

 
  constructor( private http: HttpClient, public storage: Storage) { }

  

  headers = new HttpHeaders({
   
    'Content-Type':  'application/json',
    'Authorization': ""+localStorage.getItem('token')
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
