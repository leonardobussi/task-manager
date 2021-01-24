import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sign } from '../models/sign.model';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  url = "https://bussitask.herokuapp.com/sessions"
  

  constructor(private http: HttpClient) { }

  login(credencial): Observable<sign> {
    return this.http.post<sign>(this.url, credencial)
  }
  deslogar(token): Observable<any> {
    return this.http.delete<any>(`${this.url}/${token}`)
  }
}
