import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tasks } from '../models/tasks.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  
  url = "https://bussitask.herokuapp.com/tasks"

  headers = new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'dhxDcE33QWypK8iwB2_x'
  })
  

  constructor( private http: HttpClient) { }


  create(tasks: tasks): Observable<tasks> {
    return this.http.post<tasks>(this.url, tasks)
  }

  listarTodos(): Observable<tasks[]> {
    return this.http.get<tasks[]>(this.url, {
     headers: this.headers
    })
  }

  listarEspecifico(id:number): Observable<tasks[]> {
    return this.http.get<tasks[]>(`${this.url}/${id}`)
  }

  editar( id:number, tasks: tasks): Observable<tasks> {
    return this.http.put<tasks>(`${this.url}/${id}`, tasks)
  }

  deletar(id:number): Observable<tasks>{
    return this.http.delete<tasks>(`${this.url}/${id}`)
  }
}
