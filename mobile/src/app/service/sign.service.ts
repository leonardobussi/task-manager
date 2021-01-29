import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  url = "https://bussitask.herokuapp.com/sessions"
  urlRegister = "https://bussitask.herokuapp.com/users"
  

  constructor(private http: HttpClient) { }

  login(credencial){
    return this.http.post(this.url, credencial)
  }
  deslogar(token){
    return this.http.delete(`${this.url}/${token}`)
  }

  register(credencial){
    return this.http.post(this.urlRegister, credencial)
  }
}
