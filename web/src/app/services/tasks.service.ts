import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tasks } from '../models/tasks.model';
import { HttpHeaders } from '@angular/common/http';


// import headersHttpJson from '../utils/HeadersHttpJson'





@Injectable({
  providedIn: 'root'
})



export class TasksService {


  token = localStorage.getItem('token')

  // head = headersHttpJson()
  
  url = "https://bussitask.herokuapp.com/tasks"


  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': this.token
  })
  

  constructor( private http: HttpClient) { }


  create(tasks): Observable<any> {
    return this.http.post<any>(this.url, tasks, {
      headers: this.headers
    })
  }

  listarTodos(): Observable<tasks[]> {
    return this.http.get<tasks[]>(this.url, {
     headers: this.headers
    })
  }

  listarEspecifico(id:number): Observable<tasks[]> {
    return this.http.get<tasks[]>(`${this.url}/${id}`, {
      headers: this.headers
    })
  }

  editar( id:number, tasks): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, tasks, {
      headers: this.headers
    })
  }

  deletar(id:number): Observable<tasks>{
    return this.http.delete<tasks>(`${this.url}/${id}`, {
      headers: this.headers
    })
  }
}
