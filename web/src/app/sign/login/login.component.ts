import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor() { }

  ngOnInit(): void {
    this.submit_salva()
  }

  submit_salva(){
    console.log(this.email, this.password)
  }
  
}
